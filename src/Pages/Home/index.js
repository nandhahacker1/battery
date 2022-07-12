import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';

import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setApiData } from '../../store/action/apiData';

import Card from '../../components/Card';


const Home = () => {

  const dispatch = useDispatch();

  const { cardAlign } = useSelector(sate => sate.utile)
  let apiData = useSelector(sate => sate.apiData)

  console.log(apiData);

  const [batteryDetails, setBatteryDetails] = useState([])

  const apiLink = "https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries"

  useEffect(() => {
    axios.get(apiLink).then(({ data }) => {
      // console.log(data);
      dispatch(setApiData(data))
    })
  }, [])


  useEffect(() => {
    console.log(cardAlign);
    if (cardAlign === 1) {
      setBatteryDetails(apiData)
    }
    if (cardAlign === 2) {

      const data = apiData.map(i => i).sort((a, b) => a.stateOfCharge - b.stateOfCharge);
      setBatteryDetails(data)
    }
    if (cardAlign === 3) {
      const data = apiData?.map(i => i).sort((a, b) => b.stateOfCharge - a.stateOfCharge);
      setBatteryDetails(data)
    }

  }, [apiData])

console.log(batteryDetails);

  return (
    <div className={styles.container} >
      {
        batteryDetails.length > 0 ? batteryDetails.map((item) => (
          <Card key={item.id} id={item.id} connectionStatus={item.connectionStatus} location={item.location} stateOfCharge={item.stateOfCharge} color={item.stateOfCharge < 20 ? "red" : item.stateOfCharge < 50 ? "yellow" : "green"} />
        )) : null
      }
    </div>
  )
}

export default Home