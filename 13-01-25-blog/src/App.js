import React from 'react';
import Sidebar from './Sidebar';
import BlogPost from './BlogPost';
import Pagination from './Pagination';
import { blogPosts } from './blogData';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />

            <main className="main-content">
                <div className="content-wrapper">
                    {blogPosts.map(post => (
                        <BlogPost
                            key={post.id}
                            {...post}
                        />
                    ))}
                    <Pagination />
                </div>
            </main>
        </div>
    );
};

export default App;