import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Social for the Interchain',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Howl is built on Cosmos, making it fast and secure. 
        After launch, it will have integrations with web2 socials. 
        Post on Howl, and have the post broadcast elsewhere.
      </>
    ),
  },
  {
    title: 'DAO support by Default',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We support DAOs and multi-sigs as first-class citizens. 
        Want to post signed messages as a DAO or multi-sig? We've got you covered. 
        You can also comment on and reference DAODAO proposals out-of-the-box.
      </>
    ),
  },
  {
    title: 'Support Creators',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Like content? Your likes and staking support the creators you enjoy. 
        Want to make it regular? Howl Pay makes repeated payments easy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
