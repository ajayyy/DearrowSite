import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { extensionLinks } from "../utils/links";
import BeforeAfterImage from "../components/beforeAfterImage";

const paywallEnabled = true;

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        activeUsers: "Loading",
        titles: "Loading",
        thumbnails: "Loading",
    });

    const [chromeLink, setChromeLink] = useState(extensionLinks.chrome);
    const [firefoxLink, setFirefoxLink] = useState(extensionLinks.firefox);

    useEffect(() => {
        if (paywallEnabled) {
            setChromeLink(`payment#link=chrome`);
            setFirefoxLink(`payment#link=firefox`);
        }
    });

    useEffect(() => {
        fetch("https://sponsor.ajay.app/api/brandingStats")
            .then((response) => response.json())
            .then((resultData) => resultData.activeUsers !== undefined ? setTotalStats(resultData) : null);
    }, []);

    return (
        <Layout>
            <Seo
                title="DeArrow - A Browser Extension for Better Titles and Thumbnails"
            />

            <div className="title">
                <img src="/logo.svg" alt="Logo" />

                <span style={{ color: "white" }}>DeArrow</span>
            </div>

            <div className="container">
                <div className="">
                    <p>
                        DeArrow is an open source browser extension for crowdsourcing better titles and thumbnails on YouTube.
                        The goal is to make titles accurate and reduce sensationalism. No more arrows, ridiculous faces, and no more clickbait.
                    </p>

                    <BeforeAfterImage
                        image1="/before.png"
                        image2="/after.jpg"
                    />

                    <p>
                        "Clickbait" isn't the exception anymore, it's becoming the norm.
                        Many have even started going through their entire backlog, changing old titles and thumbnails to be more attention grabbing and vague.
                    </p>
                    
                    <p>
                        It's no one's fault. It's a system that creates a race to the bottom.
                    </p>

                    <p>
                        DeArrow hopes to stop this cycle. It's time to return to a more peaceful experience.
                    </p>

                    <div className="text-center">
                        <h2>Download</h2>

                        <a href={chromeLink}
                        >
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a href={firefoxLink}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>

                        <a
                            href={"https://apps.apple.com/app/dearrow-for-youtube/id6451469297"}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img 
                                src="/safari.svg" 
                                alt="Download for Safari on macOS or iOS"
                                style={{ height: "58px" }} />
                        </a>

                        <a
                            href={chromeLink}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/edge.png"
                                alt="Download for Edge"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a
                            href={chromeLink}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/opera.png" alt="Download for Opera" />
                        </a>

                        <a
                            href={"https://github.com/ajayyy/DeArrow/wiki/Android"}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img 
                                src="/android.png" 
                                alt="Download for Android"
                                style={{ height: "58px" }} />
                        </a>

                        <a
                            href={"https://apps.apple.com/app/dearrow-for-youtube/id6451469297"}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img 
                                src="/IOS_logo.png" 
                                alt="Download for iOS"
                                style={{ height: "58px" }} />
                        </a>

                        {
                            !paywallEnabled &&
                                <div className="paywall-notice">
                                    <div>
                                        Please note that DeArrow is in beta.{" "}
                                        DeArrow is free, forever, for anyone who installs during the beta. However,{" "}
                                        there will be a soft-paywall for new users in the future.<br/>
                                        <a href="https://gist.github.com/ajayyy/36a96ffc786f4e518fb62cac8b9674aa" rel="noreferrer" target="_blank">See details</a>
                                    </div>
                                </div>
                        }

                        <h3>3rd Party Ports</h3>

                        <a
                            href="https://wiki.sponsor.ajay.app/w/DeArrow/Community#Desktop"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/computer.svg"
                                alt="Download for Desktop"
                                style={{ height: "30px" }} />
                        </a>

                        <a
                            href="https://github.com/ajayyy/DeArrow/issues/39#issuecomment-1622742284"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/invidious-logo.svg"
                                alt="Userscript for Invidious"
                                style={{ height: "30px" }} />
                        </a>

                        <a
                            href="https://wiki.sponsor.ajay.app/w/DeArrow/Community#Discord"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/discord.png"
                                alt="Download for Discord Integrations"
                                style={{ height: "30px" }} />
                        </a>
                    </div>

                    <p>
                        There are currently{" "}
                        <strong>{totalStats.activeUsers.toLocaleString()}</strong>{" "}
                        users who have submitted{" "}
                        <strong>
                            {totalStats.titles.toLocaleString()}
                        </strong>{" "}
                        titles and{" "}
                        <strong>
                            {totalStats.thumbnails.toLocaleString()}
                        </strong>{" "}
                        thumbnails.
                    </p>

                    <p>
                        Watch a demo below!
                    </p>


                    <a 
                        href="https://www.youtube.com/watch?v=QjjpDhHh_QI"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src="/video.png"
                            alt="Demo video"
                        />
                    </a>

                    <p>
                        Titles can be any arbitrary text. Thumbnails are screenshots from specific timestamps in the video. These are user submitted and voted on.

                        By default, if there are no submissions, it will format the original title to the user-specified format, and set a screenshot from a random timestamp as the thumbnail.
                        This can be configured in the options to disable formatting, or show the original thumbnail by default.
                    </p>

                    <p>
                        Check{" "}
                        <a href="https://status.sponsor.ajay.app">
                            status.sponsor.ajay.app
                        </a>{" "}
                        for server status.
                    </p>

                    <p>
                        The{" "}
                        <a href="https://github.com/ajayyy/DeArrow">
                            source code
                        </a>{" "}
                        is fully open and the{" "}
                        <a href="https://sponsor.ajay.app/database">database</a>{" "}
                        can be downloaded by anyone. I want to keep this as open
                        as possible! You can view the docs for the{" "}
                        <a href="https://wiki.sponsor.ajay.app/w/API_Docs/DeArrow">
                            public API
                        </a>{" "}
                        or{" "}
                        <a href="https://github.com/mchangrh/sb-mirror">
                            host a mirror
                        </a>
                        .
                    </p>

                    <p className="text-center">
                        Check out <Link to="/about">how it works</Link>.
                    </p>

                    <p className="text-center">
                        Come chat with us on{" "}
                        <a href="https://discord.gg/SponsorBlock">Discord</a> or{" "}
                        <a href="https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org">
                            Matrix
                        </a>
                        .
                    </p>

                    <h4 className="text-center">Credit</h4>

                    <p className="text-center">
                        Built and maintained by{" "}
                        <a href="https://ajay.app/">Ajay Ramachandran</a>
                    </p>

                    <p className="text-center">
                        Website rewritten by{" "}
                        <a href="https://jeremyplsek.com/">Jeremy Plsek</a>
                    </p>

                    <p>
                        Thanks to all{" "}
                        <a href="https://github.com/ajayyy/DeArrow/graphs/contributors">
                            DeArrow contributors
                        </a>
                        ,{" "}
                        <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                            SponsorBlockServer contributors
                        </a>
                        , {" "}
                        <a href="https://github.com/ajayyy/DeArrowSite/graphs/contributors">
                            DeArrowSite contributors
                        </a>
                        , and replacement title and thumbnail contributors{" "}
                        such as <a href="https://mchang.name/">Michael Chang</a>,{" "}
                        <a href="https://github.com/mschae23">mschae23</a>,{" "}
                        <a href="https://github.com/SuperManifolds">Alex Sørlie</a>,{" "}
                        <a href="https://mlnr.dev/">cane</a>,{" "}
                        UnventedManicotti,{" "}
                        jiraph{" "}
                        and more.
                    </p>

                    <p className="text-center">
                        <a href="https://gist.github.com/ajayyy/9bfec83d57ea34f5182658ec8445aa9d">
                            Privacy Policy (Human Readable)
                        </a>
                        {", "}
                        <a href="https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12">
                            Terms of Use
                        </a>
                        {", "}
                        <a href="donate">Donate</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
