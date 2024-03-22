import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

export const Locationoption = [
    { value: "TamilNadu", label: "TamilNadu" },
    { value: "Kerala", label: "Kerala" },
    { value: "MUmbai", label: "MUmbai" },
    { value: "Andra", label: "Andra" },
    { value: "Banglore", label: "Banglore" }
]
export const skilloption = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "bootsrap", label: "bootsrap" },
    { value: "javascript", label: "javascript" },
    { value: "React Js", label: "React Js" }
]

function Form() {
    const navigate=useNavigate()
    const [newstudent, setnewstudent] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        mobile: "",
        Age: "",
        Location: "",
        skill: []

    })
    const handlechange = (event, name) => {
        setnewstudent({ ...newstudent, [name]: event.target.value })
    }
    const [studentlist, setstudentlist] = useState([])
    const validateEmail = (Email) => {
        let result = /^([A-Za-z0-9\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
        return result.test(Email)
    }
    const validatePassword = (Password) => {
        let result = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return result.test(Password)
    }
    const [showpassword, setshowpassword] = useState()
    const deleteStudent = (index) => {
        console.log(index)
        studentlist.splice(index, 1)
        setstudentlist([...studentlist])
    }

    const handlesubmit = () => {
        if (newstudent.FirstName === "") {
            return toast.error("FirstName is required")
        }
        if (newstudent.FirstName.length < 8) {
            return toast.error("minium length 8 ")
        }
        if (newstudent.LastNametName === "") {
            return toast.error("LastName is required")
        }
        if (newstudent.LastName.length < 4) {
            return toast.error("minium length 4 ")
        }
        if (newstudent.Email === "") {
            return toast.error("Email is required")
        }
        if (!validateEmail(newstudent.Email)) {
            return toast.error("invalid email")
        }
        if (newstudent.Password === "") {
            return toast.error("password is required")
        }
        if (!validatePassword(newstudent.Password)) {
            return toast.error("invalid password")
        }
        if (newstudent.Password.length < 8) {
            return toast.error("enter strong password")
        }
        if (newstudent.mobile === "") {
            return toast.error("mobile is required")
        }
        if (newstudent.mobile.length < 10) {
            return toast.error("enter your mobile number")
        }
        if (newstudent.Age === "") {
            return toast.error("Age is required")
        }
        if (newstudent.Age.length < 2) {
            return toast.error("enter two integer")
        }
        
      axios.post("https://65f1b036034bdbecc7636204.mockapi.io/students",newstudent).then((res)=>{console.log(res)})
      .catch((err)=>{console.log(err)})
      toast.success("student added successfully")
         navigate('/studentlist')
        setstudentlist([...studentlist, newstudent])
        setnewstudent({
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            mobile: "",
            Age: "",
            Location: "",
            skill: []

        })
        console.log(studentlist)
    }
    return (
        <div className='container w-75 '>
            <h1 className='text-center text-danger'>Create Student Details</h1>
            <div className='row mt-5'>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">FirstName</label>
                        <input type="text" class="form-control"
                            value={newstudent.FirstName}
                            onChange={(event) => handlechange(event, "FirstName")} />
                    </div>
                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">LastName</label>
                        <input type="text" class="form-control" value={newstudent.LastName} onChange={(event) => handlechange(event, "LastName")} />
                    </div>

                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" value={newstudent.Email} onChange={(event) => handlechange(event, "Email")} />
                    </div>

                </div>
                <div className='col-6'>
                    <label class="form-label">Password</label>
                    <div class="input-group mb-3">
                        <input type={showpassword ? "text" : "password"}
                            class="form-control"
                            value={newstudent.Password}
                            onChange={(event) => handlechange(event, "Password")} />
                        <span class="input-group-text" id="basic-addon2" onClick={() => setshowpassword(!showpassword)} >
                            {showpassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i> :<i class="fa fa-eye" aria-hidden="true"></i>}
                        </span>
                    </div>



                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">mobile</label>
                        <input type="text" class="form-control" value={newstudent.mobile} onChange={(event) => handlechange(event, "mobile")} />
                    </div>

                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">Age</label>
                        <input type="number" class="form-control" value={newstudent.Age} onChange={(event) => handlechange(event, "Age")} />
                    </div>

                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">Location</label>
                        <Select options={Locationoption}
                            value={Locationoption.filter((list) => list.value === newstudent.Location)}
                            onChange={(op) => setnewstudent({ ...newstudent, Location: op.value })} />
                    </div>

                </div>
                <div className='col-6'>
                    <div class="mb-3">
                        <label class="form-label">Skills</label>
                        <Select isMulti options={skilloption}
                            value={skilloption.filter((op => {
                                return newstudent.skill.some((pt) => pt === op.value)
                            }))
                            }
                            onChange={(e) => setnewstudent({ ...newstudent, skill: e.map((op) => op.value) })} />

                    </div>

                </div>
            </div>
            <div>
                <button className='btn btn-sm btn-outline-success' onClick={() => handlesubmit()}>submit</button>
            </div>
            <div className='container'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">s.no</th>
                            <th scope="col">Firsname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">email</th>

                            <th scope="col">password</th>
                            <th scope="col">mobile</th>
                            <th scope="col">Age</th>
                            <th scope="col">Location</th>
                            <th scope="col">Skills</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentlist.map((list,index) => {
                        return <tr>
                            <th scope="row">{index+1}</th>
                            <td>{list.FirstName}</td>
                            <td>{list.LastName}</td>
                            <td>{list.Email}</td>
                            <td>{list.Password}</td>
                            <td>{list.mobile}</td>
                            <td>{list.Age }</td>
                            <td>{list.Location}</td>
                            <td>{list?.skill?.join() }</td>
                            <td>
                                <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteStudent(index)}>x</button>
                            </td>

                        </tr>
                    })}
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default Form


