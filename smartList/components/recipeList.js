import React from "react";
import {
    FlatList,
    View,
    Text,
    TextInput,
    TouchableOpacity, Image
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import 'react-native-gesture-handler';
import {Body, Button, Container, Header, Left, Right, Title} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import Menu from "../assets/menu.svg";

function Feed({ navigation }) {
    return (
        <View>
            <Button
                style={styles.headerButtonText}
                transparent
                title={'Open drawer'}
                onPress={() => navigation.openDrawer()}>
                <Menu height={35} width={35}/>
            </Button>
        </View>
    )
};

function Notifications() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
};

const Drawer = createDrawerNavigator();


function MyDrawer() {

    return (
        <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}

class recipeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

                <Header style={styles.hearderStyle}>
                    <Left style={{flex: 1,}}>
                        {/*<Button
                            style={styles.headerButtonText}
                            transparent onPress={() => navigation.openDrawer()}>
                            <Menu height={35} width={35}/>
                        </Button>*/}
                        <NavigationContainer>
                            <MyDrawer/>
                        </NavigationContainer>
                    </Left>
                    <Body style={styles.titleHearder}>
                        <Title style={styles.titleHearderText}>Nom de recette</Title>
                    </Body>
                    <Right style={{flex: 1,}}>
                    </Right>
                </Header>

                <View style={styles.container}>
                    <View style={styles.scrollArea}>
                        <FlatList
                            data={[{title: "Pâte à crêpes simple", localisation: "../assets/crepesSimple.png"},
                                {title: "Pâte à crêpes", localisation: "../assets/crepesSimple.png"},
                                {title: "Pâte à crêpes (des plus raffinées)", localisation: "../assets/crepesSimple.png"},
                                {title: "Pâte à crêpes légère", localisation: "../assets/crepesSimple.png"},
                                {title: "Crêpes sans Lactose", localisation: "../assets/crepesSimple.png"},
                                {title: "Crêpes sucrées", localisation: "../assets/crepesSimple.png"},
                                {title: "Crêpes Vonassienne", localisation: "../assets/crepesSimple.png"}]}
                            keyExtractor={item => item.title}
                            renderItem={({item, separators}) => {
                                return (<View style={styles.list}>
                                    <View style={styles.photo}>
                                        <Image style={styles.imagePhoto} source={require("../assets/crepesSimple.png")} />
                                    </View>
                                    <View style={styles.content}>
                                        <View style={styles.description}>
                                            <Text style={styles.resume}>Résumé</Text>
                                            <Text style={styles.titre}>{item.title}</Text>
                                        </View>
                                        <View style={styles.addUser}>
                                            <TextInput
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
                                    <TouchableOpacity
                                        style={styles.button2}
                                        onPress={() => this.props.navigation.navigate('ShopList')}
                                    >
                                        <FontAwesomeIcon
                                            name='plus'
                                            style={styles.icon3}/>
                                    </TouchableOpacity>
                                </View>)
                            }}/>
                    </View>

                </View>
            </Container>
        );
    }

}

const styles = {
    list: {
        flex: 1,
        flexDirection: "row",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    scrollArea: {
        height: 0,
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        margin: 10
    },
    scrollArea_contentContainerStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    photo: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(77,77,77,1)",
        marginBottom: 10
    },
    imagePhoto: {
        width: 100,
        height: 100,
    },
    content: {
        flex: 2,
        height: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10,
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1,

        backgroundColor: '#eff0f2',
        paddingRight: 10,

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
        fontFamily: "helvetica",
        textAlign: "left",
        marginLeft: 5,
    },
    titre: {
        height: 40,
        color: "rgba(0,0,0,1)",
        alignSelf: "stretch",
        fontFamily: "helvetica",
        textAlign: "center",

        marginTop: 10,
        fontSize: 10,
        textTransform: 'uppercase'
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
        fontFamily: "helvetica",
        margin: "15%",
        textAlign: "center",
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1,

        backgroundColor: 'white',
    },
    icon2: {
        color: "#FF6F61",
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
        justifyContent: "center",

        backgroundColor: '#eff0f2',

    },
    icon3: {
        color: "#FF6F61",
        fontSize: 50,
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
        textAlign: 'center',
    },

    titleHearderText: {
        textTransform: 'uppercase',
        fontSize: 17,
    }
};

export default recipeList;
