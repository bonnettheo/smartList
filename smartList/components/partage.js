import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import 'react-native-gesture-handler';
import Toast from "react-native-simple-toast";

class Partage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.partagerRecette}>Partager ma liste</Text>

                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                />

                <View style={styles.rect}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('ShopList')}>Annuler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={() => {
                            this.props.navigation.navigate('ShopList');
                            Toast.show('Liste partagée');
                        }}>Partager</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        flexWrap: "nowrap"
    },
    partagerRecette: {
        left: 0,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
        fontSize: 30,
        fontFamily: "helvetica",
        textAlign: "center"
    },

    partagerRecette1: {
        left: 10,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
        fontSize: 15,
        fontFamily: "helvetica",
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

    rect: {
        color: "#121212",
        flexDirection: "row",
        alignSelf: "stretch",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    button2: {
        height: 50,
        flex: 1,
        backgroundColor: "#FF6F61",
        alignSelf: "stretch",
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 3,
        padding: 10,
        fontFamily: "roboto-regular",
        textAlign: "center",
        flex: 1,
        fontSize: 18,
    },
    button: {
        height: 50,
        flex: 1,
        backgroundColor: "#FF6F61",
        alignSelf: "center",
        justifyContent: "space-between",
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
};

export default Partage;
