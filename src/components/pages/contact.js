import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPage from "../../../static/assets/images/contact/asdf.jpg"

export default function() {
    return ( 
    <div className="content-page-wrapper">
        <div className="left-column"
        style={{
            background:"url(" + contactPage + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        <div className="right-column">
        <div className="contact-bullet-points">
            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="phone"/>

                </div>   
                <div className="text">
                420-696-9696
                </div>
            </div>

            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="envelope"/>
                
                </div>   
                <div className="text">
                jamesahwu@gmail.com
                </div>
            </div>

            <div className="bullet-point-group">
                <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt"/>
                
                </div>   
                <div className="text">
                West Jordan, UT
                </div>
            </div>
        </div>
        </div>
     </div>
    )
}