import styles from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/themes';
import { memo } from 'react';
import ThemeIcon from 'shared/assets/icons/theme-switch.svg';
import classNames from 'classNames';
import { Button } from 'shared/ui';

type Props = {
  className?: string;
};

const ThemeSwitcher = ({ className }: Props) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitcher, className)}
      onClick={toggleTheme}
    >
      <ThemeIcon className={styles.icon} />
    </Button>
  );
};

export default memo(ThemeSwitcher);