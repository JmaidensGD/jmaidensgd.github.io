import React, { Component } from 'react'
import styles from "./Picture.module.css";
import Graphics from '@site/static/img/Graphics.png';



function Button(props) {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={props.image} />
        <a href={props.page}><img className={styles.ButtonImage} src={props.image} alt="background" /></a>
      </picture>
      <h1 className={styles.header}>{props.text}</h1>
    </article>
  );
};

export default Button