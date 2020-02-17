import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    SectionList,
} from 'react-native';

import Checkbox from 'react-native-custom-checkbox';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Body, Button, Container, Header, Left, Right, Title} from "native-base";
import ListCarre from '../assets/squares.svg'
import Checklist from '../assets/checklist.svg'
import Menu from "../assets/menu.svg";
import Share from "../assets/share.svg";
import Home from "../assets/home-run.svg"





class ShopList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            elements: ['Rhum', 'oeufs','Beurre','Lait', 'Farine', 'Lessive'],
            states:{},
            counter: 0,
            showForm: 0,

            boolListCheck: true,
            showButtonAdd: false,

            sections: [
                {title: 'Crêpes faciles', data: ['Oeufs', 'Beurre', 'Lait', 'Farine']},
                {title: 'Purée', data: ['Patate', 'Lait']},
                {title: 'Autre', data: ['Lessive']}
            ]
        }
    }

    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    DecrementItem = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    handleOnTextChange = (e) => {
        const number = e.target.value;
        console.log(number);
        if(number){
            this.setState({[e.target.name]: number})
        }
    };


    render() {

        let addRecette;
        if(this.state.showButtonAdd){
            addRecette = (
                <Button
                    style={styles.addRecette}
                    onPress={() => this.props.navigation.navigate('ResearchRecipe')}
                >
                    <Text style={styles.addThingsText}>Recette</Text>
                </Button>
            )
        }

        let addElement;
        if(this.state.showButtonAdd){
            addElement = (
                <Button
                    style={styles.addElement}
                    onPress={() => this.props.navigation.navigate('ResearchRecipe')}
                >
                    <Text style={styles.addThingsText}>Element</Text>
                </Button>
            )
        }

        let form;
        if (this.state.showForm === 1) {
            form = (
                <View>
                    <FlatList data={this.state.elements} style={styles.checkBoxAndElement} renderItem={({ item }) =>
                        <View style={styles.viewLigneElement}>
                            <Checkbox style={styles.checkBoxStyle}
                                      size={25}
                                      checked={false}
                                      value={this.state.states[item]}
                                      onChange={(checked) => {let x = this.state.states;
                                          this.checked = !checked; }}
                            />

                            <Text style={styles.textCheckBox}>{item}</Text>

                            <View style={styles.viewIncrement}>
                                <TouchableOpacity onPress={this.IncrementItem}><Text style={styles.buttonIncr}>+</Text></TouchableOpacity>
                                <TextInput type="text"
                                           keyboardType = 'numeric'
                                           name="tempNum"
                                           onChange={this.handleOnTextChange}
                                           maxValue={99}
                                           minValue={0}
                                           style={styles.inputNumber}>
                                    {this.state.counter}
                                </TextInput>

                                <TouchableOpacity onPress={this.DecrementItem}><Text style={styles.buttonIncr}>-</Text></TouchableOpacity>
                            </View>

                        </View>}
                              keyExtractor={item => item.id}/>
                </View>
            );
        } else if (this.state.showForm === 0) {
            form = (
                <View>
                    <SectionList style={styles.sectionListStyle}
                                 sections={this.state.sections}
                                 renderItem={({item}) => <Text style={styles.itemListGroup}>{item}</Text>}
                                 renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                                 keyExtractor={(item, index) => index}
                    />
                </View>
            );
        }

        return(

            <Container>

                <Header style={styles.hearderStyle}>
                    <Left style={{flex: 1,}}>
                        <Button
                            style={styles.headerButtonText}
                            transparent onPress={() => this.props.navigation.navigate('List')}>
                            <Home height={35} width={35}/>
                        </Button>
                    </Left>
                    <Right style={{flex: 1,}}>
                        <Button
                            style={styles.headerButtonText}
                            transparent onPress={() => this.props.navigation.navigate('Partage')}>
                            <Share height={35} width={35}/>
                        </Button>
                    </Right>
                </Header>
                <View style = {styles.allPages}>

                    <View style = {styles.buttonViewListeRecette}>
                        <TouchableOpacity style={styles.buttonRecette} onPress={() => this.setState({showForm: 0})}>
                            {/*<Text style = {styles.buttonRecetteText}>
                                Recette
                            </Text>*/}
                            <ListCarre width={45} height={45}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonListe} onPress={() => this.setState({showForm: 1})}>
                            {/* <Text style = {styles.buttonListeText}>
                                Liste
                            </Text>*/}
                            <Checklist width={45} height={45}/>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.textTitle}
                            placeholder="Crêpes faciles"
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    {/*<Text class="nomRecette" style={styles.textTitle}>Recette de paté de crabe</Text>*/}

                    <View style={styles.viewAddThings}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => this.setState({showButtonAdd: !this.state.showButtonAdd})}>
                            <FontAwesome name={"plus"}  size={30} color="white" />
                        </TouchableOpacity>

                        {addRecette}
                        {addElement}
                    </View>

                    <View>
                        {form}
                    </View>

                </View>
            </Container>

        );
    };
}

const styles = StyleSheet.create({

    allPages: {
        flex: 1,
    },

    textTitle: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'Helvetica Neue',
        borderBottomColor: '#FF6F61',
        borderBottomWidth: 2,

        backgroundColor: 'white',
        marginRight: 15,
        flex: 1,

    },

    textCheckBox: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        textTransform: 'capitalize',

    },

    checkBoxStyle: {
        backgroundColor: '#f2f2f2',
        color:'#FF6F61',
        borderRadius: 5,
        borderWidth: 2,
        margin: 10,

        borderColor: '#FF6F61',
    },

    checkBoxAndElement: {
        flexDirection: 'row',
    },

    buttonRecetteText: {
        backgroundColor: '#FF6F61',
        fontSize: 22,
        fontFamily: 'Helvetica Neue',
        color: 'white',
        fontWeight: 'bold',
        width: 110,
        height: 50,
        paddingTop: 8,

        textAlign: 'center',

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF6F61',

    },

    buttonListeText: {
        backgroundColor: '#FF6F61',
        fontSize: 22,
        fontFamily: 'Helvetica Neue',
        color: 'white',
        fontWeight: 'bold',
        width: 110,
        height: 50,
        paddingTop: 8,

        textAlign: 'center',

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF6F61',

    },

    buttonViewListeRecette: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 10,
        marginBottom: 20,
    },

    buttonRecette: {
        marginLeft: 10,
    },

    buttonListe: {
        fontFamily: 'Helvetica Neue',
    },

    inputNumber: {
        borderColor: '#FF6F61',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        backgroundColor: 'white',

        textAlign: 'center',
    },

    viewLigneElement: {
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginBottom: 10,
    },

    viewIncrement: {
        display: 'flex',
        flexDirection: 'row',
        width: 300 * 0.62,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 75,
    },

    buttonIncr: {
        fontSize: 30,
        marginRight: 3,
    },

    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(255,111,97,0.73)',
    },

    itemListGroup: {
        padding: 10,
        fontSize: 18,
        height: 44,

        marginLeft: 20,
    },

    buttonAdd: {
        borderWidth:1,
        borderColor:'white',
        borderStyle: 'solid',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#FF6F61',
        borderRadius:50,
    },

    viewAddThings: {
        position: 'absolute',
        top: 530,
        left: 270,
        zIndex: 10,
    },

    addRecette: {
        backgroundColor: '#FF6F61',
        justifyContent: 'center',
        borderRadius: 10,
        top: -120,
    },

    addElement: {
        backgroundColor: '#FF6F61',
        justifyContent: 'center',
        borderRadius: 10,
        top: -120,
        left: -70,
    },

    addThingsText: {
        color: 'white',
    },

    sectionListStyle: {
        display: 'flex',
        overflow: 'scroll',
    },

    hearderStyle: {
        backgroundColor:'#FF6F61',
        textAlign: 'center',
    },

    hearderButton: {

    },

    headerButtonText: {
        color: 'white',
        fontSize: 25,
    },

});

export default ShopList;
