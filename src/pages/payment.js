import React, { useState, useEffect } from "react";

import Seo from "../components/seo";
import { extensionLinks } from "../utils/links";
import { getHashParams } from "../utils/links";
import BeforeAfterImage from "../components/beforeAfterImage";

import "./payment.scss";

const serverAddress = "https://sponsor.ajay.app";
const freeAccessWaitingPeriod = 1000 * 60 * 60 * 12

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
                    freeAccess: localStorageGet("freeAccess"),
                    freeAccessWaitingPeriod
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
    const [badPaymentMethods, setBadPaymentMethods] = useState(false);
    const [showFreeTrial, setShowFreeTrial] = useState(false);
    const [showRequestFreeAccessButton, setShowRequestFreeAccessButton] = useState(false);

    const [inExtension, setInExtension] = useState(false);
    const [nextPage, setNextPage] = useState(undefined);

    useEffect(() => {
        const inExtension = window.top !== window.self;
        setInExtension(inExtension);

        if (hashParams.hideFreeTrial === false || !localStorageGet("usedFreeTrial")) {
            setShowFreeTrial(true);
        }

        if (!hashParams.hideRedeem) {
            setShowRedeem(true);
        }

        if (!hashParams.hideRequestFreeAccessButton) {
            setShowRequestFreeAccessButton(true);
        }

        if (hashParams.free) {
            setOpenFreeAccessModal(true);
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
                    <b>click the button at the bottom to use DeArrow for free</b>.
                    No worries if you can't or don't want to pay :)
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
                                Start a free 6 hour trial
                            </div>
                        </a>

                        <div className="free-trial-text">
                            No sign up or credit card required
                        </div>
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

                <div className="flex-center">
                    <p className="smaller small-width no-top-margin">
                        Privacy Note: Other than intially checking your license key,{" "}
                        no requests to DeArrow servers contain your license key.{" "}
                        This means that fetching DeArrow data remains anonymous,{" "}
                        and your DeArrow submissions cannot be linked to your payment details.
                    </p>

                    <p className="smaller no-margin small-width">
                        Already paid but lost your key? Installed during the free beta but lost your key? Email dev@ajay.app
                    </p>
                </div>

                <br/>

                <div className={"center" + (!showRequestFreeAccessButton ? " hidden" : "")}>
                    <a className="option-link" 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => {
                            setOpenFreeAccessModal(true);
                            setBadPaymentMethods(false);
                        }}>
                        <div className="option-button inline">
                            I can't/don't want to pay
                        </div>
                    </a>
                </div>

                <div className={"center" + (!showRequestFreeAccessButton ? " hidden" : "")}>
                    <a className="option-link" 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => {
                            setOpenFreeAccessModal(true);
                            setBadPaymentMethods(true);
                        }}>
                        <div className="option-button inline">
                            None of the payment methods work for me
                        </div>
                    </a>
                </div>

                <div className={"center no-js-warning" + (showBeforeAfter ? " hidden" : "")}>
                    <p className="text">
                        Warning: This page is not fully functional when JavaScript is disabled
                    </p>
                </div>

                {
                    openFreeAccessModal && (
                        <div className="free-access-modal">
                            <div className="free-access-modal-content center">

                                {
                                    badPaymentMethods ?
                                    <>
                                        <p>
                                            I really appreciate you wanting to help support the project,
                                            but, unfortunately, I am unable to set up other payment methods at this time.
                                            I understand that you may have privacy concerns with credit cards,
                                            cannot pay due to sanctions or just don't have access to a credit card.
                                        </p>
                                        <p>
                                            You can use the button below to request free access (that lasts forever),
                                            but you'll have to wait up to <b>24 hours after installing</b> to use it.
                                            If you want to speed this up, feel free to send me an email dev @ ajay.app
                                        </p>
                                        <p>
                                            And if you still do want to support the project, you can check the list of{" "}
                                            <a 
                                                href="https://dearrow.ajay.app/donate" 
                                                target="_blank" 
                                                rel="noreferrer">
                                                    donation options
                                            </a> to see if one works for you (it has a few more options), but don't worry if you still can't :)
                                        </p>
                                    </>
                                    :
                                    <p>
                                        If you cannot, or do not want to pay, you can use DeArrow after waiting some time.
                                        You will not be able to use DeArrow right away, but instead will
                                        receive free access (that lasts forever) up to <b>24 hours after installing</b>.
                                    </p>
                                }

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
                                            inExtension ? "I want free access" : "Install extension"
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
                freeAccess: true,
                freeAccessWaitingPeriod
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
