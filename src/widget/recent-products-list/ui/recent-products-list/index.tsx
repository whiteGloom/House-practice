import React, {FC} from 'react';
import DefaultContentLayout from '../../../../shared/layouts/default-content-layout';
import styles from './styles.module.scss';
import ButtonDefault, {EButtonDefaultTheme} from '../../../../shared/ui/button-default';
import {CardProduct} from '../../../../features/card-product';

export const RecentProductsList: FC = (props) => {
  return (
    <DefaultContentLayout>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Репродукции</h2>
          <ul className={styles.filtersList}>
            <li><ButtonDefault theme={EButtonDefaultTheme.tab} isActive={true}>Франция</ButtonDefault></li>
            <li><ButtonDefault theme={EButtonDefaultTheme.tab}>Германия</ButtonDefault></li>
            <li><ButtonDefault theme={EButtonDefaultTheme.tab}>Англия</ButtonDefault></li>
          </ul>
        </header>
        <ul className={styles.productsList}>
          <li><CardProduct/></li>
          <li><CardProduct/></li>
          <li><CardProduct/></li>
          <li><CardProduct/></li>
          <li><CardProduct/></li>
          <li><CardProduct/></li>
        </ul>
      </section>
    </DefaultContentLayout>
  );
};

export default RecentProductsList;