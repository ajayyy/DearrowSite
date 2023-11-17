import React, { useState, useEffect } from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";

const FreePage = () => {
    return (
        <Layout>
            <Seo
                title="Free"
            />
            <div className="container">
                <p className="text-center">
                    DeArrow can be used for free after waiting a day
                </p>

                <div className="center row-item">
                    <a href="/payment#free=true" className="option-link side-by-side">
                        <div id="oneTimePurchase" className="option-button inline">
                            Get DeArrow For Free
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default FreePage;
