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
import {Body, Button, Container, Header, Left, Right, Title, ListItem} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Alert} from 'react-native'
import Toast from 'react-native-simple-toast';

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
                            data={[{title: "Cheeseburger végétarien", resume: "Buger simple avec un steak de soja" ,localisation: "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/748x372/quality/90/crop-from/center/burger-maison.jpeg"},
                                {title: "Chicken burger végétarien", resume: "Buger simple avec une imitation poulet", localisation: "https://static.cuisineaz.com/400x320/i81670-recette-burger-vegetarien-au-steak-de-carottes.jpg"},
                                {title: "Burger galette de soja", resume: "Buger simple avec une galette de soja", localisation: "https://static.750g.com/images/622-auto/035824bfbafcbdd2673f722d402cca57/334479.jpg"},
                                {title: "Burger pain au sésame sans viande", resume: "Buger rafiné avec pain au sésame", localisation: "https://1k9ch93e3xh2t4pa12vvmx1t-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Vegetarian-Beet-Quinoa-Burger_1.jpg"},
                                {title: "Mini burger avec un oeuf", resume: "Mini-burger parfait pour l'apéro", localisation: "https://lh3.googleusercontent.com/proxy/xWlDrGejqQZA2qX-9pRmBzEsPCQulIJ4UaRZAjkFE8l8T5ezKR51ODgMFN5GFYBL4Zfq5CKuFVrEkEpGyxzixK0x2JX5LKsZCYlUz3yc3lqjBDJjtwsQtXb-uvL4ttYf"},
                                {title: "Burger galette de pomme de terre", resume: "Buger simple avec une galette de pomme de terre", localisation: "https://www.lescuilleresenbois.com/wp-content/uploads/2017/02/IMG_5061.jpg"},
                                {title: "Burger végétarien pain bistrot", resume: "Buger simple avec un steak de soja", localisation: "https://ccloutiernutrition.com/wp-content/uploads/2016/08/burger-vege-e1497144366733.jpg"}]}
                            keyExtractor={item => item.title}
                            renderItem={({item, separators}) => {
                                return (<View style={styles.list}>
                                    <View style={styles.photo}>
                                        <Image style={styles.imagePhoto} source={{ uri: item.localisation }} />
                                    </View>
                                    <View style={styles.content}>
                                        <View style={styles.description}>
                                            <Text style={styles.resume}>{item.resume}</Text>
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
                                        onPress={() => {
                                            //Alert.alert( 'Nouvelle liste','Votre liste a bien été créée',[{text: 'OK'}]);
                                            Toast.show('Liste crée');
                                            this.props.navigation.navigate('ShopList');
                                        }}
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
        padding: 10,

    },
    description: {
        width: "80%",
        flexDirection: "column-reverse",
        alignItems: "stretch",
        alignSelf: "stretch",
        justifyContent: "flex-end",
    },
    resume: {
        flex: 1,
        color: "rgba(0,0,0,1)",
        alignSelf: "stretch",
        fontFamily: "helvetica",
        textAlign: "left",
        marginLeft: 5,

        fontSize: 10,
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
