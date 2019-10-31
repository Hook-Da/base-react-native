import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {/* BlogProvider */ Provider} from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index:IndexScreen
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