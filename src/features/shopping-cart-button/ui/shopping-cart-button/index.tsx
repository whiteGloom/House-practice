import React, {FC, HTMLAttributes} from 'react';
import styles from './styles.module.sass';
import ShoppingCartIcon from '../../../../shared/ui/icons/shopping-cart';

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