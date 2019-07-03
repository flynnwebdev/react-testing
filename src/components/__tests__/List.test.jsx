import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from '../List'

configure({ adapter: new Adapter() })

describe('List tests', () => {
    it('renders list-items', async () => {
        const items = ['one', 'two', 'three']
        const wrapper = mount(<List items={items} />)

        console.log(wrapper.debug())
        // Expect the list to be defined
        expect(wrapper.find('.list-items')).toBeDefined()
        // Expect correct number of items rendered
        expect(wrapper.find('.item')).toHaveLength(items.length)
    })

    it('renders a specific list item', () => {
        const items = ['Thor', 'Loki']
        const wrapper = mount(<List items={items} />)

        // Check if a specific item was rendered
        expect(wrapper.contains(<li key='Thor' className="item">Thor</li>)).toBeTruthy()
    })

    it('renders correct text in item', () => {
        const items = ['Thor', 'Loki']
        const wrapper = mount(<List items={items} />)

        expect(wrapper.find('.item').get(0).props.children).toEqual('Thor')
    })
})