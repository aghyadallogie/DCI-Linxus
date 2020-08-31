import React, { useState, useRef, useEffect } from 'react';

function DragNDrop({ data, setRefs }) {

    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setList(data);
    }, [setList, data])

    useEffect(() => {
        setRefs(list[1].items)
    }, [list])

    const dragItem = useRef();
    const dragItemNode = useRef();

    const handletDragStart = (e, item) => {
        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }
    const handleDragEnter = (e, targetItem) => {
        if (dragItemNode.current !== e.target) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))

                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI]
                    .items.splice(dragItem.current.itemI, 1)[0])

                dragItem.current = targetItem;
                console.clear();
                console.log('pool: ', newList[0].items);
                console.log('filter: ', newList[1].items);
                console.log('new list: ', newList);
                return newList;
            })
        }
    }
    const handleDragEnd = e => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItemNode.current = null;
    }
    const getStyles = item => {
        if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
            return "dnd-item current"
        }
        return "dnd-item"
    }

    if (list) {
        return (
            <div className="drag-n-drop">
                {list.map((grp, grpI) => (
                    <div
                        className="dnd-group"
                        key={grp.title}
                        onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, { grpI, itemI: 0 }) : null}
                    >
                        {grp.items.map((item, itemI) => (
                            <div draggable
                                key={item}
                                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                                onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
                                className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    } else { return null }

}

export default DragNDrop;