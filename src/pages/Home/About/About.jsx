import styles from './About.module.css';
import classNames from 'classnames';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// import Img1 from '../../../assets/image/img2.png';
import Video from '../../../assets/gif/video.webm';
import ArrowDownBlue from '../../../assets/icon/ArrowDownBlue';
import Modal from '../../../components/Modal/Modal';

function About() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  const [data, setData] = useState({description: ''});
  useEffect(() => {
    fetch('http://360tcrp.uz/api/about/', {
      headers: {
        'Accept-Language': i18n?.language ?? "uz"
      }
    })
      .then(res => { return res.json() })
      .then(res => {
        setData(res)
      })
  }, [i18n?.language])

  return (
    <section className={classNames('container', styles.about)} id='about'>
      <div className={styles.img}>
        <video src={Video} controls preload='metadata'></video>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{t('about')} </h2>
        <p className={styles.text}>
          {data?.description}
        </p>
        <div className={styles.button} onClick={show} >
          <span>{t('order')}</span>
          <ArrowDownBlue className={styles.arrow} />
        </div>
        <Modal visible={visible} setVisible={setVisible} />
      </div>

    </section>
  )
}

export default About
