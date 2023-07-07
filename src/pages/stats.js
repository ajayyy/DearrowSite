import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Layout from "../components/layout";
import Seo from "../components/seo";

const API_BASE = "https://sponsor.ajay.app";
let endpoint = "/api/getTopBrandingUsers?";
let sortType = 0;

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        activeUsers: "Loading",
        titles: "Loading",
        thumbnails: "Loading",
    });

    const [topUsers, setTopUsers] = useState([]);
    const [isTotalStatsLoading, setIsTotalStatsLoading] = useState(true);

    function setTopUserData(clickedElement) {
        const url = new URL(`${API_BASE}${endpoint}`);
        url.searchParams.append("sortType", sortType);
        return fetch(url)
            .then((response) => {
                if (response.ok) return response.json()
                else return Promise.reject(response)
            })
            .then((resultData) => {
                if (clickedElement) {
                    [...document.getElementsByClassName("sorted")].forEach(
                        (el) => el.classList.remove("sorted")
                    );
                    clickedElement.classList.add("sorted");
                    clickedElement.classList.remove("sort-loading");
                }

                setTopUsers(resultData);
            })
            .catch((r) => console.error(r));
    }

    useEffect(() => {
        fetch(API_BASE + "/api/brandingStats")
            .then((response) => {
                if (response.ok) return response.json()
                else return Promise.reject(response)
            })
            .then((resultData) => {
                setIsTotalStatsLoading(false);
                setTotalStats(resultData);
            })
            .catch((r) => console.error(r));
        setTopUserData();
    }, []);

    return (
        <Layout>
            <Seo title="Stats" />

            <div className="container">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Active Users:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.activeUsers.toLocaleString()} users
                            </td>
                        </tr>
                        <tr>
                            <td>Titles Submitted:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.titles.toLocaleString()}{" "}
                                submissions
                            </td>
                        </tr>
                        <tr>
                            <td>Thumbnails Submitted:</td>
                            <td
                                className={
                                    isTotalStatsLoading ? "loading" : null
                                }
                            >
                                {totalStats.thumbnails.toLocaleString()}{" "}
                                submissions
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h2 className="text-center no-bottom-margin">
                        Top Contributors
                    </h2>

                    <div className="text-center text-small">
                        Click a column title to change the sort
                    </div>
                </div>
            </div>

            <div className="container-fluid stats-table">
                <table className="highlight-row-on-hover">
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th>User Name</th>
                            <th
                                className="pointer sorted"
                                onClick={(e) => {
                                    if (e.target.classList.contains("sorted"))
                                        return;
                                    e.target.classList.add("sort-loading");
                                    sortType = 0;
                                    setTopUserData(e.target);
                                }}
                            >
                                Titles
                            </th>
                            <th
                                className="pointer"
                                onClick={(e) => {
                                    if (e.target.classList.contains("sorted"))
                                        return;
                                    e.target.classList.add("sort-loading");
                                    sortType = 1;
                                    setTopUserData(e.target);
                                }}
                            >
                                Thumbnails
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {topUsers.length === 0 ? (
                            <tr className={"row--even"}>
                                <td className="topUsersLoading" colSpan="5">
                                    Loading...
                                </td>
                            </tr>
                        ) : (
                            topUsers.map((value, index) => (
                                <tr
                                    className={`row--${
                                        index % 2 ? "odd" : "even"
                                    }`}
                                    key={index}
                                >
                                    <td className="rank celltype-number">
                                        {index + 1}.
                                    </td>
                                    <td>{value.userName}</td>
                                    <td className="celltype-number">
                                        {value.titles.toLocaleString()}
                                    </td>
                                    <td className="celltype-number">
                                        {value.thumbnails}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default IndexPage;
