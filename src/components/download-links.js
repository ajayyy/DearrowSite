import React, { useState, useEffect } from "react";

import { extensionLinks } from "../utils/links";

const paywallEnabled = true;

const DownloadLinks = () => {
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
            .then((resultData) => resultData.activeUsers !== undefined ? setTotalStats({
                ...resultData,
                activeUsers: Math.max(resultData.activeUsers, 27026 + 62896)
            }) : null);
    }, []);

    return (
        <>
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

                <a
                    href="https://wiki.sponsor.ajay.app/w/DeArrow/Community#TV"
                    style={{ paddingLeft: "15px" }}
                >
                    <img src="/tv.png"
                        alt="Download for TV"
                        style={{ height: "30px" }} />
                </a>

                <a
                    href="https://smarttubeapp.github.io/"
                    style={{ paddingLeft: "15px" }}
                >
                    <img src="/androidtv.png"
                        alt="Download for Android TV"
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
        </>
    );
};

export default DownloadLinks;
