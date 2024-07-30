import styles from './Portfolio.module.css';
import classNames from 'classnames';
import { useTranslation } from "react-i18next";
import { useEffect, useState, } from "react";

import Card from '../../../components/Card/Card';
// import Hotels from '../../../assets/image/hotels.png';
// import Cultural from '../../../assets/image/cultural.png';
// import Auto from '../../../assets/image/auto.png';
// import Interyer from '../../../assets/image/interyer.png';
// import Shops from '../../../assets/image/Shops.png';
// import Museums from '../../../assets/image/museums.png';
// import Hotel from '../../../assets/gif/hotelB.gif';
// import Registan from '../../../assets/gif/registanB.gif';
// import Kuwwat from '../../../assets/gif/KuwwatB.gif';
// import Rieltor from '../../../assets/gif/RieltorB.gif';
// import Sequence from '../../../assets/gif/shopsB.gif';
// import Mus from '../../../assets/gif/musB.gif';


function Portfolio() {
    const { t, i18n } = useTranslation();
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('http://360tcrp.uz/api/project/',{
            headers:{
                'Accept-Language': i18n?.language ?? 'uz'
            }
        })
            .then(res => { return res.json() })
            .then(res => {
                setProject(res)
            })
            .catch(error => {
                console.log(error)
            }) 
    }, [i18n?.language])
    return (
        <div className='container section' id='portfolio'>
            <h2 className='title'>{t('projects')}</h2>
            <p className='sub_title'>{t('content')}</p>
            <div className={styles.cards}>

                {
                    project.map((item,id)=>{
                        return(
                            <Card {...item} key={id} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Portfolio
