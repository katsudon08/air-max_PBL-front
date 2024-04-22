import React from 'react'

export const AddButton = ({ handleClick }: { handleClick?: () => void }) => {
    return (
        <div className="absolute bottom-4 right-5 circle-button select select-blue h-14 w-14 bold text-center cursor-pointer" onClick={handleClick}>
            <div className=" h-full w-full flex justify-center">
                <span className="text-5xl text-white select-none">
                    +
                </span>
            </div>
        </div>
    )
}
