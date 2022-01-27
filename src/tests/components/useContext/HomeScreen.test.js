//configure se llama para llamar mount en reat 17
import {mount,  configure} from "enzyme";
//adaptaer es para llamar mount en reat 17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { HomeScreen } from '../../../component/useContex/HomeScreen';
import { UserContext } from '../../../component/useContex/UseContext';

configure({adapter: new Adapter()});

describe('pruebas a <HomeScreen />', () => {
    const user = {
        name: 'jorge',
        email: 'asd@asd.com'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
        
    );
    
    test('should show componen corectly', () => {
        expect(wrapper).toMatchSnapshot();
    });
  
});
