import React, {FC} from 'react';
import styles from './styles.module.scss';
import ProductExample from './product-example.png';
import ButtonDefault from '../../../../shared/ui/button-default';
import DefaultContentLayout from '../../../../shared/layouts/default-content-layout';

export const Hero: FC = () => {
  return (
    <DefaultContentLayout>
      <section className={styles.hero}>
        <div className={styles.previewWrapper}>
          <img src={ProductExample} alt={'Print of a pigeon'} className={styles.preview}/>
        </div>
        <div className={styles.infoWrapper}>
          <h1 className={styles.title}>Реплики картин от <b className={styles.companyTitle}>Ink.{'\u00A0'}House</b></h1>
          <p className={styles.description}>
            Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
          </p>
          <ButtonDefault className={styles.button}>Продукция</ButtonDefault>
        </div>
      </section>
    </DefaultContentLayout>
  );
};

export default Hero;