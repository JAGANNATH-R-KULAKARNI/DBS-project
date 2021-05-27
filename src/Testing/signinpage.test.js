import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import SignInPage from '../ComponentFolder/SignInPage/SignInPage';
import Adaptar from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adaptar()});

describe("SignInPage Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<SignInPage/>);

        expect(wrapper.exists()).toBe(true);
    })
});