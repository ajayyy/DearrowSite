import React, { useState, useEffect } from "react";

const BeforeAfterImage = (props) => {
    const [position, setPosition] = useState(null);
    const [initialAnimation, setInitialAnimation] = useState(true);

    const mouseEvent = (e) => {
        setInitialAnimation(false);

        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        setPosition(x / rect.width);
    };

    return (
        <div onMouseMove={mouseEvent}
            onTouchMove={mouseEvent}
            className="before-after-container">
            <div id="image2"
                draggable="false"
                className="after-image">
                <img src={props.image2} 
                    className="before-after-image" 
                    alt="After" />
            </div>

            <div id="image1"
                draggable="false"
                className={"draggable-before-image" + (initialAnimation ? " initial-animation" : "")}
                style={{
                    width: position != null ? `${position * 100}%` : undefined,
                }}>
                <img src={props.image1} 
                    className="before-after-image" 
                    alt="Before" />
            </div>
        </div>
    );
};

export default BeforeAfterImage;
