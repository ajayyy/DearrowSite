import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import BeforeAfterImage from "../components/beforeAfterImage";
import DownloadLinks from "../components/download-links";

const CasualPage = () => {
    return (
        <Layout>
            <Seo
                title="DeArrow casual mode"
            />

            <div className="title">
                <img src="/logo-casual.svg" alt="Logo" />

                <span style={{ color: "white" }}>Casual mode</span>
            </div>

            <div className="container">
                <div className="">
                    <p>
                        DeArrow is an open source browser extension for crowdsourcing better titles and thumbnails on YouTube.
                        The goal is to make titles accurate and reduce sensationalism.
                    </p>

                    <p>
                        With casual mode, you can keep original titles when they describe the video well enough and are clever or funny.
                        Choose which categories of titles you want to see.
                        You'll be able to vote if a title fits into a category or not.
                    </p>

                    <img src={"casual-vs-normal.png"} 
                        className="before-after-image" 
                        alt="Casual mode setting" />

                    <iframe style={{ width: "100%" }} align="center" width="560" height="450" src="https://www.youtube-nocookie.com/embed/O3JGEDdB6Hc?modestbranding=1&rel=0" title="Demo Video"
                        frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <p>
                        Read more about casual mode <a href="https://wiki.sponsor.ajay.app/w/DeArrow/Casual_mode">on the wiki</a>
                    </p>


                    <DownloadLinks/>

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

export default CasualPage;
