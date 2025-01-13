import React from 'react';
import './Pagination.css';

const Pagination = () => {
    return (
        <div className="pagination">
            <button className="pagination-button prev">Previous</button>
            <button className="pagination-button next">Next</button>
        </div>
    );
};

export default Pagination;