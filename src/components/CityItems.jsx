import React from 'react'
import styles from './styles/Cityitem.module.css'
import {Link} from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

const CityItems = ({city}) => {
    const {cityName, emoji , date, id} = city;
    const {currentCity} = useCities();

  return (
    <li >
      <Link className={`${styles.cityItem} 
      ${id === currentCity.id ? styles["cityItem--active"] : ""}
      `} to={`${id} `}>
          <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
        </Link>

    </li>
  )
}

export default CityItems