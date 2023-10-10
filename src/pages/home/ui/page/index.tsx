import React, {FC} from 'react';
import styles from './styles.module.scss';
import {SceneWrapper} from '../../../../widget/scene-wrapper';
import {Hero} from '../../../../widget/hero';
import {Promo} from '../../../../widget/promo';
import {Team} from '../../../../widget/team';
import {RecentProductsList} from '../../../../widget/recent-products-list';

export const HomePage: FC = () => {
  return (
    <SceneWrapper>
      <article className={styles.page}>
        <Hero/>
        <RecentProductsList/>
        <Promo/>
        <Team/>
      </article>
    </SceneWrapper>
  );
};

export default HomePage;