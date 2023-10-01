import React, {FC, SVGProps} from 'react';
import {ReactComponent as FacebookLogoSvg} from './facebook-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';
export const FacebookLogoIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <FacebookLogoSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default FacebookLogoIcon;