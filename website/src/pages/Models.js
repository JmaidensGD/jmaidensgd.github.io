import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';


export default function Models() {
  return (
    <Layout title="Hello" description="Hello React Page">
        <main>
          <h1 style={{display: 'flex',justifyContent: 'center',alignItems: 'center',paddingTop:100,}} className="hero__title">3D Models</h1>
            <div className={styles.SketchfabContainer}>
                <iframe className={styles.SketchfabEmbed} title="Lt Aldo Raine bowie knife" src="https://sketchfab.com/models/ed7a7f514bd84c6b8d45e7c20ab40007/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Glock 17" src="https://sketchfab.com/models/3978ff1c3bcf48f4bff410f4c2a3f7b0/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="SMG" src="https://sketchfab.com/models/5b90b7a18dd8479cb3686d42d2a2c0d2/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Medieval Lantern" src="https://sketchfab.com/models/14762c4fdac940be8d60902067853d66/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Container substance" src="https://sketchfab.com/models/a4d71a0b72d74e0393c185502b65f3b2/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Medieval Book" src="https://sketchfab.com/models/f4b6f2921ba04eabbe82e60c4058a386/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Tankard" src="https://sketchfab.com/models/5a3073e332e441669a677f68a8c47ac3/embed"></iframe>
                <iframe className={styles.SketchfabEmbed} title="Lighter Fluid" src="https://sketchfab.com/models/cb9c6ef723794148bd5e9ff4624861bd/embed"></iframe>
            </div>
      </main>
    </Layout>
  );
}