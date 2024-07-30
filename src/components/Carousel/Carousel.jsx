import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


// import Cuwatt from '../../assets/image/cuwatt.png';
// import Aloqa from '../../assets/image/aloqa.png';
// import Asia from '../../assets/image/asia.png';
// import Qustut from '../../assets/image/qustut.png';
// import Registon from '../../assets/image/registim.png';


function Carousel() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://360tcrp.uz/api/question/partner-icon/')
            .then(res => { return res.json() })
            .then(res => (
                setData(res)
            ))
    }, [])
    return (
        <section className='carousel_section' id='carousel'>
            <Marquee autoFill={true}>
            {
                data.map((item,index)=>{
                    return(
                        <div className='carousel_wrap' key={index}>
                                <img src={item.image} alt="" />
                            </div>
                    )
                })
            }
            </Marquee>
        </section>
    )
}

export default Carousel
