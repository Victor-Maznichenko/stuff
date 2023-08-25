import React from "react";
import SANTA from "../../assets/images/santa.png";
import SNEAKER from "../../assets/images/sub-image-baner-1.png";
import PSP from "../../assets/images/sub-image-baner-2.png";
import Button from "../Button/Button";
import styles from './BannerNewYear.module.scss';

const BannerNewYear = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.info}>
        <h2 className={styles.subtitle}>NEW YEAR</h2>
        <h2 className={styles.title}>SALE</h2>
        <Button >See more</Button>
        <img src={SNEAKER} alt="" className={styles.subImage1} />
        <img src={PSP} alt="" className={styles.subImage2} />
      </div>
      <div className={styles.img} style={{ backgroundImage: `url(${SANTA})` }}>
        <p className={styles.decr}>
          save up to <b>50%</b> off
        </p>
      </div>
    </section>
  );
};
export default BannerNewYear;
