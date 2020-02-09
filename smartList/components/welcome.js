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
                    <View style = {{flex:2, justifyContent:"center"}}>
                        <Text style = {{fontSize:30}}>Bienvenue</Text>
                    </View>
                    <View style = {{flex:2,width:300}}>
                        <Item regular>
                            <Input placeholder='E-mail' />
                        </Item>
                        <Item regular>
                            <Input placeholder='Mot de passe' />
                        </Item>
                    </View>
                    <View style = {{flex:3}}>
                        <Button
                            style={styles.buttonValider}
                            onPress={() => this.props.navigation.navigate('List')}
                        >
                            <Text>Valider</Text>
                        </Button>
                    </View>


                </View>

            </Container>
        );
    }

}

const styles = {
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: "center",
        height: 800,
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
    }
}

export default Welcome;
