import { useState } from 'react';
import { useTranslation } from "react-i18next";

import styles from './OrderBtnWhite.module.css';
import ArrowRightBlack from '../../assets/icon/ArrowRightBlack';
import Modal from '../../components/Modal/Modal';

function OrderBtnWhite() {
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
                    <ArrowRightBlack className={styles.arrow} />
                </button>
            </div>
            <Modal visible={visible} setVisible={setVisible} />
        </>
    )
}

export default OrderBtnWhite
