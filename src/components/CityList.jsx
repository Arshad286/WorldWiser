import React from 'react'
import styles from './styles/CityList.module.css'
import Spinner from './Spinner'
import CityItems from './CityItems'
import { useCities } from '../contexts/CitiesContext'

const CityList = () => {

  const {cities, isLoading} = useCities();

  if(isLoading) return <Spinner/>

  if(cities.length === 0){
    return <div>
      <h1>Server Error Q</h1>
    </div>
  }

  return (
    <ul className={styles.cityList}>
       {cities.map( (city) => <CityItems city={city} key={city.id}/>)}
    </ul>
  )
}

export default CityList