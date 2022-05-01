import React from 'react'

const Alerta = ({children}) => {
    return (
        <div className='bg-red-700 text-white text-center font-bold p-3 uppercase'>
            {children}
        </div>
    )
}

export default Alerta