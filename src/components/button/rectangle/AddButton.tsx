import React from 'react'

export const AddButton = ({ handleClick }: { handleClick: () => void }) => {
    return (
        <button className="h-fit w-4/5 border border-slate-300 p-2 card-md select text-2xl md:text-xl" onClick={handleClick} >追加</button>
    )
}
