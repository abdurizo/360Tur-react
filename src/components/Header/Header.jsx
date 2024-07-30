// import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { Link } from 'react-scroll'

import styles from './Header.module.css';
import classNames from 'classnames';

import ArrowDown from '../../assets/icon/ArrowDown';
import Navbar from '../../components/Navbar/Navbar';
import Video from '../../assets/gif/backgr769.mp4';
import Video2 from '../../assets/gif/backgr775.webm';
// import baner1 from '../../assets/gif/baner1.mp4';
// import baner1 from '../../assets/gif/s.mp4';

function Header() {
    const [virtual, setVirtual] = useState(true);
    const handelToggle = () => {
        setVirtual(!virtual)
    };
    return (
        <header className={classNames(styles.root)} id='home'>
            {/* <Spline scene='https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode' className={styles.background}/> */}
            <div className={styles.background}>
                <div className={styles.inner}></div>
                <video id="video" autoPlay loop muted className={styles.video} >
                    <source src={Video} typ="video/mp4"/>
                    <source src={Video2} typ="video/webm"/>
                </video>
            </div>

            {/* <iframe
                id="inlineFrameExample"
                className={styles.background}

                // src="https://kuula.co/share/582XS?fs=0&vr=0&priority=1&autorotate=0.2&thumbs=-1&hideinst=1&chromeless=1&logo=-1&feature=1">

                src="https://6645f3f4aadb569f4eb9978f--profound-banoffee-9957ca.netlify.app/">
            </iframe> */}

            <Navbar />

            {/* <div className={`${classNames(styles.virtual)} `} onClick={handelToggle}></div> */}
            
            <div className={`${virtual ? styles.a : ''}`}></div>

            <Link to='carousel' spy={true} smooth={true} offset={-170} duration={0} className={styles['arrow-wrapper']} >
                <ArrowDown className={styles['first-arrow']} />
                <ArrowDown />
            </Link>

        </header>
    )
}

export default Header
