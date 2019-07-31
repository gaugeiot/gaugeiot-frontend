/* global jest */
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
