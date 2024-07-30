import styles from './Services.module.css';
import classNames from 'classnames';
import { useTranslation } from "react-i18next";

import CarouselForServis from '../../../components/CarouselForServis/CarouselForServis';

function Services() {
  const { t } = useTranslation();
  return (
    <section className='container section' id='services'>
      <h2 className='title'>{t('AdvantagesOftheVirtualTour')}</h2>
      <p className='sub_title'>{t('AdvantagesOftheVirtualTourContent')}</p>
      <CarouselForServis />
    </section>
  )
}

export default Services;
