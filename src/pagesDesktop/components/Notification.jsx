import React, { useState } from "react";
import './Notification.css'

const Notification = () => {

    const[notification,setNotification] = useState()
    
    if(!notification)  setNotification('hola') 

    return (
        <div className="notification">
            <span>{notification}</span>
        </div>
    )
}

export default Notification;