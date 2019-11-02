import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {/* BlogProvider */ Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
  Index:IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
 /*  return <BlogProvider>
    <App />
  </BlogProvider> */
}
// как только мы использовали jsx нужно импортировать библ. React