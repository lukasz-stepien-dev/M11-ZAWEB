import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, publishedDate, readTime, comments, image, excerpt }) => {
    return (
        <article className="blog-post">
            <div className="post-content">
                <div className="post-header">
                    <img
                        src={image}
                        alt={title}
                        className="post-image"
                    />
                    <div className="post-info">
                        <h2 className="post-title">{title}</h2>
                        <div className="post-meta">
                            <span>Published {publishedDate}</span>
                            <span className="meta-separator">•</span>
                            <span>{readTime}</span>
                            <span className="meta-separator">•</span>
                            <span>{comments} comments</span>
                        </div>
                    </div>
                </div>
                <p className="post-excerpt">{excerpt}</p>
                <a href="#" className="read-more">Read more →</a>
            </div>
        </article>
    );
};

export default BlogPost;