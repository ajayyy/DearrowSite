import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import BeforeAfterImage from "../components/beforeAfterImage";
import DownloadLinks from "../components/download-links";

const IndexPage = () => {
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

                    <Link style={{display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none"
                        }}
                        to="/casual"
                        target="_blank"
                        rel="noreferrer">
                        <img src="logo-casual.svg"
                            style={{width: "35px", padding: "10px"}}/>

                        <span>
                            Too extreme? Also check out casual mode
                        </span>
                    </Link>

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

                    <DownloadLinks/>

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
                        <a href="https://mschae23.de">mschae23</a>,{" "}
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

                    <p className="text-center">
                        <a href="free">DeArrow Free</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
