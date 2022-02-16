import Image from 'next/image';
import ChanelsBar from '../components/ChanelsBar/ChanelsBar';
import InsideChanelBar from '../components/ChanelsBlock/InsideChanelBar';
import ChatBlock from '../components/ChatBlock/ChatBlock';

import img1 from '../public/img/+_7e864e831a5d0fa90168107949cb870e.png';
import img4 from '../public/img/1777f7bc999584e7431094d6920622a009cce749r1-697-960v2_hq.jpg';
import img5 from '../public/img/logo.png';
import img6 from '../public/img/прикол.png';

const Home = () => {
  return (
    <div>
      <div className="outer-wrapper">
        <ChanelsBar />
        <InsideChanelBar />
        <ChatBlock />

        <div className="members-side-list">
          <ul className="friends">
            <div className="chanels-title-block">
              <span className="chanels-title">Админ</span>
              <span className="chanels-number">1</span>
            </div>
            <li className="friend-block">
              <div className="photo">
                <Image src={img6} alt="" />
              </div>
              <div className="name">VlaDick2008</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
