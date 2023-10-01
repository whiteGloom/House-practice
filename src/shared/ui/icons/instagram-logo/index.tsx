import React, {FC, SVGProps} from 'react';
import {ReactComponent as InstagramLogoSvg} from './instagram-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';

export const InstagramLogoIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <InstagramLogoSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default InstagramLogoIcon;