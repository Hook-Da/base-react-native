import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {state, addBlogPost } = useContext(Context);
    return <View>
        <Text style={style.label}>Title</Text>
        <TextInput 
            name="title" 
            value={title}
            style={style.input}
            onChangeText={text=>setTitle(text)}
            />
        <Text style={style.label}>Content</Text>
        <TextInput 
            style={style.input} 
            name="content"
            value={content}
            onChangeText={text=>setContent(text)}
            />
        <Button title="Add Blog Post" onPress={()=>addBlogPost(title,content,()=>{
            navigation.navigate('Index');
        })}/>
    </View>
}
const style = StyleSheet.create({
    label:{
        fontSize:18,
        margin:5
    },
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'#000',
        margin:5,
        padding:5,
        borderRadius:6
    }
});

export default CreateScreen;