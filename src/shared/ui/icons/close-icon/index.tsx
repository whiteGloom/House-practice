import React, {FC, SVGProps} from 'react';
import {ReactComponent as CloseIconSvg} from './close-icon-svg.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';
export const BurgerButtonIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <CloseIconSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default BurgerButtonIcon;