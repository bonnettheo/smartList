import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import 'react-native-gesture-handler';
import {Button, Container} from "native-base";

import Toque from "../assets/chef.svg";
import ListCarre from "../assets/squares.svg";
import Next from "../assets/next.svg"


const B = (props) => <Text style={styles.smarlistStyle}>{props.children}</Text>

class Presentation extends Component {


    constructor(props) {
        super(props);
    }


    render () {
        return (
            <Container>
                <View style = {styles.container}>

                    <Toque width={200} height={200} style={styles.toque}/>
                    <Text style={styles.introStyle}>
                        Marre d'écrire vos ingrédients ? {"\n"}
                        Vous souhaitez gagnez du temps ? {"\n"}
                        Vous souhaitez partager vos listes ? {"\n"}
                        Bienvenue sur <B>Smartlist</B>.
                    </Text>

                    <Next width={45} height={45} onPress={() => this.props.navigation.navigate('Home')}/>
                </View>
            </Container>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FF6F61',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    toque: {
        marginBottom: 30,
    },

    introStyle: {
        color: 'white',
        fontFamily: 'helvetica',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 30,

    },

    smarlistStyle: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
};


export default Presentation;
