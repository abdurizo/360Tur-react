import styles from './AccordionForVirtuaTlur.module.css';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// import Tick from '../../assets/gif/tick.png'

function AccordionForVirtuaTlur({ title, text, file, id }) {
    const [data, setData] = useState([]);
    const { i18n } = useTranslation();
    useEffect(() => {
        fetch('http://360tcrp.uz/api/project/opportunity/',{
            headers: {
                'Accept-Language': i18n?.language ?? 'uz'
            }
        })
            .then(res => { return res.json() })
            .then(res => {
                setData(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [i18n?.language])

    const [open, setOpen] = useState(0);
    const clickHeandle = (id) => {
        setOpen(id)
    }
    return (
        <div className={styles.accordion_wrap}>
            <ul className={styles.accordion}>
                {
                    data?.map((item, id,) => {
                        return <li className={styles.accordion_item} key={id}>

                            <div className={styles.heade_wrap}>
                                <button
                                    className={`${open === id ? styles.tick : styles.tick_no}`}
                                    onClick={() => clickHeandle(id)} />
                                <button
                                    className={styles.header}
                                    onClick={() => clickHeandle(id)}
                                >
                                    <img src={item?.icon} className={styles.icon} />
                                    <span className={styles.line}></span>
                                    {item?.title}
                                </button>
                            </div>
                            <div className={`${styles.collapse} ${open === id ? styles.open : ''}`}>
                                <div className={styles.body}>{item.text}</div>
                            </div>
                        </li>
                    })
                }
            </ul>
            <div className={styles.image}>
                {
                    (data?.length > 0 && !!data?.[open].file) ? <img src={data?.[open].file} alt="" /> : null
                }
            </div>
        </div>
    )
}

export default AccordionForVirtuaTlur
