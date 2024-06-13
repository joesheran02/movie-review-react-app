import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchReview = () => {
    const [data, setData] = useState(
        {
            "title": ""
        }
    )

    const [result, getResult] = useState(
        []
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                getResult(response.data)
            }
        ).catch()
    }

    const deleteValue = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                if (response.data.status === "success") {
                    alert("Deleted")
                } else {
                    alert("Something went wrong!!")
                }
            }
        ).catch()
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Movie Title</label>
                        <input type="text" className="form-control"name='title' value={data.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-warning" onClick={readValue}>Search</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>-----Result----- <br /><br /><br /></center>
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
                                {result.map(
                                    (value,index) => {
                                        return <tr>
                                            <td>{value.title}</td>
                                            <td>{value.director}</td>
                                            <td>{value.rating}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.genre}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{deleteValue(value._id)}}>Delete</button></td>
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

export default SearchReview
