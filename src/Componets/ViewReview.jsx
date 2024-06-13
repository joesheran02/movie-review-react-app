import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewReview = () => {
    const [data,setData] = useState(
        []
    )
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                setData(response.data)
            }
        ).catch()
    }
    useEffect(()=>fetchData(),[])
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Duration</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (value,index) => {
                                return <tr>
                                    <td>{value.title}</td>
                                    <td>{value.director}</td>
                                    <td>{value.rating}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.genre}</td>
                                </tr>
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewReview
