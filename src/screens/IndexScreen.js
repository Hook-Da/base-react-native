import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {/* BlogContext */ Context} from '../context/BlogContext';
//import {/* BlogContext */ Context as MyContext} from '../context/BlogContext';
import { Feather, AntDesign } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const { /* data */ state, addBlogPost, deleteBlogPost} = useContext(/* BlogContext */Context);
    return <View>
        <Text>Index screen</Text>
        <Button onPress={addBlogPost} title="Add Post"/>
        <FlatList 
            data={/* data */ state}
            keyExtractor={blogPost=>blogPost.title}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                            
                                <Text style={styles.title}>{item.title}</Text>
                            
                            <TouchableOpacity onPress={() => {
                                console.log('%c++', 'background:', item.id);
                                    deleteBlogPost(item.id);
                                
                            }
                                }>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View> 
                    </TouchableOpacity>                   
                        );
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {headerRight:(
        <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            <AntDesign name="plus" size={30}/>
        </TouchableOpacity>
    )}
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:'gray',
        paddingVertical:10,
        paddingHorizontal:5
    },
    title:{
        fontSize:20,
        flex:1
    },
    icon:{
        fontSize:24
    }
});

export default IndexScreen;