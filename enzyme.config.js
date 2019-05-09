/* eslint import/no-extraneous-dependencies: [ "error", { devDependencies: true }] */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
