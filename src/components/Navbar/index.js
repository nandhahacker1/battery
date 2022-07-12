import React from 'react'
import styles from './Navbar.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { setAlign } from '../../store/action/utile';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const options = [
        { label: 'Normal', value: 1 },
        { label: 'Low - High', value: 2 },
        { label: 'High - Low', value: 3 },
    ];
    const defaultOption = options[0];

    const handleDispatch = (e) => {
        dispatch(setAlign(e.value))
    }

    return (
        <div className={styles.navbar}  >
            <div className={styles.logo}>
                <h2 onClick={() => navigate("/")} >Battery</h2>
            </div>

            <div className={styles.filter} >
                <Dropdown options={options} onChange={handleDispatch} value={defaultOption}
                />
            </div>


        </div>
    )
}

export default Navbar