import React from 'react'
//import videoBg from '../assets/videoBg.mp4'
import Countdown from './Countdown';

import FotoBg from '../assets/fotoBg2.jpg';
const Main=()=>{
    return(
    <div className='main'>
         <img src={FotoBg} alt="Background" className="background-image" />
        <div className="content">
            
            <h1>Sadece Rota Değil, Yepyeni Bir Başlangıç</h1>
            <Countdown />

        </div>
    </div>
    )
}
export default Main