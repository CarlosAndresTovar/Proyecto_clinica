import React from "react";
import './Notifications.css'
import Notification from './Notification'
import { useState } from "react";

const Notifications = () => {

    const [active, setActive] = useState(' active')

    const ToggleActive = () =>{
        if(active === ''){
            setActive(' active')
        }else{
            setActive('')
        }
    }

    return (
        <div className={"notifications"+active}>
            <div className='bell'>
                <img src="" alt="" />
                <p onClick={ToggleActive}>1</p>
            </div>
            <div className="list">
                <Notification></Notification>
            </div>
        </div>
    )
}

export default Notifications;