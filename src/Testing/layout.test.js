import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Layout from '../ComponentFolder/Layout/Layout';
import Adaptar from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adaptar()});

describe("Layout Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<Layout/>);

        expect(wrapper.exists()).toBe(true);
    })
});