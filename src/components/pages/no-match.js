import React from "react";
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
           <h2>Brozzers this page doesn't exist</h2> 
           <Link to="/">Return to Homepage</Link>
        </div>

    );
}
