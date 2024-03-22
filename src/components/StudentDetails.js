import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function StudentDetails() {
  const params = useParams()
  const [studentDetails, setstudentDetails] = useState({})
  // console.log(params)
  const fetchstudentDetails = () => {
    axios.get(`https://65f1b036034bdbecc7636204.mockapi.io/students/${params.id}`).then((res) => { setstudentDetails(res.data) })
      .catch((err) => { console.log(err) })
  }
  useEffect(() => {
    fetchstudentDetails()
  }, [])

  return (
    <div class="card" style={{width: "18rem"}}>
      <div class="card-body">
        <h5 class="card-title">{studentDetails.firstName} {studentDetails.LastName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.Email}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.Password}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.mobile}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.Age}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.Location}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails?.skill?.join()}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={'/studentList'}> <a href="#" class="card-link">Back</a></Link>
        
    </div>
    </div>
  )
}

export default StudentDetails