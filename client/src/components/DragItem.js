import React, { useState, useRef } from 'react';

export default function DragItem({ reference, pool, setPool, filter, setFilter, destination, origin }) {

    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragItemNode = useRef();

    // const handletDragStart = (e, item) => {
    //     dragItem.current = item;
    //     dragItemNode.current = e.target.parentNode;
    //     setTimeout(() => {
    //         setDragging(true);
    //     }, 0)
    // }

    const handleDragStart = (e, item, origin) => {
        dragItem.current = { item, origin };
     }
     
    const handleDragEnd = (e, item) => {
        // if (dragItemNode.current === e.target.parentNode) {
        //     // console.log(e.target.parentNode, item);
        // };
        if (destination === 'filters') {
            const newArr = pool.filter(reference => reference !== dragItem.current)
            setPool(newArr)
            setFilter([...filter, dragItem.current])
        } else {
            const newAr = filter.filter(reference => reference !== dragItem.current)
            setFilter(newAr)
            setPool([...pool, dragItem.current])
        }
        setDragging(false);
    }

    return (
        <div draggable
            onDragStart={e => handleDragStart(e, reference)}
            onDragEnd={e => handleDragEnd(e, destination)} >
            <div className="dnd-item">{reference}</div>
        </div>
    )
}