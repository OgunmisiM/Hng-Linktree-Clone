import profilePicture from '../assets/profile__img.png';
import share from '../assets/share_button.png';
import option from '../assets/mobile_Avatar share button.png';
import hover from '../assets/hover.png';

const Header = () => {
  const twitter = 'https://twitter.com/OgunmisiM';

  return (
    <header>
      <div className='profile'>
        <img src={profilePicture} alt='profile' id='profile__img' />
        <img src={hover} alt='profile' id='profile__img' className='hover' />
        <a href={twitter} id='twitter'>
          Ogunmisi Oluwafemi
        </a>
        <h1 className='hidden' id='slack'>
          Ogunmisi Oluwafemi
        </h1>
      </div>
      <div className='share'>
        <img src={share} alt='share' className='share_icon' />
        <img src={option} alt='option' className='option_icon' />
      </div>
    </header>
  );
}

export default Header;