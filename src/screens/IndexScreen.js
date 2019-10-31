import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {/* BlogContext */ Context} from '../context/BlogContext';
//import {/* BlogContext */ Context as MyContext} from '../context/BlogContext';


const IndexScreen = () => {
    const { /* data */ state, addBlogPost} = useContext(/* BlogContext */Context);

    return <View>
        <Text>Index screen</Text>
        <Button onPress={addBlogPost} title="Add Post"/>
        <FlatList 
            data={/* data */ state}
            keyExtractor={blogPost=>blogPost.title}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>;
            }}
        />
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;