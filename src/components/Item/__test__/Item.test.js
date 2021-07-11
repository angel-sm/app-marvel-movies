import React from 'react'
import '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Item } from '../index'

describe('Item comoponent test', () => {
    test('should render Item component', () => {
        const component = render(<Item url='https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man-2.jpg' title='Iron Man 2' />)
        component.findByText(123123)
    })
})
