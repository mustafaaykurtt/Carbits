import React, { useState } from 'react'
import car from '../assets/signup.jpg'

import Input from '../components/Input';
import Spinner from '../components/Spinner';
import { useDispatch } from 'react-redux';
import { signUpHandler } from '../redux/features/user/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

const Signup = () => {

    const [userInputs, setUserInputs] = useState({
        username: null,
        mail: null,
        password: null,
        passwordRepeat: null
    });
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [errors, setErrors] = useState("");
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;
        const err = { ...errors, [name]: undefined };
        setErrors(err);
        setUserInputs(prevState => ({ ...prevState, [name]: value, }))
    }

    const onClickSignUp = e => {
        e.preventDefault();
        const { username, mail, password } = userInputs;
        const body = {
            username,
            mail,
            password
        }
        setPendingApiCall(true);
        dispatch(signUpHandler(body)).then(unwrapResult).catch(error => setErrors(error));
        setPendingApiCall(false);
    }


    const { username, mail, password } = errors;
    const {t} = useTranslation();

    let passwordRepeatError;
    (userInputs.password !== userInputs.passwordRepeat) && (passwordRepeatError = t('Password mismatch'));

    return (
        <section>
            <div className='min-h-screen py-40  bg-gradient-to-br from-[#FEFCF3] to-[#F0DBDB]'>
                <div className='container mx-auto'>
                    <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden'>
                        <div className='w-1/2 relative group'>
                            <img src={car} alt='car' className='object-cover' />
                            <div className='absolute text-white bottom-0 pl-5'>
                                <h1 className=' text-white font-bold '>{t('Welcome')}</h1>
                                <div className='mb-5'>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam iusto maxime placeat harum facilis optio voluptatem. Eveniet, debitis qui?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 p-12 flex flex-col'>
                            <h2 className='text-3xl mb-4'>{t("Register")}</h2>
                            <p className='flex flex-col'>Create your account. Its free only take a minute
                            </p>
                            <form>
                                <Input name="username" label={t("Username")} type="text" onChange={onChange} error={username} />
                                <Input name="mail" label={t("E-Mail")} type="email" onChange={onChange} error={mail} />
                                <Input name="password" label={t("Password")} type="password" onChange={onChange} error={password} />
                                <Input name="passwordRepeat" label={t("Password Repeat")} type="password" onChange={onChange} error={passwordRepeatError} />
                                <button onClick={onClickSignUp} disabled={pendingApiCall} className='w-5/6 mt-10 text-lg rounded-md py-2 bg-pink-400 shadow-md shadow-teal-400/50 focus:outline-none disabled:bg-gray-300 disabled:shadow-gray-400/50'>
                                    {pendingApiCall ? <Spinner /> : ''}
                                    {t('Sign Up')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup