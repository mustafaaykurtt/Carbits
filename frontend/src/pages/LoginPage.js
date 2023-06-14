import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next';
import Spinner from '../components/Spinner';
import loginImg from '../assets/login.jpg'
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { loginHandler } from '../redux/features/user/userSlice';

const LoginPage = () => {
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setError(undefined);
      }, [mail, password]);

    const onClickLogin = async e => {
        e.preventDefault();
        const creds = {
            mail,
            password
        }
        dispatch(loginHandler(creds)).then(unwrapResult).catch(error => setError(error));
    }

    const { t } = useTranslation();

    return (
        <section>
            <div className='min-h-screen py-40  bg-gradient-to-br from-[#FEFCF3] to-[#F0DBDB]'>
                <div className='container mx-auto'>
                    <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                        <div className='w-1/2 p-12 flex flex-col'>
                            <h2 className='text-3xl mb-4'>{t("Register")}</h2>
                            <p className='flex flex-col'>Create your account. Its free only take a minute
                            </p>
                            <form>
                                <Input name="mail" label={t("E-Mail")} type="email" onChange={e => setMail(e.target.value)}  />
                                <Input name="password" label={t("Password")} type="password" onChange={e => setMail(e.target.value)}  />
                                <span className="text-sm text-red-600 ">{error}</span>
                                <button onClick={onClickLogin} className='w-5/6 mt-10 text-lg rounded-md py-2 bg-pink-400 shadow-md shadow-teal-400/50 focus:outline-none disabled:bg-gray-300 disabled:shadow-gray-400/50'>
                                    {/* {pendingApiCall ? <Spinner /> : ''} */}
                                    {t('Sign Up')}</button>
                            </form>
                        </div>

                        <div className='w-1/2 relative group'>
                            <img src={loginImg} alt='car' className='object-cover' />
                            <div className='absolute text-white bottom-0 pl-5'>
                                <h1 className=' text-white font-bold '>{t('Welcome')}</h1>
                                <div className='mb-5'>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam iusto maxime placeat harum facilis optio voluptatem. Eveniet, debitis qui?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage