import React from 'react';

interface FeatureBoxProps {
    imgSrc: string;
    title: string;
    text: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ imgSrc, title, text }) => {
    return (
        <div className="feature-box">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default FeatureBox;