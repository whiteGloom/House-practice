import React, {FC} from 'react';
import styles from './styles.module.sass';
import ButtonDefault from '../../../../shared/ui/button-default';

export const CardProduct: FC = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt={'One man is standing and holding head of another. The second man had drank a mixture and is waiting for nausea'}
          src={'https://live.verstaem.online/house/data/images/3.jpg'}
        />
      </div>
      <strong className={styles.author}>Франсуа Дюпон</strong>
      <h1 className={styles.title}>Процедура</h1>
      <span className={styles.productType}>Цветная литография (40х60)</span>
      <strong className={styles.price}>20 000 руб</strong>
      <ButtonDefault className={styles.buyButton}>В корзину</ButtonDefault>
    </article>
  );
};

export default CardProduct;