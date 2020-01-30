import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    CheckBox,
    TouchableOpacity,
    TextInput,
    SectionList

} from 'react-native';

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
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox style={styles.checkBox}
                                      value={this.state.states[item]}
                                      onValueChange={() => {let x = this.state.states;
                                          x[item] = !x[item];
                                          this.setState({ states: x });}}
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
                    <SectionList
                        sections={[
                            {title: 'Quiche Lorraine', data: ['Oeufs', 'Lardon', 'Lait', 'Farine']},
                            {title: 'Purée', data: ['Pomme de terre', 'Lait']},
                            {title: 'Autre', data: ['Lessive']},
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

                <View style = {styles.buttonRecette}>
                    <TouchableOpacity onPress={() => this.setState({showForm: 1})}>
                        <Text style = {styles.buttonRecetteText}>
                            Recette
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({showForm: 0})}>
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
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',

        margin: 25,
    },

    textCheckBox: {
        marginTop: 5,
        fontSize: 22,
    },

    checkBoxAndElement: {
        flexDirection: 'row',
    },

    buttonRecetteText: {
        backgroundColor: '#FF6F61',
        fontSize: 22,
        padding: 25,
        color: 'white',
        width: 125,
        height: 80,

        borderColor: '#d66457',
        borderStyle: 'solid',
        borderWidth: 2,
    },

    buttonListeText: {
        backgroundColor: '#FF6F61',
        fontSize: 22,
        padding: 25,
        color: 'white',
        width: 125,
        height: 80,

        borderColor: '#d66457',
        borderStyle: 'solid',
        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonRecette: {
        flexDirection: 'row-reverse',
        padding: 10,
    },

    inputNumber: {
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 2,
        fontSize: 20,
        backgroundColor: 'white',

        textAlign: 'center',
    },

    viewIncrement: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        right: -200,
        justifyContent: 'center',
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
        backgroundColor: '#FF6F61',
    },

    itemListGroup: {
        padding: 10,
        fontSize: 22,
        height: 44,
    },

});

export default ShopList;
