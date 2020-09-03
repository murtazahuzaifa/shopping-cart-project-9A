import React from 'react';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Home from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={`${style.footer}`} >
            <hr/>
            <div  >
                <IconButton href="https://github.com/murtazahuzaifa/shopping-cart-project-9A" target='_blank' > <GitHub /> </IconButton>
                <IconButton  > <Home />  </IconButton>
                <IconButton href="https://www.facebook.com/murtaza.huzaifa.52/" target='_blank' > <Facebook />  </IconButton>
            </div>
            <p> <strong>Murtaza</strong> Ⓒ 2020</p>
        </div>
    );
}

export default Footer;