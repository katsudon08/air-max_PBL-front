import React from 'react'

export const Background = ({ handleClick }: { handleClick?: () => void }) => {
    return (
        <div className="absolute content-full shadow" onClick={handleClick} />
    )
}
