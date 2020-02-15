import React from 'react';
import { StackActions, NavigationActions, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homepage from './homepage'
import { Container, Header, Content, Button, Text, Input, Item, View } from 'native-base';import HomePage from './homepage'
import 'react-native-gesture-handler';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <View style = {styles.container}>
                    <View style = {{justifyContent:"center", paddingBottom: 30,}}>
                        <Text style = {{fontSize:30}}>Bienvenue</Text>
                    </View>
                    <View style = {{width:300, paddingBottom: 30,}}>
                        <Item regular>
                            <Input placeholder='E-mail' />
                        </Item>
                        <Item regular>
                            <Input
                                secureTextEntry={true}
                                style={{ textContentType: 'password'}}
                                placeholder='Mot de passe' />
                        </Item>
                    </View>
                    <View style = {{}}>
                        <Button
                            style={styles.buttonValider}
                            onPress={() => this.props.navigation.navigate('List')}
                        >
                            <Text>Valider</Text>
                        </Button>
                        <Text style={styles.passerStyle}
                              onPress={() => this.props.navigation.navigate('List')}>
                            Passer</Text>
                    </View>


                </View>

            </Container>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },

    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 24
    },

    elementsContainer: {
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    },

    buttonValider: {
        backgroundColor: '#FF6F61',
        borderRadius: 10,
    },

    passerStyle: {
        color: '#FF6F61',
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'underline',
    }
}

export default Welcome;
