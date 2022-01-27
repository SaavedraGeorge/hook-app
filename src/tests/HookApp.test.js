import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Pruebas en <HookAppp />', () => {
    test('dse debe mostrar correctamente', () => {
      const wrapper = shallow(<HookApp />);
      expect(wrapper).toMatchSnapshot();
    });
    
  
});
