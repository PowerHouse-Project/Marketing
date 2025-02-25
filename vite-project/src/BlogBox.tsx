import React from "react";

interface BlogBoxProps {
    title: string;
}

const BlogBox: React.FC<BlogBoxProps> = ({ title }) => {
    return (
        <div className="blog-box">
            <h3>{title}</h3>
            <p>Content for {title}</p>
        </div>
    );
};

export default BlogBox;