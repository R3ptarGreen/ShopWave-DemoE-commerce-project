import './AboutSections.scss';
import {Img} from '../../index'
const AboutSections = () => {
  return (
    <section className='about__sectionsContainer'>
        <div className='about__section'>
            <Img className={'about__img'} altImg={'ourHistory'}/>
            <div className='about__infoContainer'>
                <h2 className='about__sectionTitle title--l'>Our History</h2>
                <p className='about__text'>Since our humble beginnings, we have been committed to providing the best footwear shopping experience. Founded in [founding year], ShopWave was born from the shared vision of a team passionate about active lifestyle and urban fashion. Over the years, we have grown and evolved, establishing ourselves as a leader in the sport and casual tennis market.</p>
            </div>
        </div>
        <div className='about__section about__section--right'>
            <Img className={'about__img'} altImg={'ourMision'}/>
            <div className='about__infoContainer about__infoContainer--right'>
            <h2 className='about__sectionTitle title--l'>Our Mision</h2>
            <p className='about__text'>At ShopWave, our mission is simple yet powerful: to provide our customers with footwear that not only complements their unique style, but also enhances their performance and well-being. We strive to inspire people to achieve their goals, whether it is breaking records on the running track or excelling on the city streets.</p>
            </div>
        </div>
        <div className='about__section'>
            <Img className={'about__img'} altImg={'weOffer'}/>
            <div className='about__infoContainer'>
            <h2 className='about__sectionTitle title--l'>We offer</h2>
            <p className='about__text'>In our extensive catalog, you will find a wide range of carefully selected tennis shoes from the most recognized brands in the industry. From cutting-edge running shoes to stylish casual sneakers, ShopWave prides itself on offering products that fuse fashion and function. We work hard to stay on the cutting edge of trends, making sure you will always find the latest releases and most coveted styles in our inventory.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutSections