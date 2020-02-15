import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import 'react-native-gesture-handler';

import {Body, Button, Container, Header, Left, Right, Title} from 'native-base';
import Menu from "../assets/menu.svg";

class Welcome extends React.Component {
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
                        <Title style={styles.titleHearderText}>Ajout de liste</Title>
                    </Body>
                    <Right style={{flex: 1,}}>
                    </Right>
                </Header>

                <View style={styles.container}>
                    <Text style={styles.rechercherRecette}>Rechercher Recette</Text>
                    <TextInput
                        placeholder="Nom de recette"
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.button3}>
                        <Text style={styles.creerALaMain}>Créer à la main</Text>
                    </TouchableOpacity>
                    <View style={styles.rect}>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.loremIpsum1} onPress={() => this.props.navigation.navigate('List')}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loremIpsum} onPress={() => this.props.navigation.navigate('RecipeList')}>Rechercher</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        flexWrap: "nowrap",
        backgroundColor: 'white',
        marginTop: 60,
    },
    rechercherRecette: {
        left: 0,
        height: 37,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
        marginBottom: 60,
        fontSize: 25,
        fontFamily: "roboto-700",
        textAlign: "center"
    },
    textInput: {
        height: 50,
        color: "#121212",
        alignSelf: "stretch",
        margin: 10,
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1,
        fontFamily: "roboto-regular",
        textAlign: "left"
    },
    button3: {
        height: 50,
        alignSelf: "center",
        justifyContent: "space-around",
        margin: 10
    },
    creerALaMain: {
        flex: 1,
        color: "#FF6F61",
        alignSelf: "center",
        justifyContent: "space-between",
        fontFamily: "helvetica",
        textAlign: "center",
        fontSize: 18,
    },
    rect: {
        color: "#121212",
        flexDirection: "row",
        alignSelf: "stretch",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    button2: {
        height: 60,
        flex: 1,
        alignSelf: "stretch",
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: '#FF6F61',
        borderRadius: 10,
    },
    loremIpsum1: {
        color: "white",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 3,
        padding: 15,
        fontFamily: "roboto-regular",
        textAlign: "center",
        flex: 1,
        fontSize: 18,
    },
    button: {
        height: 60,
        flex: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: '#FF6F61',
        borderRadius: 10,
    },
    loremIpsum: {
        flex: 1,
        color: "white",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 3,
        padding: 15,
        fontFamily: "helvetica",
        textAlign: "center",
        fontSize: 18,
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
};

export default Welcome;
