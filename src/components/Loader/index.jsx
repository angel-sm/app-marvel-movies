import React from 'react'
import { StyledSpinnerTwo } from '../../assets/icons/spinner'

export const Loader = () => {
    return (
        <div className='w-full flex items-center justify-center p-20'>
            <StyledSpinnerTwo icon-role="spinner-two" />
        </div>
    )
}