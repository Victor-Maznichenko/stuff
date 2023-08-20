import React from 'react'
import styles from './Footer.module.scss';

// change img to svg in future
import LOGO from '../../assets/images/logo.svg';
import YOUTUBE from '../../assets/images/youtube.svg';
import FACEBOOK from '../../assets/images/facebook.svg';
import INSTAGRAM from '../../assets/images/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}><img src={LOGO} alt="Stuff" /></div>
      <div className={styles.descr}>
        Developed by <span>Victor Maznichenko</span>
      </div>
      <div className={styles.social}>
        <ul>
          <li>
            <a href="youtube.com" target='_blank' rel='noreferrer'>
              <img src={YOUTUBE} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="facebook.com" target='_blank' rel='noreferrer'>
              <img src={FACEBOOK} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target='_blank' rel='noreferrer'>
              <img src={INSTAGRAM} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer