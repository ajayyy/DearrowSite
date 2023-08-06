import React, { useState, useEffect } from "react";

import Seo from "../components/seo";
import { extensionLinks } from "../utils/links";
import { getHashParams } from "../utils/links";
import BeforeAfterImage from "../components/beforeAfterImage";

import "./payment.scss";

const serverAddress = "https://sponsor.ajay.app";

const hashParams = getHashParams();
let safeToSendMessages = false;

const PaymentsPage = () => {
    const [redeemEnabled, setRedeemEnabled] = useState(false);
    const [openFreeAccessModal, setOpenFreeAccessModal] = useState(false);
    const [showFreeTrial, setShowFreeTrial] = useState(false);
    const [showRequestFreeAccessButton, setShowRequestFreeAccessButton] = useState(!hashParams.hideRequestFreeAccessButton);

    const [inExtension, setInExtension] = useState(false);
    const [nextPage, setNextPage] = useState(undefined);

    useEffect(() => {
        const inExtension = window.top !== window.self;
        setInExtension(inExtension);

        if (!hashParams.hideFreeTrial && !localStorage.getItem("usedFreeTrial")) {
            setShowFreeTrial(true);
        }

        if (inExtension) {
            window.addEventListener("message", (e) => {
                // Only allow browser extensions to do this
                if (!e.origin.match(/^https?:\/\//) && e.data === "dearrow-payment-page") {
                    safeToSendMessages = true;

                    const choices = {
                        freeTrial: localStorage.getItem("freeTrial"),
                        licenseKey: localStorage.getItem("licenseKey"),
                        freeAccess: localStorage.getItem("freeAccess")
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
        } else {
            setNextPage(hashParams.link ? extensionLinks[hashParams.link] : extensionLinks.chrome);
        }
    }, []);

    return (
        <div>
            <Seo
                title="Payment"
            />

            <div className="payment-container container">
                <p>
                    DeArrow is a paid browser extension. 
                    You can purchase a license key for a one time payment, or get access through a Patreon subscription.
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

                <div className="center row-item">
                    <a href="https://theajayyy.itch.io/dearrow" className="option-link side-by-side" target="_blank" rel="noreferrer">
                        <div id="oneTimePurchase" className="option-button inline">
                            One Time Purchase
                        </div>
                    </a>

                    <a href="https://www.patreon.com/ajayyy" className="option-link side-by-side" target="_blank" rel="noreferrer">
                        <div className="option-button side-by-side inline">
                            Subscribe on Patreon
                        </div>
                    </a>
                </div>

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
                        }}>
                        <div className="option-button inline">
                            Request Free Access
                        </div>
                    </a>
                </div>

                {
                    openFreeAccessModal && (
                        <div className="free-access-modal">
                            <div className="free-access-modal-content center">
                                <p>
                                    If you cannot, or do not want to pay, you can request free access.
                                    You will not be able to use the extension right away, but instead will
                                    recieve free access up to 3 weeks after installing.
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

                <BeforeAfterImage
                    image1="/before.png"
                    image2="/after.jpg"
                />
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
        localStorage.setItem("freeTrial", true);
    }

    localStorage.setItem("usedFreeTrial", true);
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
        localStorage.setItem("licenseKey", key);

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
        localStorage.setItem("freeAccess", true);
    }
}

export default PaymentsPage;
