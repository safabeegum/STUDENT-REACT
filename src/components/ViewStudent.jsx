import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const[data,changeData]=useState(
        [
            {"name":"Aju","admnno":101,"rollno":1},
            {"name":"Aji","admnno":102,"rollno":2},
            {"name":"Anu","admnno":103,"rollno":3}
        ]
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1717632000&semt=sph" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text"> {value.admnno}</p>
                                    <a href="#" class="btn btn-primary">{value.rollno}</a>
                                    </div>
                                    </div>   
                                    </div>
                                }
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent