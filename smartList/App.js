import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homepage from './components/homepage';
import welcome from './components/welcome';
import researchRecipe from './components/researchRecipe';
import recipeList from "./components/recipeList";
import shopList from "./components/shopList";


const RootStack = createStackNavigator(
  {
    Home: welcome,
    List: homepage,
    RecipeList:  recipeList,
    ResearchRecipe: researchRecipe,
    ShopList: shopList,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
