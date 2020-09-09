import React, { useRef, useState } from 'react'

export default function DragItem({ reference, original }) {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();

    const handleDragStart = (e, item, original) => {
        console.log({item, original});
        dragItem.current = { item, original };
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnd = () => {
        setDragging(false);
    }

    return (
        <div draggable
            onDragStart={(e) => handleDragStart(e, reference, original)}
            onDragEnd={e => handleDragEnd(e, true)}
        >
            <div className="dnd-item">{reference}</div>
        </div>
    )
}
