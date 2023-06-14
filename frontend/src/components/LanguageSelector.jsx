import React from 'react'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const onChangeLanguage = language => {
        i18n.changeLanguage(language);
        changeLanguage(language);

    };

    return (
        <div className='container m-2 flex'>
            <img className='cursor-pointer' src="https://flagsapi.com/TR/flat/24.png" alt='Turkish Flag' onClick={() => onChangeLanguage('tr')}  />
            <img className='cursor-pointer' src="https://flagsapi.com/US/flat/24.png" alt='USA Flag' onClick={() => onChangeLanguage('en')}  />
        </div>
    )
}

export default LanguageSelector;