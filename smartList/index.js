/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './components/homepage'
import Welcome from './components/welcome'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Welcome);
