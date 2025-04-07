import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sign.png"
          alt="its authors image"
          width={300}
          height={300}
        />
      </div>
      <h1>Sign's Blog</h1>
      <p>
        I am learning next JS with practice, developing my own blog App is the
        perfect example of learn with practice.
      </p>
    </section>
  );
};

export default Hero;
