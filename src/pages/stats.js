import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Layout from "../components/layout";
import SEO from "../components/seo";

const API_BASE = 'https://sponsor.ajay.app';

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        activeUsers: 0,
        userCount: 0,
        totalSubmissions: 0,
        minutesSaved: 0,
        viewCount: 0,
    });
    const [categoryStats, setCategoryStats] = useState({
      visible: false,
      data: []
    });
    
    const categoryStatsTitles = [
      'Sponsor',
      'Intro',
      'Outro',
      'Interaction',
      'Self Promotion',
      'Non-Music Section',
    ];
    const categoryStatsColors = ['#ff402c','#ff9416','#ffca1f','#d42ae8','#535ad7','#4bd762'];

    const [topUsers, setTopUsers] = useState([]);

    function setTopUserData(url) {
        return fetch(url)
            .then(response => response.json())
            .then(resultData => {
                let size = resultData.userNames.length;

                const transformedData = [];
                for (let i = 0; i < size; i++) {
                    const hours = Math.floor(
                        resultData.minutesSaved[i] / 60
                    );
                    let categoryStats = false;
                    
                    if ('categoryStats' in resultData) {
                        const total = resultData.categoryStats[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                        categoryStats = resultData.categoryStats[i].map(value => ([value, ((value / total) * 100).toFixed(2)]));
                    }
                    
                    transformedData.push({
                        userName: resultData.userNames[i],
                        viewCount: resultData.viewCounts[i],
                        totalSubmissions: resultData.totalSubmissions[i],
                        minutesSaved:
                            (hours > 0 ? hours + "h " : "") +
                            (resultData.minutesSaved[i] % 60).toFixed(1) +
                            "m",
                        categoryStats: categoryStats,
                    });
                }

                setTopUsers(transformedData);
            });
    }

    useEffect(() => {
        fetch(API_BASE + "/api/getTotalStats")
            .then(response => response.json())
            .then(resultData => setTotalStats(resultData));

        setTopUserData(API_BASE + "/api/getTopUsers?sortType=0&categoryStats=true");
    }, []);
    
    const displayCategoryStats = (stats) => {
      if (stats === false) return;
      setCategoryStats({visible:true, data:stats});
    };
    
    const hideCategoryStats = () => {
      setCategoryStats({visible:false, data:[]});
    };

    return (
        <Layout>
            <SEO title="Stats" />

            <div className="container">
                <h2 className="text-center">Overall Stats</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Active Users:</td>
                            <td>{totalStats.activeUsers.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Contributing Users:</td>
                            <td>{totalStats.userCount.toLocaleString()} users</td>
                        </tr>
                        <tr>
                            <td>Submissions:</td>
                            <td>{totalStats.totalSubmissions.toLocaleString()} segments</td>
                        </tr>
                        <tr>
                            <td>Time Saved:</td>
                            <td>
                                {Math.floor(totalStats.minutesSaved / 60 / 24 / 365)}{" "}
                                years{" "}
                                {(Math.floor(totalStats.minutesSaved / 60 / 24) % 365)}{" "}
                                days{" "}
                                {((totalStats.minutesSaved / 60) % 24).toFixed(
                                    1
                                )}{" "}
                                hours
                            </td>
                        </tr>
                        <tr>
                            <td>Skip Count:</td>
                            <td>
                                {totalStats.viewCount.toLocaleString()} skips
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-center no-bottom-margin">Top Contributors</h2>

                <div className="text-center text-small">Click a column title to change the sort</div>
            </div>

            <div className="container-fluid stats-table">
                <table>
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th>User Name</th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        API_BASE + "/api/getTopUsers?sortType=2"
                                    )
                                }
                            >
                                Submissions
                            </th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        API_BASE + "/api/getTopUsers?sortType=0"
                                    )
                                }
                            >
                                Time Saved
                            </th>
                            <th
                                className="pointer"
                                onClick={() =>
                                    setTopUserData(
                                        API_BASE + "/api/getTopUsers?sortType=1"
                                    )
                                }
                            >
                                Total Skips
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {topUsers.map((value, index) => (
                            <tr className={`row--${index % 2 ? 'odd' : 'even'}`} key={index}>
                                <td className="rank celltype-number">{index + 1}.</td>
                                <td>{value.userName}</td>
                                <td
                                  className="celltype-number has--categorystats"
                                  onMouseEnter={_=>{displayCategoryStats(value.categoryStats)}}
                                  onMouseLeave={_=>{hideCategoryStats()}}>
                                    {value.totalSubmissions.toLocaleString()}
                                </td>
                                <td className="celltype-number">{value.minutesSaved}</td>
                                <td className="celltype-number">{value.viewCount.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <div className={classNames('categorystats', {'categorystats--hidden':!categoryStats.visible})}>
                  <table>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th colSpan="2">Submissions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {categoryStats.data.map((data, index) => (
                      <tr className={classNames({'dim':data[0] === 0})} style={{
                        color: categoryStatsColors[index]
                      }} key={index}>
                        <td>{categoryStatsTitles[index]}</td>
                        <td className="celltype-number">{data[0]}</td>
                        <td className="celltype-number">{data[1]}%</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
