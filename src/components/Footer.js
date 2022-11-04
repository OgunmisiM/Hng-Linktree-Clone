import I4G from '../assets/I4G.png';
import zuri from '../assets/zuri_logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={zuri} alt='zuri logo' />
      <small>HNG Internship 9 Frontend Task</small>
      <img src={I4G} alt='I4G logo' />
    </footer>
  );
};

export default Footer;