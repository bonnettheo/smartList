/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Text } from 'native-base';
import Welcome from './welcome'
import 'react-native-gesture-handler';

class HomePage extends React.Component {
    render() {
        return (
            <Container>
              <Header>
                <Left>
                </Left>
                <Body>
                  <Title>Choix de liste</Title>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
              </Header>
              <Body>
                  <View style = {{marginTop:50,}}>
                    <Button bordered dark 
                    style = {{width:80, height:80,justifyContent:"center"}}
                    onPress={() => this.props.navigation.navigate('Test')}
                    >
                       <Text>+</Text>
                    </Button>
                  </View>
              </Body>
            </Container>
          );
    }
  }
  const AppNavigator = createStackNavigator({
    Home: HomePage,
    Test: Welcome,
  },
  );
  
export default HomePage;
