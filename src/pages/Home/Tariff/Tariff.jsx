import styles from './Tariff.module.css';
import classNames from 'classnames';
import { useTranslation } from "react-i18next";
import { useEffect, useState, } from "react";

import OrderBtn from '../../../components/OrderBtn/OrderBtn';
import OrderBtnWhite from '../../../components/OrderBtnWhite/OrderBtnWhite';
import Ekonom from '../../../components/Ekonom/Ekonom';
import Standard from '../../../components/Standard/Standard';
import Premium from '../../../components/Premium/Premium';

const ekonom = [
    { text_ekonom: 'Panoramalar soni 1-30' },
    { text_ekonom: 'Logotip joylanishi' },
    { text_ekonom: 'Fotosuratlarni joylashtirish' },
]

const standart = [
    { text_standart: 'Panoramalar soni 31-60' },
    { text_standart: 'Logotip joylanishi' },
    { text_standart: 'Fotosuratlarni joylashtirish' },
    { text_standart: 'Tur ichidagi galereya' },
    { text_standart: 'Tur ichidagi animatsiya' },
    { text_standart: 'Yandex va Google xaritasiga joylashtirish' },
    { text_standart: 'Audio joylashtirish soni 2 (2-minut)' },
]
const premium = [
    { text_premium: 'Panoramalar soni 61-100' },
    { text_premium: 'Logotip joylanishi' },
    { text_premium: 'Fotosuratlarni joylashtirish' },
    { text_premium: 'Tur ichidagi galereya' },
    { text_premium: 'Tur ichidagi animatsiya' },
    { text_premium: 'Yandex va Google xaritasiga joylashtirish' },
    { text_premium: 'Audio joylashtirish soni 1-5 (har biri 1 minutdan) ' },
    { text_premium: 'Video tasvirga olish va joylashtirish 1-3' },
    { text_premium: 'Ma‘lumot oynasi' },
]

function Tariff() {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://360tcrp.uz/api/project/plan',{
            headers: {
                'Accept-Language': i18n?.language ?? "uz"
            }
        })
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [i18n?.language])


    return (
        <section className='container section' id='tariff'>
            <h2 className='title'>{t('tariff')}</h2>
            <p className='sub_title'>{t('appropriateTariff')}</p>
            <div className={styles.tariffs_wrap}>

                <div className={classNames(styles.tariff_card, styles.standard)}>
                    <div>
                        {/* <h3>Ekonom</h3> */}
                        <h3>{data[0]?.name}</h3>
                        <p className={styles.price}>{data[0]?.price} so‘m</p>
                        <Ekonom ekonom={data[0]?.access ?? []} className={styles.list} />
                    </div>
                    <div className={styles.btn_wrap}>
                        <OrderBtn />
                    </div>
                </div>

                <div className={classNames(styles.tariff_card, styles.premium)}>
                    {/* <h3>Premium</h3> */}
                    <h3>{data[1]?.name}</h3>
                    <p className={styles.price}>{data[1]?.price} so‘m</p>
                    <Premium premium={data[1]?.access ?? []} className={styles.list} />
                    <div className={styles.btn_wrap}>

                        <OrderBtnWhite />
                    </div>
                </div>

                <div className={classNames(styles.tariff_card, styles.standard)}>
                    <div>
                        <h3>Standart</h3>
                        <p className={styles.price}>{data[2]?.price} so‘m</p>
                        <Standard standart={data[2]?.access ?? []} className={styles.list} />
                    </div>
                    <div className={styles.btn_wrap}>
                        <OrderBtn />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tariff
