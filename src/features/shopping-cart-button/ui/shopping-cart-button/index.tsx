import React, {FC, HTMLAttributes} from 'react';
import {ReactComponent as ShoppingCartIcon} from './shopping-cart-icon.svg';
import styles from './styles.module.sass';

export interface IShoppingCartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  itemsCount?: number;
}

export const ShoppingCartButton: FC<IShoppingCartButtonProps> = (props) => {
  const {itemsCount = 0, ...otherProps} = props;

  return (
    <button className={styles.button} {...otherProps}>
      <ShoppingCartIcon className={styles.cardIcon} />
      {itemsCount > 0 && (
        <div className={styles.itemsCounterWrapper}>
          <span className={styles.itemsCounter}>{itemsCount}</span>
        </div>
      )}
    </button>
  );
};

export default ShoppingCartButton;