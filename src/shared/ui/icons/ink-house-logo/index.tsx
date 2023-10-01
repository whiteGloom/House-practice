import React, {FC, SVGProps} from 'react';
import {ReactComponent as InkHouseLogoSvg} from './ink-house-icon.svg';
import styles from './styles.module.sass';
import clsx from 'clsx';

export const InkHouseLogoIcon: FC<SVGProps<SVGSVGElement>> = (props ) => {
  return (
    <InkHouseLogoSvg {...props} className={clsx([styles.icon, props.className])}/>
    // <svg className={""}/>
  );
};

export default InkHouseLogoIcon;