import i18n from "i18next";
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Register':'Register',
                'Welcome' : 'Welcome',
                'Password mismatch':'Password mismatch',
                'Username':'Username',
                'Display Name':'Display Name',
                'Password' : 'Password',
                'Password Repeat' : 'Password Repeat',
                'Sign Up':'Sign Up',
                'Login':'Login',
                'Logout':'Logout',
               
                

            }
        },
        tr: {
            translations: {
                'Register':'Kayıt Ol',
                'Welcome':'Hoşgeldiniz',
                'Password mismatch':'Aynı şifreyi giriniz',
                'Username':'Kullanıcı Adı',
                'E-Mail':'Tercih Edilen İsim',
                'Password' : 'Şifre',
                'Password Repeat' : 'Şifreyi Tekrarla',
                'Sign Up':'Kayıt Ol',
                'Login':'Giriş',
                'Logout':'Çıkış',
               
            }
        }
    },
    fallbackLng: 'en',
    ns:['translations'],
    defaultNs:'translations',
    keySeperator: false,
    interpolation: {
        escapeValue:false,
        formatSeparator:','
    },
    react:{
        wait:true
    }
});



export default i18n;