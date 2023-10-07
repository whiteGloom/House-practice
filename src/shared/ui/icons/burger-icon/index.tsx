import React, {FC, SVGProps} from 'react';
import {ReactComponent as BurgerIconSvg} from './burger-icon-svg.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';
export const BurgerButtonIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <BurgerIconSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default BurgerButtonIcon;