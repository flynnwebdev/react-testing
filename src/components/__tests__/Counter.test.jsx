import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from '../List'
import Counter from '../Counter';

configure({ adapter: new Adapter() })

describe('Counter tests', () => {
    it('Increments by 1 on button click', () => {
        const wrapper = mount(<Counter />)

        expect(wrapper.find('h1').get(0).props.children).toEqual(0)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('h1').get(0).props.children).toEqual(1)
    })
})
