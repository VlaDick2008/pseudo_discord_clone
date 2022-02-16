import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './ChanelsBar.module.scss';

import img2 from '../../public/img/6Gtp9jy_Ypw.jpg';
import img3 from '../../public/img/572f2479deae215490267c38.png';
import img5 from '../../public/img/logo.png';
import img1 from '../../public/img/+_7e864e831a5d0fa90168107949cb870e.png';
import img4 from '../../public/img/1777f7bc999584e7431094d6920622a009cce749r1-697-960v2_hq.jpg';

interface Props {}

export default function ChanelsBar({}: Props): ReactElement {
  return (
    <div>
      <div className={styles.groupsBlock}>
        <div className={styles.groupsWrapper}>
          <div className={`${styles.groupItem} ${styles.groupLogo}`}>
            <div className="dot">
              <span></span>
            </div>
            <button className="">
              <Image width={50} height={50} src={img5} alt="" />
            </button>
          </div>
          <div className={styles.groupItem}>
            <div className="dot">
              <span></span>
            </div>
            <button className={styles.groupItemActive}>
              <Image width={50} height={50} src={img3} alt="" />
            </button>
          </div>
          <div className={styles.groupItem}>
            <div className="dot">
              <span></span>
            </div>
            <button>
              <Image width={50} height={50} src={img1} alt="" />
            </button>
          </div>
          <div className={styles.groupItem}>
            <div className="dot">
              <span></span>
            </div>
            <button>
              <Image width={50} height={50} src={img4} alt="" />
            </button>
          </div>
          <div className={styles.groupItem}>
            <div className="dot">
              <span></span>
            </div>
            <button>
              <Image width={50} height={50} src={img2} alt="" />
            </button>
          </div>
          <div className={`${styles.groupItem} ${styles.addGroup}`}>
            <div className="dot">
              <span></span>
            </div>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
