import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import '../styles/LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang,', lang);
  };

  const currentLang = i18n.language;

  const languages = {
    en: 'English',
    ka: 'ქართული'
  };

  return (
    <div className='languageSwitcher'>
      <FaGlobe className='globeIcon' />
      <select
      value={currentLang}
      onChange={(e) => switchLanguage(e.target.value)}
      >
        {Object.entries(languages).map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default LanguageSwitcher;
