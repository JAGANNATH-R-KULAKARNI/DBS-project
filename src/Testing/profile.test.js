import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Profile from '../ComponentFolder/Profile/Profile';
import Adaptar from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adaptar()});

describe("Profile Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<Profile/>);

        expect(wrapper.exists()).toBe(true);
    })
});