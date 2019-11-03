import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = ({navigation}) => {
    return <View>
        <Text>
            Edit Screen {navigation.getParam('id')}
        </Text>
    </View>
}

const style = StyleSheet.create({});

export default EditScreen;