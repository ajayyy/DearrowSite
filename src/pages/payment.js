import React, { useState, useEffect } from "react";

import Seo from "../components/seo";
import { extensionLinks } from "../utils/links";
import { getHashParams } from "../utils/links";
import BeforeAfterImage from "../components/beforeAfterImage";

import "./payment.scss";

const serverAddress = "https://sponsor.ajay.app";

const hashParams = getHashParams();
let safeToSendMessages = false;

if (typeof window !== "undefined") {
    const inExtension = window.top !== window.self;
    if (inExtension) {
        window.addEventListener("message", (e) => {
            // Only allow browser extensions to do this
            if (!safeToSendMessages && !e.origin.match(/^https?:\/\//) && e.data === "dearrow-payment-page") {
                safeToSendMessages = true;

                const choices = {
                    freeTrial: localStorageGet("freeTrial"),
                    licenseKey: localStorageGet("licenseKey"),
                    freeAccess: localStorageGet("freeAccess")
                }

                if (choices.freeTrial || choices.licenseKey || choices.freeAccess) {
                    window.top.postMessage({
                        message: "dearrow-payment-page-data",
                        choices
                    }, "*");

                    localStorage.removeItem("freeTrial");
                    localStorage.removeItem("licenseKey");
                    localStorage.removeItem("freeAccess");
                }
            }
        });
    }
}

const PaymentsPage = () => {
    const [showBeforeAfter, setShowBeforeAfter] = useState(false);
    const [redeemEnabled, setRedeemEnabled] = useState(false);
    const [showRedeem, setShowRedeem] = useState(false);
    const [openFreeAccessModal, setOpenFreeAccessModal] = useState(false);
    const [showFreeTrial, setShowFreeTrial] = useState(false);
    const [showRequestFreeAccessButton, setShowRequestFreeAccessButton] = useState(false);

    const [inExtension, setInExtension] = useState(false);
    const [nextPage, setNextPage] = useState(undefined);

    useEffect(() => {
        const inExtension = window.top !== window.self;
        setInExtension(inExtension);

        if (!hashParams.hideFreeTrial && !localStorageGet("usedFreeTrial")) {
            setShowFreeTrial(true);
        }

        if (!hashParams.hideRedeem) {
            setShowRedeem(true);
        }

        if (!hashParams.hideRequestFreeAccessButton) {
            setShowRequestFreeAccessButton(true);
        }

        if (!inExtension) {
            setNextPage(hashParams.link 
                ? extensionLinks[hashParams.link]
                : (navigator.userAgent.includes("Firefox") ? extensionLinks.firefox : extensionLinks.chrome));
        }

        setShowBeforeAfter(true);
    }, []);

    return (
        <div>
            <Seo
                title="Payment"
            />

            <div className="payment-container container">
                <p>
                    DeArrow is a paid browser extension. 
                    You can purchase an unlimited-use license key for <b>1$</b>.
                </p>

                <p>
                    However, if you cannot, or do not want to pay,{" "}
                    <b>there is an option to request free access at the bottom</b>.
                </p>

                {showFreeTrial && 
                    <div className="center row-item">
                        <a href={nextPage}
                            className="option-link side-by-side" 
                            target="_blank" 
                            rel="noreferrer"
                            onClick={() => {
                                startFreeTrial(inExtension);

                                setShowFreeTrial(false);
                            }}>
                            <div className="option-button side-by-side inline">
                                Try it out for an hour (No credit card required)
                            </div>
                        </a>
                    </div>
                }

                <div className="center row-item who-am-i">
                    <p className="header">
                        Who am I?
                    </p>

                    <p className="text">
                        Hi, I'm Ajay.
                        For the last 4 years, I've been working on SponsorBlock, an open-source privacy respecting browser extension and open API for skipping and identifying sponsors and other annoyances in YouTube videos.
                        In June, I launched DeArrow, an extension targeting the next biggest annoyance on YouTube.
                    </p>

                    <p className="text">
                        In January 2024, I will be graduating from university and hope to make SponsorBlock, DeArrow and future open-source user-focused tools my full time job.
                        This DeArrow paywall is how I believe I'm going to make that possible.
                    </p>

                    <p className="text">
                        With this paywall, I am trying to create a funding mechanism for my projects while still allowing universal access.
                        That's why <b>if you cannot or do not want to pay, I still very much want you to be able to use DeArrow as much as anyone else using the button at the bottom.</b>{" "}
                        But, if you can pay, I would really appreciate you supporting the project.
                    </p>
                </div>

                <div className="center row-item">
                    <a href="https://theajayyy.itch.io/dearrow" className="option-link side-by-side" target="_blank" rel="noreferrer">
                        <div id="oneTimePurchase" className="option-button inline">
                            Buy for $1
                        </div>
                    </a>
                </div>

                {
                    showRedeem && 
                    <div className="center row-item">
                        <input 
                            id="redeemCodeInput" 
                            className="option-text-box" 
                            type="text" 
                            placeholder="Enter license key"
                            onChange={(e) => {
                                setRedeemEnabled(e.target.value.length > 0);
                            }}/>

                        <a
                            className="option-link" 
                            target="_blank" 
                            rel="noreferrer"
                            onClick={() => {
                                if (!redeemEnabled) return;
                                redeemLicenseKey(setRedeemEnabled, nextPage, inExtension);
                            }}>
                            <div className={"option-button side-by-side inline" + (!redeemEnabled ? " disabled" : "")}>
                                Redeem
                            </div>
                        </a>
                    </div>
                }

                <div className="center row-item">
                    <a href="https://www.patreon.com/oauth2/authorize?response_type=code&client_id=-W7ib8J-LB3jowb1fqE07A7RDUovy45_pOoWcjby6yr5upo6At8Jlg2BPhWDXO2k&redirect_uri=https%3A%2F%2Fsponsor.ajay.app%2Fapi%2FgenerateToken%2Fpatreon"
                        className="option-link" target="_blank" rel="noreferrer">
                        <div className="option-button inline">
                            Patreon Sign In
                        </div>
                    </a>
                </div>

                <div className="flex-center">
                    <p className="smaller small-width no-top-margin">
                        Privacy Note: Other than intially checking your license key,{" "}
                        no requests to DeArrow servers contain your license key.{" "}
                        This means that fetching DeArrow data remains anonymous,{" "}
                        and your DeArrow submissions cannot be linked to your payment details.
                    </p>

                    <p className="smaller no-margin small-width">
                        Already paid but lost your key? Installed during the free beta but lost your key? Want an alternative payment method? Email dev@ajay.app
                    </p>
                </div>

                <br/>

                <div className={"center" + (!showRequestFreeAccessButton ? " hidden" : "")}>
                    <a className="option-link" 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => {
                            setOpenFreeAccessModal(true);
                        }}>
                        <div className="option-button inline">
                            Request Free Access
                        </div>
                    </a>
                </div>

                <div className={"center no-js-warning" + (showRequestFreeAccessButton ? " hidden" : "")}>
                    <p className="text">
                        Warning: This page is not fully functional when JavaScript is disabled
                    </p>
                </div>

                {
                    openFreeAccessModal && (
                        <div className="free-access-modal">
                            <div className="free-access-modal-content center">
                                <p>
                                    If you cannot, or do not want to pay, you can request free access.
                                    You will not be able to use the extension right away, but instead will
                                    recieve free access forever up to 3 days after installing.
                                </p>

                                {
                                    inExtension ?
                                        <p>
                                            It will notify you when you get access.
                                        </p>
                                    : 
                                        <p>
                                            Install the extension to get started, it will notify you when you
                                            get access.
                                        </p>
                                }
                                    
                                {
                                    inExtension ?
                                        <p>
                                            You can disable the extension if you want, but if
                                            you do, you will not be notified when you get access, and will have to
                                            manually check.
                                        </p>
                                    : 
                                        <p>
                                            You can disable the extension after installing if you want, but if
                                            you do, you will not be notified when you get access, and will have to
                                            manually check.
                                        </p>
                                }

                                <a href={nextPage}
                                    className="option-link" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={() => {
                                        requestFreeAccess(inExtension);

                                        setOpenFreeAccessModal(false);
                                        setShowRequestFreeAccessButton(false);
                                    }}>
                                    <div className="option-button inline">
                                        {
                                            inExtension ? "Request free access" : "Install extension"
                                        }
                                    </div>
                                </a>

                                <br/>

                                <a className="option-link" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={() => {
                                        setOpenFreeAccessModal(false);
                                    }}>
                                    <div className="option-button inline">
                                        Close
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }

                <br/>

                {
                    showBeforeAfter &&
                    <BeforeAfterImage
                        image1="/before.png"
                        image2="/after.jpg"
                    />
                }
            </div>
        </div>
    );
};

function startFreeTrial(inExtension) {
    if (inExtension && safeToSendMessages) {
        window.top.postMessage({
            message: "dearrow-payment-page-data",
            choices: {
                freeTrial: true
            }
        }, "*");
    } else {
        localStorageSet("freeTrial", true);
    }

    localStorageSet("usedFreeTrial", true);
}

async function redeemLicenseKey(setRedeemEnabled, nextPage, inExtension) {
    setRedeemEnabled(false);

    const key = document.getElementById("redeemCodeInput").value;
    const allowed = await verifyLicenseKey(key);

    if (!allowed) {
        alert("Invalid license key");
        setRedeemEnabled(true);
        return;
    }

    if (inExtension && safeToSendMessages) {
        window.top.postMessage({
            message: "dearrow-payment-page-data",
            choices: {
                licenseKey: key
            }
        }, "*");
    } else {
        localStorageSet("licenseKey", key);

        alert("Redeem successful! Now install the extension")

        window.open(nextPage, "_blank");
    }

    setRedeemEnabled(true);
}

async function verifyLicenseKey(key) {
    try {
        const response = await fetch(`${serverAddress}/api/verifyToken?licenseKey=${key}`);

        if (response.status === 200) {
            const json = await response.json();
            return json.allowed;
        } else {
            return true;
        }
    } catch (e) {}

    return true;
}

function requestFreeAccess(inExtension) {
    if (inExtension && safeToSendMessages) {
        window.top.postMessage({
            message: "dearrow-payment-page-data",
            choices: {
                freeAccess: true
            }
        }, "*");
    } else {
        localStorageSet("freeAccess", true);
    }
}

function localStorageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return undefined;
    }
}

function localStorageSet(key, value) {
    try {
        return localStorage.setItem(key, value);
    } catch (e) {
        return undefined;
    }
}

export default PaymentsPage;
