import React, {useState} from 'react'
import uuid from 'react-uuid'
import TaskList from './TaskList';

function List() {

    const [query, setQuery] = useState("");
    const [list, setList] = useState([]);
    const handleAdd = () => {
        const payload = {
            id:uuid(),
            title:query,
            status:false
        };
        const newArr = [...list, payload];
        setList(newArr);
    }
    const handleDelete = (id) => {
        let updateArr = list.filter(item => item.id !== id)
        setList(updateArr)
    }

  
    return (
        <>
            <h2>List</h2>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Add List Item" />
            <button onClick={handleAdd}>Add</button>
            <div>
                {list.map(item => (
                    <TaskList handleDelete={handleDelete} key={item.id} {...item}/>
                ))}
            </div>
        </>
        
    )
}

export default List