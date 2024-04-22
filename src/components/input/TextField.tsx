import React from 'react'

export const TextField = ({ value, placeholder, handleClick }: { value: string, placeholder: string, handleClick: (e: string) => void }) => {
    return (
        <input type="text" placeholder={placeholder} className="w-[90%] p-3 text-start text-xl card-md border border-slate-400 focus:outline-blue-400" value={value} onChange={(e) => handleClick(e.target.value)} />
    )
}
