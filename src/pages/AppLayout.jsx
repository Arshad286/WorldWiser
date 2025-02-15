import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from './styles/AppModule.module.css'
import Map from '../components/Map'

const AppLayout = () => {
  return (
    <div className={styles.app}>
        <Sidebar/>
        <Map/>
    </div>
  )
}

export default AppLayout