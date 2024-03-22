import React, { useContext, useState } from 'react'
import Usercontext from '../context/Context'


function Hooks() {
    const [count, setcount] = useState(0)
    const [show, setshow] = useState(false)
    const [name, setname] = useState("")
    const ans=useContext(Usercontext)
    return (
        <div className='container w-50 m-auto my-5'>
        <h1>{ans}</h1>
            <button className='btn btn-sm btn-outline-danger mx-3' onClick={() => setcount(count - 1)} disabled={count <= 0}>-</button>
            {count}
            <button className='btn btn-sm btn-outline-dark mx-3' onClick={() => setcount(count + 1)} disabled={count >= 10}>+</button>

            <div className='mt-5'>
                <button className={show ? "btn btn-sm btn-outline-dark" : "btn btn-sm btn-outline-danger"} onClick={() => setshow(!show)}>{show ? "hide" : "show"}</button>
                {show ? <p>gwyguydyuhndnaiuhsnamam MS KJKQHQUHWKJKN  SJBQUGWUBJJa jnbhhqhhwui    qjjksnsj</p> : ""}

            </div>
            <div >
                name:{name}
               <div class="mt-3">
                
                <label class="form-label">name</label>
                <input type="text" class="form-control" onChange={(event)=>setname(event.target.value)}/>
                    
            </div>
            </div>

        </div>
    )
}

export default Hooks