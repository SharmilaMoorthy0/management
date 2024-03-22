import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import swal from 'sweetalert'
import Select from 'react-select'
import { Locationoption, skilloption } from './Form'


function Studentlist() {
  const navigate = useNavigate()
  const [studentlist, setstudentlist] = useState([])
  const [isEdit, setisEdit] = useState(false)
  const [editstudentDetail, seteditstudentDetail] = useState({})
  const fetchstudentlist = () => {
    axios.get("https://65f1b036034bdbecc7636204.mockapi.io/students").then((response) => { setstudentlist(response.data) }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    fetchstudentlist()
  }, [])
  const deleteStudent = (data) => {
    swal({
      title: "Are you sure?",
      text: `Are you sure that you want to delete the student ${data.firstName} ${data.LastName}?`,
      icon: "warning",
      dangerMode: true,
      buttons: true


    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://65f1b036034bdbecc7636204.mockapi.io/students/${data.id}`).then((res) => { console.log(res) })
          .catch((err) => { console.log(err) })
        // toast.success("delete successfully")
        swal("Deleted!", "Your student file has been deleted!", "success");

        fetchstudentlist()
      } else {
        swal("your file is safe")
      }
    })


  }
  
  const editToggle = (data) => {
    seteditstudentDetail(data)
    setisEdit(!isEdit)

  }
  const handlechange = (event, name) => {
    seteditstudentDetail({ ...editstudentDetail, [name]: event.target.value })}

  const handleUpdateStudent=()=>{
    toast.loading("Updating...")
    console.log(editstudentDetail)
    axios.put(`https://65f1b036034bdbecc7636204.mockapi.io/students/${editstudentDetail.id}`,editstudentDetail)
    .then((res) => {console.log(res) 
     toast.remove()
     setisEdit(false)
     fetchstudentlist()
     toast.success("student details updated")
    }).catch((err) => { console.log(err) })
  }
  
   
    return (
      <div className='container'>
        <div className=' d-flex justify-content-between align-items-center my-4'>
          <h1>Student List</h1>
          <div>
            <button className='btn btn-sm btn-outline-primary' onClick={() => navigate('/form')}>Create student +</button>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">Firstname</th>
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
            {studentlist.map((list, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{list.firstName}</td>
                <td>{list.LastName}</td>
                <td>{list.Email}</td>
                <td>{list.Password}</td>
                <td>{list.mobile}</td>
                <td>{list.Age}</td>
                <td>{list.Location}</td>
                <td>{list?.skill?.join()}</td>
                <td>
                  <button className='btn btn-sm btn-outline-primary mx-2' onClick={() => navigate(`/studentDetails/${list.id}`)}> <i class="fa fa-eye" aria-hidden="true"></i></button>
                  <button className='btn btn-sm btn-outline-success mx-2' onClick={() => editToggle(list)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                  <button className="btn btn-sm btn-outline-danger mx-2" onClick={() => deleteStudent(list)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        <Modal isOpen={isEdit} size='lg' centered>
          <ModalHeader toggle={() => setisEdit(!isEdit)}>Edit Student</ModalHeader>
          <ModalBody>
            <div className='container'> 
               <div className='row mt-5'>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">FirstName</label>
                    <input type="text" class="form-control"
                      value={editstudentDetail.firstName}
                      onChange={(event) => handlechange(event, "firstName")}
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">LastName</label>
                    <input type="text" class="form-control"
                      value={editstudentDetail.LastName}
                      onChange={(event) => handlechange(event, "LastName")}
                    />
                  </div>

                </div>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"
                      value={editstudentDetail.Email}
                      onChange={(event) => handlechange(event, "Email")}
                    />
                  </div>

                </div>
                <div className='col-6'>
                  <label class="form-label">Password</label>
                  <div class="input-group mb-3">
                    <input type="password"
                      // {showpassword ? "text" : "password"}
                      class="form-control"
                      value={editstudentDetail.Password}
                      onChange={(event) => handlechange(event, "Password")}
                    />
                    {/* <span class="input-group-text" id="basic-addon2" onClick={() => setshowpassword(!showpassword)} >
                            {showpassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i> :<i class="fa fa-eye" aria-hidden="true"></i>}
                        </span> */}
                   </div> 



                 </div>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">mobile</label>
                    <input type="text" class="form-control"
                      value={editstudentDetail.mobile}
                      onChange={(event) => handlechange(event, "mobile")}
                    />
                  </div>

                </div>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">Age</label>
                    <input type="number" class="form-control"
                      value={editstudentDetail.Age}
                      onChange={(event) => handlechange(event, "Age")}
                    />
                  </div>

                </div>
                <div className='col-6'>
                  <div class="mb-3">
                    <label class="form-label">Location</label>
                    <Select
                      options={Locationoption}
                      value={Locationoption.filter((list) => list.value === editstudentDetail.Location)}
                      onChange={(op) => seteditstudentDetail({ ...editstudentDetail, Location: op.value })}
                    />
                  </div>

                </div>
               <div className='col-6'>
                  <div class="mb-3">
                   <label class="form-label">Skills</label>
                   <Select isMulti
                      options={skilloption}
                      value={skilloption.filter((op => {
                        return editstudentDetail?.skill?.some((pt) => pt === op.value)
                      }))
                      }
                      onChange={(e) => seteditstudentDetail({ ...editstudentDetail, skill: e.map((op) => op.value) })}
                    />

                  </div>

                </div>
              </div> 
            </div> 
    </ModalBody>
          <ModalFooter>
            <button>cancel</button>
            <button onClick={()=>handleUpdateStudent()}>update</button>
         </ModalFooter>
   </Modal>

      </div>

    )
}



  export default Studentlist 