import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classNames';
import { NavLink } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/language';
import ThemeSwitcher from 'widgets/themes';

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <NavLink to={'/'}>{t('MainPageLink')}</NavLink>
        <NavLink to={'/about'}>{t('AboutPageLink')}</NavLink>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;