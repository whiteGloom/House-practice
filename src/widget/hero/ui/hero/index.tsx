import React, {FC} from 'react';
import styles from './styles.module.scss';
import ProductExample from './product-example.png';
import ButtonDefault from '../../../../shared/ui/button-default';

export const Hero: FC = () => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default Hero;