import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Learn',
    Svg: require('../../static/img/lightbulb.svg').default,
    description: (
      <>
        Entity is easy for both veteran programmers and school children, with syntax similar to JS, C# and Java
      </>
    ),
  },
  {
    title: 'Fully open source',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        There are no worries of errors being unnoticed for years as Entiy is fullt open source and the code is at our GitHub <a href="https://github.com/juaneth/Entity">here</a>
      </>
    ),
  },
  {
    title: 'Secure by default',
    Svg: require('../../static/img/admin.svg').default,
    description: (
      <>
        Our permissions system makes sure there are no worries of running an application and having all your photos deleted
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
