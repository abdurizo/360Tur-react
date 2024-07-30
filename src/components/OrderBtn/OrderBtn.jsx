import { useTranslation } from "react-i18next";

import { useState } from 'react';
import styles from './OrderBtn.module.css';

import ArrowRightBlue from '../../assets/icon/ArrowRightBlue';
import Modal from '../../components/Modal/Modal';

function OrderBtn() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  return (
    <>
      <div className={styles.wrap}>
        <button className={styles.btn} onClick={show}>
          {t('order')}
          <ArrowRightBlue className={styles.arrow} />
        </button>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  )
}

export default OrderBtn
