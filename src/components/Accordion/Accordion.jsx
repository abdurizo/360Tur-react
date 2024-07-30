import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import styles from './Accordion.module.css';
import classNames from 'classnames';

function Accordion({ faqList }) {
    const { i18n } = useTranslation();
    const [data,setData] = useState([])
    const [open, setOpen] = useState(null);
    
    useEffect(() => {
        fetch('http://360tcrp.uz/api/question/faq/',{
            headers: {
                'Accept-Language': i18n?.language ?? "uz"
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
    
    const clickHeandle = (index) => {
        if (open === index) {
            return setOpen(null)
        } else {
            setOpen(index)
        }
    }
    return (
        <div className={styles.accordion_wrap }>
            <ul className={styles.accordion}>
                {
                    data?.map((item, index) => {
                        return <li className={styles.accordion_item} key={index}>
                            <button
                                className={styles.header}
                                onClick={() => clickHeandle(index)}
                            >
                                {item.question}
                                <span>{index === open ? '-' : '+'}</span>
                            </button>
                            <div
                                className={`${styles.collapse} ${open === index ? styles.open : ''}`}
                            >
                                <div className={styles.body}>{item.answer}</div>
                            </div>
                        </li>
                    })
                }
                {/* {
                    faqList.map((faqItem, id) => {
                        return <li className={styles.accordion_item} key={id}>
                            <button
                                className={styles.header}
                                onClick={() => clickHeandle(id)}
                            >
                                {faqItem.q}
                                <span>{id === open ? '-' : '+'}</span>
                            </button>
                            <div
                                className={`${styles.collapse} ${open === id ? styles.open : ''}` }
                            >
                                <div className={styles.body}>{faqItem.a}</div>
                            </div>
                        </li>
                    })
                } */}
            </ul>
        </div>
    )
}

export default Accordion
