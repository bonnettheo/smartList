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





class ShopList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            elements: ['patate', 'oeuf','chaussure','farine'],
            states:{},
            counter: 0,
            showForm: 0,
        }
    }

    IncrementItem = () => {
        if(this.state.tempNum){
            let sum = parseInt(this.state.counter) + parseInt(this.state.tempNum);
            if(sum >=1 && sum <=99){
                this.setState({ counter: sum, tempNum: null });
            }else{
                console.log("Number should be between 1 and 99");
                this.setState({error:"Number should be between 1 and 99"})
            }

        }
        else{
            this.setState({ counter: this.state.counter + 1 });
        }
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

        let form;
        if (this.state.showForm === 0) {
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
                                           value={this.state.tempNum}
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
        } else if (this.state.showForm === 1) {
            form = (
                <View>
                    <SectionList style={styles.sectionListStyle}
                        sections={[
                            {title: 'Quiche Lorraine', data: ['Oeufs', 'Lardon', 'Lait', 'Farine']},
                            {title: 'Purée', data: ['Pomme de terre', 'Lait']},
                            {title: 'Autre', data: ['Lessive', 'Test', 'Test']},
                        ]}
                        renderItem={({item}) => <Text style={styles.itemListGroup}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            );
        }

        return(
            <View style = {styles.allPages}>

                <View style = {styles.buttonViewListeRecette}>
                    <TouchableOpacity style={styles.buttonRecette} onPress={() => this.setState({showForm: 1})}>
                        <Text style = {styles.buttonRecetteText}>
                            Recette
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonListe} onPress={() => this.setState({showForm: 0})}>
                        <Text style = {styles.buttonListeText}>
                            Liste
                        </Text>
                    </TouchableOpacity>
                </View>

                {/*<Text class="nomRecette" style={styles.textTitle}>Recette de paté de crabe</Text>*/}
                <TextInput
                    style={styles.textTitle}
                    placeholder="Recette de paté au crabe"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <TouchableOpacity style={styles.buttonAdd} >
                    <FontAwesome name={"plus"}  size={30} color="white" />
                </TouchableOpacity>

                <View>
                    {form}
                </View>

            </View>

        );
    };
}

const styles = StyleSheet.create({

    allPages: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },

    textTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Helvetica Neue',
        borderStyle: 'solid',
        borderColor: '#FF6F61',
        borderWidth: 2,
        borderRadius: 10,

        backgroundColor: 'white',

        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
    },

    textCheckBox: {
        marginTop: 5,
        fontSize: 25,
        fontFamily: 'Helvetica Neue',

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
        padding: 20,
        marginTop: 10,
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
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        backgroundColor: 'white',

        textAlign: 'center',
    },

    viewLigneElement: {
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 20,
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
        fontSize: 22,
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

        position: 'absolute',
        top: 580,
        left: 330,
        zIndex: 10,
    },

    sectionListStyle: {

    }

});

export default ShopList;
