import React from 'react';
//configure se llama para llamar mount en reat 17
import {mount,  configure} from "enzyme";
//adaptaer es para llamar mount en reat 17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserContext } from '../../../component/useContex/UseContext';
import { LoginScreen } from '../../../component/useContex/LoginScreen';

configure({adapter: new Adapter()});

const setUser = jest.fn();

describe('pruebas <LoginScreen', () => {
    
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
        
    );
    test('should show component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should button function', () => {
      wrapper.find('button').prop('onClick')();
      expect(setUser).toHaveBeenCalledWith({
            id: 456,
            name: 'alfa'
        })
    });
    
  
});
