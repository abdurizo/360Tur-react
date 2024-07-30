import { useTranslation } from "react-i18next";
import { useEffect, useState, } from "react";

import OrderBtn from '../../../components/OrderBtn/OrderBtn';
// import Cub2d from '../../../assets/icon/Cub2d';
// import Cub3d from '../../../assets/icon/Cub3d';
// import Camera from '../../../assets/icon/Camera';
// import Men from '../../../assets/gif/men.gif';
// import Jewelry from '../../../assets/gif/jewelry.gif';
// import Umr from '../../../assets/gif/Umr.png';

import AccordionForVirtuaTlur from '../../../components/AccordionForVirtuaTlur/AccordionForVirtuaTlur'

// const pList = [
//   {
//     id: 1,
//     title: '2d fotogrammetriya',
//     content: 'Fotogrammetriya - bu obyektlarning shakli, o’lchami, holati va boshqa xususiyatlarini ularning fotografik tasvirlaridan aniqlash bilan shug’ullanadigan ilmiy-texnikaviy fan.',
//     icon: <Cub2d />,
//     img: <img src={Men} alt="" />,
//   },
//   {
//     id: 2,
//     title: '3d skanerlash',
//     content: '3D model uch o’lchamli obekt yoki muhitning raqamli tasviridir. Bu har qanday burchakdan ko’rish va boshqarish mumkin bo’lgan virtual model.',
//     icon: <Cub3d />,
//     img: <img src={Jewelry} alt="" />,
//   },
//   {
//     id: 3,
//     title: 'Fotogrammetriya ish jarayonlari',
//     content: 'Texnikalar yordamida har bir ob’ektning fotogrammetriyasini ishlab chiqish jarayoni.',
//     icon: <Camera />,
//     img: <img src={Umr} alt="" />,
//   },
// ]

function Possibilities() {
  const { t, i18n } = useTranslation();
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch('http://360tcrp.uz/api/project/opportunity/',{
      headers: {
        'Accept-Language': i18n?.language ?? 'uz'
      }
    })
      .then(res => { return res.json() })
      .then(res => {
        setDate(res)
      })
      .catch(error => {
        console.log(error)
      })
  }, [i18n?.language])
  return (
    <section className='container section' id='possibilities'>
      <h2 className='title'>{t('VirtualTourAdditionalOptions')}</h2>
      <p className='sub_title'>{t('VirtualTourAdditionalOptionsContent')} </p>
      <AccordionForVirtuaTlur />
      <div className="df"><OrderBtn /></div>
    </section>
  )
}

export default Possibilities
