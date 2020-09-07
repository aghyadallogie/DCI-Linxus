import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DragNDrop() {
    const [pool, setPool] = useState(['qwer', 'asdf']);
    const [filter, setFilter] = useState(['zxcv']);

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    
    const handleDragEnter = (e) => {
        console.log('entering a node');
    }
    const handleDragStart = (e, item, origin) => {
        console.log('starting dragging', item, origin);
        dragItem.current = { item, origin }; // store the dragged item + where we dragged it from!
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }
    const handleDragEnd = (e) => {
        console.log('draggin ending');
        setDragging(false);
    }
    const handleDrop = (e, containerTarget) => {
        const { item, origin } = dragItem.current
        console.log("Dropped on: ", containerTarget, "from:", origin, "item:", e.target)
        // in item you have the item that was dragged & dropped
        // in e.target you have additionally the item that we dropped ON in the container 
        //    (so e.g. you dropped item football on "volleyball" => then you will have volleyball in here) 
        // => you can use that to exchange the position of the two items in the array (if you want to :)
        // if origin == target container => do nothing (=> but you can handle here switching positions instead...)
        if(containerTarget == origin) { return } 
        if (containerTarget == "filter") {
            const newArr = pool.filter(ref => ref !== item) // delete item from pool list
            setPool(newArr)
            setFilter([...filter, item])
        } else {
            const newAr = filter.filter(ref => ref !== item) // delete item from filter list
            setFilter(newAr)
            setPool([...pool, item])
        }
    }
    if (true) {
        return (
            <div className="drag-n-drop">
                <div className="pool-container" id="pool" 
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 'pool')}
                >
                    {pool.map(ref => <div draggable
                        key={ref}
                        onDragStart={(e) => handleDragStart(e, ref, 'pool')}
                        onDragEnter={dragging ? (e) => { handleDragEnter(e) } : null}
                        onDragEnd={e => handleDragEnd(e, true)}                        
                        >
                        <div className="dnd-item">{ref}</div>
                    </div>)}
                </div>
                <div className="filter-container" id="filter" 
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, 'filter')}                
                >
                    {filter.map(ref => <div draggable
                        key={ref}
                        onDragStart={(e) => handleDragStart(e, ref, 'filter')}
                        onDragEnter={dragging ? (e) => { handleDragEnter(e) } : null}
                        onDragEnd={e => handleDragEnd(e, false)}>
                        <div className="dnd-item">{ref}</div>
                    </div>)}
                </div>
            </div>
        )
    } else { return null }
}