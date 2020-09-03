import React from 'react';
import style from './Cover.module.css';

const shoeImg = require('../../Images/shoe.png')
const footBallImg = require('../../Images/footBall.png')

export default function () {
    return (
        <div className={`${style.cover}`}>
            <svg viewBox="0 0 1920 754" >
                <image className={`${style.footBallImg}`} href={footBallImg} ></image>
                <image className={`${style.shoeImg}`} href={shoeImg} ></image>
                <text transform="matrix(1 0 0 1 76.6973 145.8164)" className={`${style.text}`}>Feel The Kick</text>
            </svg >
        </div >
    )
}










// import React from 'react';

// export default function(){
//     return(
//         <div> this is a cover</div>
//     )
// }