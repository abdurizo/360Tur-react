
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll'
import { useState } from "react";
import styles from './Navbar.module.css';
import classNames from 'classnames';

import Logo from '../../assets/icon/Logo'
import Uzb from '../../assets/icon/Uzb';
import Rus from '../../assets/icon/Rus';
import Eng from '../../assets/icon/Eng';
import ArrowRight from '../../assets/icon/ArrowRight';

function Navbar() {
  const { i18n, t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false)

  const handelAddClass = () => {
    setToggle(!toggle)
  };
  return (
    <div className={styles.wrap_menu}>
      <a href='#home' className={styles.logo}>
        <Logo className={styles.logo_icon} />
      </a>
      <div className={`${nav ? classNames(styles.menu, styles.active) : styles.menu}`}>
        <nav className={styles.nav}>
          <Link to='about' spy={true} smooth={true} offset={-170} duration={0}  >{t('about')}</Link>
          <Link to='portfolio' spy={true} smooth={true} offset={-170} duration={0}  >{t('portfolio')}</Link>
          <Link to='services' spy={true} smooth={true} offset={-170} duration={0}  >{t('services')}</Link>
          <Link to='tariff' spy={true} smooth={true} offset={-170} duration={0}  >{t('prices')} </Link>
          <Link to='footer' spy={true} smooth={true} offset={-170} duration={0}  >{t('addressText')} </Link>
        </nav>

        <div
          className={`${styles.language_wrap} ${toggle ? styles.width : ''}`}
          onClick={handelAddClass}
        >

          {
            i18n?.language === 'uz' ? <Uzb className={classNames(styles.content, styles.uz)} /> :
              i18n?.language === 'ru' ? <Rus className={classNames(styles.content, styles.ru)} /> :
                i18n?.language === 'en' ? <Eng className={classNames(styles.content, styles.en)} /> : ''
          }

          <span className={styles.content}>{i18n?.language === 'uz' ? 'O‘ZB' : i18n?.language === 'ru' ? 'PУC' : "ENG"}</span>

          <ArrowRight className={classNames(styles.content, styles.arrow)} />

          <span className={styles.language} onClick={() => i18n?.changeLanguage('uz')}>O‘ZB</span>
          <span className={classNames(styles.language, styles.line)} onClick={() => i18n?.changeLanguage('ru')}>PУC</span>
          <span className={styles.language} onClick={() => i18n?.changeLanguage('en')}>ENG</span>
        </div>
      </div>
      <div className={styles.mobil_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={30} color={'#fff'} /> : <AiOutlineMenu size={30} color={'#fff'} />}
      </div>
    </div>

  )
}

export default Navbar
