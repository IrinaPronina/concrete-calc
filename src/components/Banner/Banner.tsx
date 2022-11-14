import bannerImg from '../../assets/img/banerBetonCalc.jpg';
import './Banner.scss';


const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__inner container">
        <div className="banner__wrapper">
          <img src={bannerImg} alt="Устройство бетонного пола" className='banner__img' />
        </div>
      </div>
    </section>
  )
}

export default Banner