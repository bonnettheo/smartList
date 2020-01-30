import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Content, Button, Text, Input, Item, View } from 'native-base';
import homepage from './components/homepage';
import welcome from './components/welcome';
import researchRecipe from './components/researchRecipe';
import recipeList from "./components/recipeList";


const RootStack = createStackNavigator(
  {
    Home: welcome,
    List: homepage,
    RecipeList:  recipeList,
    ResearchRecipe: researchRecipe,
  },
  {
    initialRouteName: 'ResearchRecipe',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}