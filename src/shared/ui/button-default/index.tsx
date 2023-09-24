import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';

export enum EButtonDefaultTheme {
  primary = 1,
  promo,
  tab
}

export interface IButtonDefaultProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean,
  useFullWidth?: boolean,
  theme?: EButtonDefaultTheme,
}

function getThemeClassName(theme: EButtonDefaultTheme = EButtonDefaultTheme.primary) {
  switch (theme) {
    case EButtonDefaultTheme.primary:
      return styles.themePrimary;
    case EButtonDefaultTheme.promo:
      return styles.themePromo;
    case EButtonDefaultTheme.tab:
      return styles.themeTab;
  }
}

export const ButtonDefault: FC<IButtonDefaultProps> = (props) => {
  const {
    className,
    theme = EButtonDefaultTheme.primary,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx([
        styles.buttonBase,
        props.useFullWidth && styles.fullWidth,
        props.isActive && styles.isActive,
        getThemeClassName(theme),
        className,
      ])}
      {...otherProps}
    >
      {props.children}
    </button>
  );
};

export default ButtonDefault;