import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import SignUpPage from '../ComponentFolder/SignUpPage/SignUpPage';
import Adaptar from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adaptar()});

describe("SignUpPage Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<SignUpPage/>);

        expect(wrapper.exists()).toBe(true);
    })
});