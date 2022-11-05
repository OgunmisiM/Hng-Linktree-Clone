import slack from '../assets/slack.png';
import github from '../assets/github-icon.png';
import { Link } from 'react-router-dom';

const Links = () => {
  const zuriDesign = 'https://books.zuri.team/design-rules';
  const pythonBooks = 'https://books.zuri.team/python-for-beginners?ref_id=ogunmisim';
  const zuriBooks = 'http://books.zuri.team'
  const zuri_Btn = 'https://training.zuri.team/';
  const pitch = 'https://background.zuri.team/';
  const twitter = 'https://twitter.com/ogunmisim';


  return (
    <main className='container'>
      <div className='buttons'>
        <a href={twitter} id='twitter'>
          Twitter Link
        </a>
        <a href={zuri_Btn} id='btn__zuri'>
          Zuri Team
        </a>
        <a href={zuriBooks} id='books'>
          Zuri Books
        </a>
        <a href={pythonBooks} id='book__python'>
          Python Books
        </a>
        <a href={pitch} id='pitch'>
          Background Check for Coders
        </a>
        <a href={zuriDesign} id='book__design'>
          Design Books
        </a>

        <Link to={"/Contact"} id='contact'> Contact Me </Link>

      </div>
      <div className='icons'>
        <img src={slack} alt='slack' />
        <img src={github} alt='github' />
      </div>
    </main>
  );
};

export default Links;