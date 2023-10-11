import React, {FC} from 'react';
import styles from './styles.module.scss';
import DefaultContentLayout from '../../../../shared/layouts/default-content-layout';
import PromoStarIcon from '../../../../shared/ui/icons/promo-star-icon';
import ButtonDefault, {EButtonDefaultTheme} from '../../../../shared/ui/button-default';

export const Promo: FC = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.shade}/>
      <DefaultContentLayout>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <PromoStarIcon className={styles.icon}/>
            <h2 className={styles.title}>Новая коллекция французских авторов</h2>
          </div>
          <p className={styles.description}>
            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.

            Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
          </p>
          <ButtonDefault theme={EButtonDefaultTheme.promo}>Продукция</ButtonDefault>
        </div>
      </DefaultContentLayout>
    </section>
  );
};

export default Promo;