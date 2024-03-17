import Image from "next/image";
import styles from "./Description.module.sass";
import { PLACEHODER_IMAGE } from "./models";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>

        <Image src="/images/description.jpeg" alt="products marketplace"
          priority={false}
          fill={true}
          placeholder="blur"
          blurDataURL={PLACEHODER_IMAGE}
        />
      </div>
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