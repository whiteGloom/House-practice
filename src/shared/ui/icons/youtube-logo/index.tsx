import React, {FC, SVGProps} from 'react';
import {ReactComponent as YoutubeIconSvg} from './youtube-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';

export const YoutubeLogoIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {

  return (
    <YoutubeIconSvg {...props} className={clsx([styles.icon, props.className])}/>
  );
};

export default YoutubeLogoIcon;