import React,{ Component } from 'react'
import {
	View,
	Text,
    Button,
    FlatList,
    TextInput,
    StyleSheet,
    Image
}	from 'react-native'
import { connect } from 'react-redux'

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        padding:4,
        height:40,
        alignItems:'stretch',
    },
    input:{
        flex:4,

    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            text:''
        }
    }
    onPress = ()=>{ 
        this.props.fetchRecipes(this.state.text)
        //console.log(this.props.itemList)
    }

    _keyExtractor = (item, index) => item.id; 

    _renderItem = ({item})=>{
        return(
            <View style={styles.row}>
                <Text>{item.title}</Text>
                <Image
                    source={{uri: item.thumbnail}}
                    style={{width: 400, height: 300}}
                />
            </View>
        )
    }

    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TextInput  
                        style={styles.input}
                        onChangeText={text=>this.setState({text})}
                    />
                    <Button title="search" style={styles.button} onPress={this.onPress} />
                </View>
                <FlatList
                    data={this.props.itemList.item}
                    keyExtractor={this._keyExtractor}
                    
                    renderItem={this._renderItem}
                />

            </View>
        )
    }
}


function mapStateToProps(state) {
  return {
    RecipeCount: state.RecipeCount,
    itemList:state.items
  };
}

export default connect(mapStateToProps)(Home)