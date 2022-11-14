import logoImg from '../../assets/img/logo.png'
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className="header__phone">
          <a href="tel:+79202520001" className='header__phone-link'>+7 (920) 252-00-01</a>
        </div>
        <div className="header__logo">
          <img src={logoImg} className='header__img' alt="" />
        </div>
        <div className="header__email">
          <a href="mailto:prompol@profix-nn.ru" className='header__email-link'>prompol@profix-nn.ru</a>
        </div>
      </div>
    </header>
  )
}
export default Header