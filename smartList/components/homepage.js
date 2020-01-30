/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StackActions, NavigationActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Text } from 'native-base';
import Welcome from './welcome'
import 'react-native-gesture-handler';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
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
                        <Button transparent><Text>Menu</Text>
                        </Button>
                    </Right>
                </Header>
                <Body>
                    <View style = {{marginTop:50,}}>
                        <Button bordered dark
                                style = {{width:80, height:80,justifyContent:"center"}}
                                onPress={() => this.props.navigation.navigate('ResearchRecipe')}
                        >
                            <Text>+</Text>
                        </Button>
                        <Button bordered dark
                                style = {{width:80, height:80,justifyContent:"center"}}
                                onPress={() => this.props.navigation.navigate('ShopList')}
                        >
                            <Text>Liste 1</Text>
                        </Button>
                    </View>
                </Body>
            </Container>
        );
    }
}


export default HomePage;
