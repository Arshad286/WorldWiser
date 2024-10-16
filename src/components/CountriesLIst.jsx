import React from "react";
import styles from "./styles/CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

const CityList = () => {

  const {cities, isLoading} = useCities();

  if (isLoading) return <Spinner />;

  if (cities.length === 0) {
    return (
      <div>
        <h1>Server Error </h1>
      </div>
    );
  }

  const countries = cities.reduce((arr, city) => {
      if(!arr.map( (el) => el.country).includes(city.country)){
        return [...arr, {country : city.country, emoji : city.emoji}];
      }else{
        return arr;
      }
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id}  />
      ))}
    </ul>
  );
};

export default CityList;
