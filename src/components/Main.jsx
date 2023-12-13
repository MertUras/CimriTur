import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import Countdown from './Countdown';
import Logo from '../assets/black-removebg-preview.png'
const Main=()=>{
    return(
    <div className='main'>
        <video src={videoBg} autoPlay loop muted> </video>
        <div className="content">
            <img id='logo' src={Logo} />
            <h1>Hayatınıza Yeni Bir Rota Oluşturun</h1>
            <Countdown />
        </div>
    </div>
    )
}
export default Main