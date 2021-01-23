import React, { createContext } from 'react'
import ClientContext from '../../Context/ClientContext'
import "./style.css"
import staticImage from "../Welcome/enjoy-your-day-background_1271-219.jpg"
function AllCourseIntroduction(params) {
    const {loading} = createContext(ClientContext);
    return (
        <div className="usingTitle">
        {!loading?(
            <div className=" col">
                <h2 style={{ color:"#610B38",fontSize: "29px" }}>{params.course}</h2>
                <p style={{ fontWeight:'bold' }}>
                {params.course} tutorial provides basic and advanced concepts . Our {params.course} tutorial is designed for beginners and professionals. <span style={{ color:"blue" }}>Go to Intoduction And Start Your Learining</span>
                </p>
                <img src={staticImage} alt="imagea" style={{height:"800px",width:"800px"}} className="img-fluid"/>
            </div>
        ):""}
        
        </div>
    )
}

export default AllCourseIntroduction
