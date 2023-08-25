import { FC, useEffect, useState } from "react";
import styles from "./DetailsProduct.module.scss";
import Button from "../Button/Button";
import { IProduct } from "../Catalog/Item/IProduct";

const DetailsProduct: FC<IProduct> = ({
  title,
  price,
  description,
  images,
  addToCart,
  addToFavorite,
}) => {
  const sizes = [4.5, 5, 5.5];
  const [activeSize, setActiveSize] = useState(sizes[1]);
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    if (images.length != 0) {
      setCurrentImage(images[0]);
    }
  }, [images]);

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles["main-image"]}>
          <img src={currentImage} alt="" />
        </div>
        <div className={styles["others-images"]}>
          {images.map((image, index) => (
            <button
              onClick={() => {
                setCurrentImage(image);
              }}
              key={index}
              className={styles["image-btn"]}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.price}>{price}$</p>
        <div className={styles.properties}>
          <div className={styles.color}>
            Color: <span>Blanc</span>
          </div>
          <div className={styles.sizes}>
            Sizes:
            <div className={styles["sizes-btns"]}>
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSize(size)}
                  className={activeSize == size ? styles.active : ""}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.btns}>
          <Button disabled={activeSize == undefined} onClick={addToCart}>
            Add to cart
          </Button>
          <Button
            disabled={activeSize == undefined}
            onClick={addToFavorite}
            variant="gray"
          >
            Add to favorites
          </Button>
        </div>
        <div className={styles.footer}>
          <p>19 people purchased</p>
          <a className={styles.find} href="#">
            Find in a store
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
