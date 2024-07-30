import {Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from './Footer.module.css';
import classNames from 'classnames';

import Logo from '../../assets/icon/Logo';
import Geolocation from '../../assets/icon/Geolocation';
// import Metro from '../../assets/icon/Metro';
// import Avt from '../../assets/icon/Avt';
// import Car from '../../assets/icon/Car';
import Facebook from '../../assets/icon/Facebook';
import YouTube from '../../assets/icon/YouTube';
import Telegram from '../../assets/icon/Telegram';
import Instagram from '../../assets/icon/Instagram';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer} id='footer'>
            <div className="container">
                <div className={styles.top}>
                    <p className={styles.logo}>
                        <Logo />
                        Technocorp 360 virtual tur
                    </p>
                    {/* <div className={styles.email}>
                        <input type="email" placeholder='E-mail' />
                        <button className={styles.btn}>Yuborish</button>
                    </div> */}
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={classNames('container', styles.info)}>
                <ul>
                    <li className={styles.title}>{t('addressText')}:</li>
                    <li>{t('address')}</li>
                    <li className={styles.df}>
                        <Geolocation />
                        Geolokatsiya
                    </li>
                    <li>
                        Developed by <span>TECHNOCORP</span>
                    </li>
                </ul>
                
                {/* <ul className={styles.transport}>
                    <li className={styles.title}>{t('transport')}:</li>
                    <li className={styles.df}>
                        <div><Metro /></div>
                        {t('metro')} : {t('metroStation')}
                    </li>
                    <li className={styles.df}>
                        <div>
                            <Avt />
                        </div>
                        {t('bus')}: 11, 28, 31, 78, 88, 116
                    </li>
                    <li className={styles.df}>
                        <div><Car /></div>
                        Yo‘nalishli avtobuslarning: "Markaziy telegraf" bekati

                    </li>
                </ul> */}

                <ul>
                    <li className={styles.title}>{t('telephone')}:</li>
                    <li className={styles.title}>+998 (55) 501-43-13</li>
                </ul>
                <ul>
                    <li className={styles.title}>E-mail:</li>
                    <li className={styles.title}>info@technocorp.uz</li>
                </ul>
                <ul>
                    <li className={styles.title}>{t('socialMedia')}:</li>
                    <li className={styles.social_network}>
                        <Link to='http://facebook.com/technocorpuzb'><Facebook/></Link>
                        <Link to='https://www.youtube.com/@technocorpuzb'><YouTube/></Link>
                        <Link to='https://t.me/technocorpuz'><Telegram/></Link>
                        <Link to="http://instagram.com/technocorp.uz"><Instagram/></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
