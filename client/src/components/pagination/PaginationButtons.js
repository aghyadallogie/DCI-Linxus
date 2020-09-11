import React from 'react';

export const PaginationButtons = ({ entriesPerPage, totalEntries, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a style={{ cursor: 'pointer' }} className="page-link" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}