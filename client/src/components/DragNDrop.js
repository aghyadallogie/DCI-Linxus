import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefsAction } from '../redux/actions/refActions';
import { STORE_FILTERS } from '../redux/actions/types';

function DragNDrop({ parent }) {

    const [pool, setPool] = useState([]);
    const [filter, setFilter] = useState([]);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRefsAction())
    }, [])

    const restRefs = useSelector(state => state.auth.restRefs);
    const loggedRefs = useSelector(state => state.auth.refs);

    const mainRefs = useSelector(state => state.ref.refs);
    const values = mainRefs.map(val => val.name);

    useEffect(() => {
        if (parent === 'account') {
            setPool(restRefs);
            setFilter(loggedRefs);
        } else {
            setPool(values);
        }
    }, [mainRefs]);

    const handleDragStart = (e, item, origin) => {
        dragItem.current = { item, origin };
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }
    const handleDragEnd = () => {
        setDragging(false);
    }
    const handleDrop = (e, containerTarget) => {
        const { item, origin } = dragItem.current
        if (containerTarget == origin) { return }
        if (containerTarget == "filter") {
            const newArr = pool.filter(ref => ref !== item)
            setPool(newArr)
            setFilter([...filter, item])

        } else {
            const newAr = filter.filter(ref => ref !== item)
            setFilter(newAr)
            setPool([...pool, item])
        }

    }

    useEffect(() => {
        storeFitlers();
    }, [filter])

    const storeFitlers = () => {
        dispatch({
            type: STORE_FILTERS,
            payload: [...filter]
        })
    }

    const findRef = useRef();
    let untargetted = values.filter(ref => !filter.includes(ref));

    const findRefs = e => {
        if (findRef.current.value === '') {
            console.log('xello', findRef.current);
            setPool(untargetted);
        } else {
            let targetted = values.filter(ref => ref === e.target.value);
            setTimeout(() => {
                setPool(targetted);
            }, 2000)
        }
    }

    const clearFindRefs = () => {
        findRef.current.value = '';
        setPool(untargetted);
    }

    return (
        <div className="drag-n-drop" onMouseEnter={() => findRef.current.focus()}>
            <div className="pool-find">
                <div className="find-ref">
                    <input ref={findRef} className="input-box" type="text" name="" onChange={e => findRefs(e)} />
                    <button onClick={clearFindRefs}>clear!</button>
                </div>

                <div className="pool-container pt-2 pb-2" id="pool"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 'pool')}
                >
                    {pool.map((reference, index) =>
                        <div draggable
                            key={index}
                            onDragStart={(e) => handleDragStart(e, reference, 'pool')}
                            onDragEnd={e => handleDragEnd(e, true)}
                        >
                            <div className="dnd-item">{reference}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="filter-container" id="filter"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, 'filter')}
            >
                {filter.map((reference, index) =>
                    <div draggable
                        key={index}
                        onDragStart={(e) => handleDragStart(e, reference, 'filter')}
                        onDragEnd={e => handleDragEnd(e, false)}>
                        <div className="dnd-item">{reference}</div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default DragNDrop;