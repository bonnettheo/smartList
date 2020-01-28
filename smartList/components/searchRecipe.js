import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

function SearchRecipe(props) {
    return (
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
                    <Text style={styles.loremIpsum1}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loremIpsum}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        flexWrap: "nowrap"
    },
    rechercherRecette: {
        left: 0,
        height: 37,
        color: "#121212",
        alignSelf: "stretch",
        justifyContent: "space-between",
        margin: 10,
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
});

export default SearchRecipe;
