import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Text } from 'native-base';
import 'react-native-gesture-handler';
import {StyleSheet} from "react-native";

import Menu from '../assets/menu.svg'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header style={styles.hearderStyle}>
                    <Left style={{flex: 1,}}>
                        <Button
                            style={styles.headerButtonText}
                            transparent onPress={() => this.props.navigation.navigate('Partage')}>
                            <Menu height={35} width={35}/>
                        </Button>
                    </Left>
                    <Body style={styles.titleHearder}>
                        <Title style={styles.titleHearderText}>Choix de liste</Title>
                    </Body>
                    <Right style={{flex: 1,}}>
                    </Right>
                </Header>
                <Body style={{flex: 1}}>
                    <View style = {styles.listeDesListes}>
                        <View>
                            <Button bordered dark
                                    onPress={() => this.props.navigation.navigate('ResearchRecipe')}
                                    style={styles.buttonListeAdd}
                            >
                                <Text style={{color: '#FF6F61', fontSize: 60, }}>+</Text>
                            </Button>
                        </View>
                        <View>
                            <Button bordered dark
                                    onPress={() => this.props.navigation.navigate('ShopList')}
                                    style={styles.buttonListeConsult}
                            >
                                <Text style={{color: '#FF6F61', fontSize: 21,}}>Liste 1</Text>
                            </Button>
                        </View>
                    </View>
                </Body>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    listeDesListes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

        marginTop: 50,
    },

    buttonListeAdd: {
        height: 140,
        width: 140,
        justifyContent: "center",

        margin: 30,
        borderColor: '#eff0f2',
        borderRadius: 15,

        backgroundColor: '#eff0f2',
    },

    buttonListeConsult: {
        height: 140,
        width: 140,
        justifyContent: 'center',

        margin: 30,
        borderColor: '#eff0f2',
        backgroundColor: '#eff0f2',
        borderRadius: 15,

    },

    hearderStyle: {
        backgroundColor:'#FF6F61',
        textAlign: 'center',
    },

    hearderButton: {

    },

    headerButtonText: {
        color: 'white',
        fontSize: 20,
    },

    titleHearder: {
        flex: 1,
        textAlign: 'center',
    },

    titleHearderText: {
        textTransform: 'uppercase',
        fontSize: 17,
    }


});

export default HomePage;
