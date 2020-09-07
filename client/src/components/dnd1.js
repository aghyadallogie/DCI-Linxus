import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefs } from '../redux/actions/refActions';
import axios from 'axios';

function DragNDrop() {

    const [list, setList] = useState([
        { title: 'pool', items: [] },
        { title: 'filter', items: [] }
    ]);

    const [dragging, setDragging] = useState(false);

    const [items, setItems] = useState([
        { title: 'pool', items: [] },
        { title: 'filter', items: [] }
    ]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/references')
            .then(res => {
                let refs = res.data.map(ref => ref.name)
                let targetArray = [
                    { title: 'pool', items: [...refs] },
                    { title: 'filter', items: [] }
                ]
                setItems(items => targetArray)
            }).catch(err => console.log('error: ', err));
    }, [])

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchRefs())
    // }, [])

    // const myRefs = useSelector(state => state.ref.refs);
    
    // useEffect(() => {
    //     setRefs(list[1].items)
    // }, [list])
    
    useEffect(() => {
        setList(items);
        console.clear()
    }, [setList, items])


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