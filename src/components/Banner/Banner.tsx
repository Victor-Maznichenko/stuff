import React from 'react'
import COMPUTER from '../../assets/images/front.png';
import styles from './Banner.module.scss';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1 className={styles.title}>BIG SALE 20%</h1>
            <div className={styles.info}>
                <p className={styles.descr}>the bestseller of 2022 </p>
                <h2 className={styles.subtitle}>LENNON r2d2 with NVIDIA 5090 TI</h2>
                <Button text={'Shop Now'} />
            </div>
            <div className={styles.img}>
                <img src={COMPUTER} alt="" />
            </div>
        </section>
    )
}

export default Banner;