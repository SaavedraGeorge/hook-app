//configure se llama para llamar mount en reat 17
import {mount,  configure} from "enzyme";
//adaptaer es para llamar mount en reat 17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserContext } from '../../../component/useContex/UseContext';
import { AppRouter } from "../../../component/useContex/AppRouter";
configure({adapter: new Adapter()});

describe('pruebas <AppRouter />', () => {
    const user = {
        name: 'jorge',
        email: 'asd@asd.com'
    }  
    const wrapper = mount(
        <UserContext.Provider value={{user}} >
            <AppRouter />
        </UserContext.Provider>
    );
    test('should show componen', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
