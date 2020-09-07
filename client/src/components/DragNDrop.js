import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefs } from '../redux/actions/refActions';
import { STORE_FILTERS } from '../redux/actions/types';
// import DragItem from './DragItem';

function DragNDrop() {

    const [pool, setPool] = useState([]);
    const [filter, setFilter] = useState([]);

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    // const dragItemNode = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRefs())
    }, [])

    const myRefs = useSelector(state => state.ref.refs);
    const values = myRefs.map(val => val.name)

    useEffect(() => {
        setPool(values);
    }, [myRefs])

    const handleDragStart = (e, item, origin) => {
        dragItem.current = { item, origin };
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnter = (e) => {
        console.log('entering a node');
    }

    const handleDragEnd = (e) => {
        console.log('draggin ending');
        setDragging(false);
    }

    const handleDrop = (e, containerTarget) => {
        const { item, origin } = dragItem.current
        console.log("Dropped on: ", containerTarget, "from:", origin, "item:", e.target)
        if (containerTarget == origin) { return }
        if (containerTarget == "filter") {
            const newArr = pool.filter(ref => ref !== item)
            setPool(newArr)
            setFilter([...filter, item])
            console.log({ pool }, { filter });

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

    if (pool.length > 0) {
        return (
            <div className="drag-n-drop" onMouseEnter={(e) => e.target.parentNode.focus()}>

                <div className="pool-container" id="pool"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 'pool')}
                >
                    {pool.map((reference, index) =>
                        <div draggable
                            key={index}
                            onDragStart={(e) => handleDragStart(e, reference, 'pool')}
                            onDragEnter={dragging ? (e) => { handleDragEnter(e) } : null}
                            onDragEnd={e => handleDragEnd(e, true)}
                        >
                            <div className="dnd-item">{reference}</div>
                        </div>)}
                </div>

                <div className="filter-container" id="filter"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 'filter')}
                >
                    {filter.map((reference, index) =>
                        <div draggable
                            key={index}
                            onDragStart={(e) => handleDragStart(e, reference, 'filter')}
                            onDragEnter={dragging ? (e) => { handleDragEnter(e) } : null}
                            onDragEnd={e => handleDragEnd(e, false)}>
                            <div className="dnd-item">{reference}</div>
                        </div>)}
                </div>

            </div>
        )
    } else { return null }
}

export default DragNDrop;