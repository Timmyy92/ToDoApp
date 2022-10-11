import { useState } from 'react'
// import { AiOutlinePlusCircle } from 'react-icons/ai';
import Timer from './Timer'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [checked, setCheck] = useState([])
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const checkedList = (ev) => {
    let newList = [...checked];
    if (ev.target.checked) {
      newList = [...checked, ev.target.value]
    } else {
      newList.splice(checked.indexOf(ev.target.value, 1));
    }
    setCheck(newList)
  }
  const isChecked = (item) => checked.includes(item) ? "checked-item": "not-checked-item" ;

  const addMore = (title, description, time) => {
    const s = title.trim()
    if (!s || !description || !time) {
      return
    }
    else {
      console.log();
    users.push({Title: title, Description: description, Time: time})
    setUsers([...users])
    setTitle("");
    setDescription("");
      setTime("");
    }
  }
  const deleteLast = (index) => {
    users.splice(index, 1)
    setUsers([...users])
  }
  const submitEdit = (id) => {
    users[id].Title = editTitle
    users[id].Description = editDescription
    setUsers([...users])
    setIsEditing(null);
  }

    
  return (
    <div className='container'>
      <h1 className='text-center mb-4 text-white'>Todo List</h1>
      <Timer/>
      <div className='inputAll'>
      <input className='form-control' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input className='form-control' type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <input className='form-control' type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)}/>
        <button className='btn btn-secondary' onClick={() => addMore(title, description, time)}> ADD </button>
      </div>
      <main>
        
        {users.map((value,index) =>
          <div key={index}>
            <div className='div1'>
              <div className='div2'>
                {isEditing === index ? <span className='w-75'><input className='form-control w-100' type="text" placeholder='Enter new title' onChange={(e)=> setEditTitle(e.target.value)}/> </span>: <span className={isChecked(value.Title) + ' sfs-4 fw-bold'}>{value.Title}</span>}
                <span className={isChecked(value.Title)}>{value.Time}</span>
             
              </div>
              <div className='div2'>
                {isEditing === index ? <span className='w-75 mt-2'><input className='form-control w-100' type="text" placeholder='Enter new description' onChange={(e)=> setEditDescription(e.target.value)}/></span> : <span className={isChecked(value.Description)}> {value.Description}</span>}   
                <div className='d-flex gap-2'>
                  <button className='btn btn-danger' onClick={() => deleteLast(index)} >🗑</button>
                  {isEditing === index ? <button className='btn btn-success' onClick={()=>submitEdit(index)}>✓ </button> : <button className='btn btn-secondary' onClick={()=> setIsEditing(index)}>🖊 </button>}
                </div>
              </div>
            </div>
           
        
          </div>
        )}
      </main>
    </div>
  )
}

export default App
