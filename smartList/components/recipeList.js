import React, {Component} from "react";
import {
    StyleSheet,
    FlatList,
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function recipeList(props) {
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <View style={styles.buttonStack}>
                    <Text style={styles.loremIpsum1}>Nom de recette</Text>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesomeIcon
                            name="user-circle"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.scrollArea}>
                <FlatList
                    data={[{title: "titre 1"}, {title: "titre 2"}, {title: "titre 3"}, {title: "titre 4"}, {title: "titre 5"}, {title: "titre 6"}, {title: "titre 7"}]}
                    keyExtractor={item => item.title}
                    renderItem={({item, separators}) => {
                        return (<View style={styles.list}>
                            <View style={styles.photo}/>
                            <View style={styles.content}>
                                <View style={styles.description}>
                                    <Text style={styles.resume}>Résumé</Text>
                                    <Text style={styles.titre}>{item.title}</Text>
                                </View>
                                <View style={styles.addUser}>
                                    <TextInput
                                        placeholder="1"
                                        placeholderTextColor="rgba(0,0,0,1)"
                                        defaultValue="1"
                                        editable={true}
                                        keyboardType="numeric"
                                        style={styles.textInput}
                                    />
                                    <FontAwesomeIcon
                                        name="user"
                                        style={styles.icon2}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button2}>
                                <EntypoIcon name="plus" style={styles.icon3}/>
                            </TouchableOpacity>
                        </View>)
                    }}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: "row"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    scrollArea: {
        height: 0,
        flex: 1,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "center",
        margin: 10
    },
    scrollArea_contentContainerStyle: {
        flexDirection: "row",
        alignSelf: "stretch",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    photo: {
        width: "15%",
        height: 100,
        backgroundColor: "rgba(77,77,77,1)",
        marginBottom: 10
    },
    content: {
        width: "70%",
        height: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10,
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1
    },
    description: {
        width: "80%",
        flexDirection: "column-reverse",
        alignItems: "stretch",
        alignSelf: "stretch",
        justifyContent: "flex-end"
    },
    resume: {
        flex: 1,
        color: "rgba(0,0,0,1)",
        alignSelf: "stretch",
        fontFamily: "roboto-regular",
        textAlign: "left"
    },
    titre: {
        height: 25,
        color: "rgba(0,0,0,1)",
        alignSelf: "stretch",
        fontFamily: "roboto-700",
        textAlign: "center"
    },
    addUser: {
        width: "20%",
        flexDirection: "column-reverse",
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: "space-between"
    },
    textInput: {
        flex: 1,
        color: "#121212",
        alignSelf: "stretch",
        fontFamily: "roboto-regular",
        textAlign: "center"
    },
    icon2: {
        color: "rgba(0,0,0,1)",
        fontSize: 46,
        marginTop: 2
    },
    button2: {
        width: "10%",
        height: 100,
        flex: 1,
        marginBottom: 10,
        borderColor: "#000000",
        borderWidth: 1,
        justifyContent: "center"
    },
    icon3: {
        color: "rgba(0,0,0,1)",
        fontSize: 85,
        alignSelf: "center"
    },
    rect: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        margin: 10
    },
    button: {
        width: 42,
        height: 40,
    },
    icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        width: 40,
        height: 40,
        alignSelf: "center"
    },
    loremIpsum1: {
        color: "#121212",
        alignSelf: "stretch",
        width: "80%",
        justifyContent: "space-between",
        margin: 3,
        fontFamily: "roboto-regular",
        textAlign: "left"
    },
    buttonStack: {

        flexDirection: "row",
        alignSelf: "stretch",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

export default recipeList;
