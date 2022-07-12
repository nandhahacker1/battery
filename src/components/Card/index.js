import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, location, connectionStatus, stateOfCharge, color }) => {

    const navigate = useNavigate();

    const imageConfig = {
        green: "/images/green.jpg",
        yellow: "/images/yellow.jpg",
        red: "/images/red.jpg",
    }

    return (
        <div className={styles.container} onClick={() => { navigate(`/${id}`) }} >
            <div className={styles.title} >
                <i className="fa-solid fa-location-dot"></i>
                <h2>{location == null ? "NA" : location}</h2>
            </div>

            <h3>Connection status: {connectionStatus == null ? "NA" : connectionStatus}</h3>

            <div className={styles.status} >
                <div className={styles.alert} style={{ background: `url(${imageConfig[color]})`, width: stateOfCharge == null ? "0" : `${stateOfCharge}%` }} />

                <div className={styles.battery} />

                <div className={styles.percentage} >
                    <span>{stateOfCharge != null ? `${stateOfCharge}%` : "NA"}</span>
                </div>

            </div>
        </div>
    )
}

export default Card