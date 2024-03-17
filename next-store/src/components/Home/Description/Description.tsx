'use client';
import classnames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";
import styles from "./Description.module.sass";
import { PLACEHODER_IMAGE } from "./models";
export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)

  /**
   * Provide context to the classnames library
   * enable to use the hash classnames from the styles module
   */
  const cx = classnames.bind(styles);
  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder
  })
  const handleClick = () => {
    setHasBorder(!hasBorder);
  }
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>

          <Image src="/images/description.jpeg" alt="products marketplace"
            priority={false}
            fill={true}
            placeholder="blur"
            blurDataURL={PLACEHODER_IMAGE}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};