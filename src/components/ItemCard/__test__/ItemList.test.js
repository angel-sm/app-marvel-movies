import React from 'react'
import '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from '../index'

describe('Header comoponent test', () => {
    test('should render Header component', () => {
        const component = render(<Header title='my movie' />)
        component.findAllByText('my movies')
    })
})
