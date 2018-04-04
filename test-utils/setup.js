import 'core-js/es6/map';
import 'core-js/es6/set';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const logError = global.console.error;

global.console.error = (msg, ...rest) => {
    if (msg.match && msg.match('Warning: Failed prop type:')) {
        return msg;
    }

    logError(msg, ...rest);

    return msg;
};
