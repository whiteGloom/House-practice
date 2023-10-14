import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';

export enum ELinkTextTheme {
  primary = 1,
  minor,
}

export interface ILinkTextProps extends PropsWithChildren, HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean,
  href?: string,
  theme?: ELinkTextTheme,
}

function getThemeClassName(theme: ELinkTextTheme = ELinkTextTheme.primary) {
  switch (theme) {
    case ELinkTextTheme.primary:
      return styles.themePrimary;
    case ELinkTextTheme.minor:
      return styles.themeMinor;
  }
}

export const LinkText: FC<ILinkTextProps> = (props) => {
  const {
    theme = ELinkTextTheme.primary,
    children,
    className,
    isActive,
    href,
    ...otherProps
  } = props;

  return (
    <a
      className={clsx([
        styles.linkBase,
        isActive && styles.isActive,
        getThemeClassName(theme),
        className,
      ])}
      href={props.href}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default LinkText;