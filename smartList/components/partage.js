import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import 'react-native-gesture-handler';

class Partage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.partagerRecette}>Partager ma liste</Text>
                <Text style={styles.partagerRecette1}>Liste partagée avec moi</Text>
               
               
               
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                />
                
                <View style={styles.rect}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.loremIpsum1} onPress={() => this.props.navigation.navigate('List')}>Partager</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.loremIpsum} onPress={() => this.props.navigation.navigate('List')}>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap"
    },
    partagerRecette: {
        left: 0,
        height: 37,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
        fontSize: 30,
        fontFamily: "roboto-700",
        textAlign: "center"
    },

    partagerRecette1: {
        left: 10,
        height: 30,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
        fontSize: 15,
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
   
    creerALaMain: {
        flex: 1,
        color: "rgba(24,11,251,1)",
        alignSelf: "center",
        justifyContent: "space-between",
        fontFamily: "roboto-regular",
        textAlign: "center"
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
        backgroundColor: "rgba(215, 215, 215,1)",
        alignSelf: "stretch",
        marginRight: 3,
        marginLeft: 3
    },
    loremIpsum1: {
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 3,
        padding: 15,
        fontFamily: "roboto-regular",
        textAlign: "center",
        flex: 1
    },
    button: {
        height: 60,
        flex: 1,
        backgroundColor: "rgba(215, 215, 215,1)",
        alignSelf: "center",
        justifyContent: "space-between",
        marginRight: 3,
        marginLeft: 3
    },
    loremIpsum: {
        flex: 1,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 3,
        padding: 15,
        fontFamily: "roboto-regular",
        textAlign: "center"
    }
};

export default Partage;
