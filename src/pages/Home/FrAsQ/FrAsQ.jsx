import { useTranslation } from "react-i18next";

import Accordion from '../../../components/Accordion/Accordion';

const faqList= [
    {
        q:'Mani biznesim uchun 360 tur nima beradi? ',
        a:'Mijozlaringiz sizga istalgan vaqtda, istalgan joydan tashrif buyurishlarini imkoni borligi. '
    },
    {
        q:'Qanday turdagi bizneslar uchun toʻgʻri keladi 360 tur?',
        a:'360 tur 10 dan ortiq bizneslar uchun to‘g‘ri keladi, misol uchun uy-joy oldi sottisi, restoranlar, mehmonxonalar, muzeylar va boshqalar haqida to‘liq ma’lumot va tushunchaga ega bo‘lish uchun Portfolio bo‘limida batafsil bilishingiz mumkun.'
    },
    {
        q:'Qolganlardan qanaqa ustunligim bo‘ladi? ',
        a: ' Virtual sayohat qilishingiz mumkin bo’lgan asosiy narsalardan biri bu mahalliy bolmagan potentsial mijozlarga sizning mulkingiz yoki biznes joyingiz bilan tanishish imkoniyatini berishdir. Mahalliy bo‘lmagan potentsial mijozlarga joylashuvingizga sayohat qilish imkoniyatini berish ularning qidiruvini yaxshilaydi va sizga shaxsan tashrif buyurishga ishonchini oshirishga yordam beradi.'
    },
    {
        q:'Mijozlar 360 turdan qanday foydalanadilar?',
        a:'Mijozlar giperhavola yoki sayt orqali ko‘rishlari mumkin bo‘ladi, va albatta gadjetlari internetga ulangan bo‘lishi kerak.'
    },
];

function FrequentlyAskedQuestions() {
    const { t } = useTranslation();
  return (
      <section className='container section' id='asq'>
          <h2 className='title'>{t('FAQ')}</h2>
          <p className='sub_title'>{t('question')}</p>
          
              <Accordion faqList={faqList} />
        
      </section>
  )
}

export default FrequentlyAskedQuestions
