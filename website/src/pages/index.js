import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Games from '@site/static/img/Games.png';
import Models from '@site/static/img/Models.png';
import Renders from '@site/static/img/Renders.png';
import Graphics from '@site/static/img/Graphics.png';
import styles from './index.module.css';
import styles2 from './index.module.css';
import Button from '@site/src/components/Button';
import { render } from 'react-dom';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.homeButtonContainer}>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><Button image = {Games} text = "Games" page = "Docs/Games"/></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><Button image = {Models} text = "Models" page = "Models"/></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft"><Button image = {Renders} text = "Renders" page = "Docs/Render"/></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight"><Button image = {Graphics} text = "Graphics" page = "Docs/Graphics"/></AnimationOnScroll>
        </div>
      </main>
    </Layout>
  );
}
