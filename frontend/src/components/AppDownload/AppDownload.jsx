import React from 'react'
import './AppDownlaod.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Your food your choice <br/></p>
        <div className="app-download-platforms">
            {/* <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" /> */}
        </div>
    </div>
  )
}

export default AppDownload