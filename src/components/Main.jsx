import React from 'react'
//import videoBg from '../assets/videoBg.mp4'
import Countdown from './Countdown';
import Logo from '../assets/black-removebg-preview.png'
import FotoBg from '../assets/fotoBg2.jpg';
const Main=()=>{
    return(
    <div className='main'>
         <img src={FotoBg} alt="Background" className="background-image" />
        <div className="content">
            <img id='logo' src={Logo} />
            <h1>Hayatınıza Yeni Bir Rota Oluşturun</h1>
            <Countdown />
        </div>
    </div>
    )
}
export default Main