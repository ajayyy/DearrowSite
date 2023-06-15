import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Seo title="About" />

        <div className="container">
            <h2>How it works</h2>

            <p>
                DeArrow takes inspiration from my other project, SponsorBlock, moving on to use the community{" "}
                to fix the way all videos are presented in your feed.
            </p>

            {/* markdown above to html */}

            <p>
                The browser extension first fetches data from the {" "}
                <a href="https://github.com/ajayyy/SponsorBlockServer">backend</a>{" "}
                about submitted titles and thumbnails.

                If one is found, it replaces the branding locally.
            </p>

            <p>
                All thumbnails are just timestamps in a video, so they need to be generated.{" "}
                There are two options to generate them. One is to use the {" "}
                <a href="https://github.com/ajayyy/DeArrowThumbnailCache">thumbnail generation service</a>{" "}
                , and another is to generate it locally.

                It tries both and uses the fastest one. The thumbnail generation service will cache thumbnails for future requests,{" "}
                making it return instantly for the next user. Local thumbnail generation is done by taking a screenshot of an HTML video element using and drawing that to a canvas.
            </p>

            <p>
                If no thumbnails or titles are submitted, it switches to the configurable fallback options.{" "}
                Titles will be formatted according to user preference (title or sentence cases).{" "}
                Thumbnails, by default, are generated at a random timestamp that is not in a {" "}
                <a href="https://github.com/ajayyy/SponsorBlock">SponsorBlock</a>{" "}
                segment.
            </p>

            <p>
                Lastly, it adds a "show original" button if anything was changed, allowing you to peek at the original title and thumbnail when you want.
            </p>


            <h3>When was this started</h3>

            <p>
                DeArrow was first released to the public
                on June 10th 2023.
            </p>

        </div>
    </Layout>
);

export default IndexPage;
