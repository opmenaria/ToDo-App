import { GrAdd } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Todo() {
    const [input, setInput] = useState('')
    const [itemList, setItemList] = useState([])

    function handleChange(event) {
        setInput(event.target.value)
    }

    // FETCH ALL DATA
    const fetchList = async () => {
        const response = await axios.get('http://localhost:3001/users')
        setItemList(response.data)
    }
    useEffect(() => {
        fetchList()
    }, [])

    // CREATE AND ADD NEW ITEM
    const createNew = async (text) => {
        const response = await axios.post('http://localhost:3001/users', {
            text
        })
        setItemList([response.data, ...itemList,]);
    }
    const addItem = () => {
        if (!input) {
        } else {
            setItemList([...itemList, input])
            setInput('')
            createNew(input)
        }
    }
    //DELETE ITEM
    const deleteItem = async (itemId) => {
        await axios.delete(`http://localhost:3001/users/${itemId}`)
        const updateItem = itemList.filter((item) => {
            return (
                item.id !== itemId
            )
        })
        setItemList(updateItem)
    }
    function handleDelete(key) {
        deleteItem(key.id)
    }

    return (
        <div className="App">

            {/* Main container */}
            <div className="container">
                <img id='icon' src="https://static.vecteezy.com/system/resources/previews/009/315/297/original/white-clipboard-task-management-todo-check-list-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-productivity-solution-icon-3d-check-list-render-png.png" alt="" />
                <h3>Add your list here</h3>

                {/* Input bar */}

                <div className="input">
                    <input onChange={handleChange} type="text" placeholder="Add item" value={input} />
                    <button onClick={addItem} type="button" className="btn btn-outline-secondary"><GrAdd /></button>
                </div>

                {/* Added items */}
                {
                    itemList.map((element, indx) => {
                        return (
                            <div key={indx} className="list">
                                <h6>{element.text}</h6>
                                <div className='tools'>
                                    <RiDeleteBin6Fill className='tool' onClick={() => handleDelete(element)} />
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={() => setItemList([])} type="button" className="btn btn-outline-warning">Remove All</button>
            </div>
        </div>
    );
}