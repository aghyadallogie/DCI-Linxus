import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Entries } from './pagination/Entries';
import { PaginationButtons } from './pagination/PaginationButtons';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default function Results() {

    const [matchingUsers, setMatchingUsers] = useState([{ refs: [], _id: 0, name: "", email: "" }]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(8);

    const myUsers = useSelector(state => state.user.matchingUsers);

    useEffect(() => {
        setLoading(true);
        setMatchingUsers(myUsers)
        setLoading(false);
    }, [myUsers])

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = matchingUsers.slice(indexOfFirstEntry, indexOfLastEntry);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if (!isAuthenticated) return <Redirect to="/" />

    return (
        <Container>
            <h1 className="text-primary mb-3">Results</h1>
            <Entries users={currentEntries} loading={loading} />
            <PaginationButtons entriesPerPage={entriesPerPage} totalEntries={matchingUsers.length} paginate={paginate} />
        </Container>
    );
}


