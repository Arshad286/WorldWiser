import React from 'react'
import styles from './styles/Cityitem.module.css'

const CountryItem = ({country}) => {

  return (
    <li className={styles.cityItem}>
    <span >{country.emoji}</span>
    <span >{country.country}</span>
</li>
  )
}

export default CountryItem