import React, {FC, SVGProps} from 'react';
import {ReactComponent as ShoppingCartIconSvg} from './shopping-cart-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';

export const ShoppingCartIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <ShoppingCartIconSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default ShoppingCartIcon;