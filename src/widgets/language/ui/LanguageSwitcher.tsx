import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button onClick={toggleLanguage}>
      {t('Language')}
    </Button>
  );
};

export default LanguageSwitcher;