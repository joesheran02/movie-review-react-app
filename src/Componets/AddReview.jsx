import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddReview = () => {
    const [data,changeData] = useState(
        {
            "title":"",
            "director":"",
            "genre":"",
            "rating":"",
            "duration":""
        }
    )

    const inputHandler = (event) => {
        changeData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                if (response.data.status === "success") {
                    alert("Success")
                } else {
                    alert("Error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Movie Title</label>
                    <input className="form-control" name='title' value={data.title} onChange={inputHandler}></input>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Movie Director</label>
                    <input className="form-control" name='director' value={data.director} onChange={inputHandler}></input>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Genre</label>
                <input className="form-control" name='genre' value={data.genre} onChange={inputHandler}></input>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Rating</label>
                <input className="form-control" name='rating' value={data.rating} onChange={inputHandler}></input>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Duration</label>
                <input className="form-control" name='duration' value={data.duration} onChange={inputHandler}></input>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Add Review</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddReview
