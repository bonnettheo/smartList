import React from 'react';
import { Container,ListItem, Header, Left, Body, Right, Button, Icon, Title, View, Text } from 'native-base';
import 'react-native-gesture-handler';
import {StyleSheet} from "react-native";
import { Menu, Checkbox } from 'react-native-paper';

import Menu1 from '../assets/menu.svg'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        visible: false,
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: false,
      };
      _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

    render() {
        const { checked1,checked2,checked3,checked4 } = this.state;

        return (
            <Container>
                <Header style={styles.hearderStyle}>
                    <Left style={{flex: 1,}}>
                        <Button
                            style={styles.headerButtonText}
                            transparent onPress={() => this.props.navigation.navigate('Partage')}>
                            <Menu1 height={35} width={35}/>
                        </Button>
                    </Left>
                    <Body style={styles.titleHearder}>
                        <Title style={styles.titleHearderText}>Choix de liste</Title>
                    </Body>
                    <Right style={{flex: 1,}}>
                    <Menu
                visible={this.state.visible}
                onDismiss={this._closeMenu}
                style={styles.menu}
                anchor={
                <Button transparent 
                  onPress={this._openMenu}>
                  <Icon name='person' />
                  </Button>}>
                    <View style={{margin:10}}>
                      <Text style={styles.title}>Préférence </Text>
                  <ListItem>
                  <Checkbox
                  status={checked1 ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked1: !checked1 }); }}
                  />
                        <Body>
                            <Text>Végétarien</Text>
                        </Body>
                    </ListItem>
                    <Text>Allergique aux</Text>
                    <ListItem>
                  <Checkbox
                  status={checked2 ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked2: !checked2 }); }}
                  />
                        <Body>
                            <Text>Fruit de mer</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                  <Checkbox
                  status={checked3 ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked3: !checked3 }); }}
                  />
                        <Body>
                            <Text>Mango</Text>
                        </Body>
                    </ListItem>
                    <Button primary><Text>+ Ajouter</Text></Button>
                    </View>
                  
                  </Menu>
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

        margin: 20,
        borderColor: '#eff0f2',
        borderRadius: 15,

        backgroundColor: '#eff0f2',
    },

    buttonListeConsult: {
        height: 140,
        width: 140,
        justifyContent: 'center',

        margin: 20,
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
    },
    menu: {
        width:250,
        padding:20,
    },
    title: {
      fontSize: 20,
    },


});

export default HomePage;
