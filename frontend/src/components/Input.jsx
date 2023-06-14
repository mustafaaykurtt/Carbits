import React from 'react'

const Input = ({name,label,type,onChange,error}) => {
    return (
        <div className='flex flex-col py-1' >
            <label className='py-1'>{label}</label>
            <input name={name} className={`rounded-md border-2 w-5/6 ${error ? ' border-pink-500' : ' border-gray-400'}`} type={type} onChange={onChange} />
            <span className="text-sm text-red-600 ">{error}</span>
        </div>
    )
}

export default Input