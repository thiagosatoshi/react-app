import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Checkbox tests', () => {
    it('Checkbox should be unchecked', () => {
        const wrapper = shallow(<Checkbox isChecked={false}/>);
        let checkbox = wrapper.find({ type: 'checkbox' });
        expect(checkbox.props().checked).toEqual(false);
    });

    it('Checkbox should be checked', () => {
        const wrapper = shallow(<Checkbox isChecked={true}/>);
        let checkbox = wrapper.find({ type: 'checkbox' });
        expect(checkbox.props().checked).toEqual(true);
    });

    it('Checkbox should habe right label text', () => {
        const wrapper = shallow(<Checkbox label='Click me' isChecked={true}/>);
        expect(wrapper.text()).toEqual('Click me');
    });
})
