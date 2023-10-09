import React, {FC, SVGProps} from 'react';
import {ReactComponent as PromoStarIconSvg} from './promo-star-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';

export const PromoStarIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <PromoStarIconSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default PromoStarIcon;