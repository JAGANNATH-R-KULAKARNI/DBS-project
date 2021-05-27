import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import Body from '../ComponentFolder/HomePage/Body2/body2';
import Adaptar from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adaptar()});

describe("Body Component",()=>{
    test("renders",()=>{
        const wrapper=shallow(<Body/>);

        expect(wrapper.exists()).toBe(true);
    })
});