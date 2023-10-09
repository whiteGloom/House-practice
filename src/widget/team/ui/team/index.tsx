import React, {FC} from 'react';
import styles from './styles.module.scss';
import DefaultContentLayout from '../../../../shared/layouts/default-content-layout';
import FrameImage from './frame-image.png';
import {EmployeeCardSmall} from '../../../../entities/employee';
import LogoImage from './logo.jpeg';

export const Team: FC = () => {
  return (
    <DefaultContentLayout className={styles.team}>
      <section className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={FrameImage} alt={'An arm with brushes breaks out of the frame'} className={styles.frameImage}/>
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.title}>Наша команда</h2>
            <p className={styles.description}>
              Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
            </p>
            <div className={styles.teamMembersWrapper}>
              <EmployeeCardSmall logoSrc={LogoImage}/>
              <EmployeeCardSmall logoSrc={LogoImage}/>
              <EmployeeCardSmall logoSrc={LogoImage}/>
            </div>
          </div>
      </section>
    </DefaultContentLayout>
  );
};

export default Team;