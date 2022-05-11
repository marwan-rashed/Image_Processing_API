import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions.js'

const AddTask = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    return(
        <View style = {{
            width: '100%', height: '100%',
            justifyContent: 'center', alignItems: 'center',
        }}>
            {/* Input Form */}
            <View style = {{
                width: '90%', height: '60%',
                borderWidth: 3, borderRadius: 10, borderColor: '#54AEFF',
                justifyContent: 'center', alignItems: 'center',
            }}>
                <TextInput
                    placeholder = "Title"
                    value = { title }
                    onChangeText = {(value) => setTitle(value)}
                    style = {{
                        width: '90%', height: 50, marginBottom: 20,
                        borderColor: '#54AEFF', borderWidth: 2, borderRadius: 5
                    }}
                />
                <TextInput
                    placeholder = "Description"
                    value = { description }
                    onChangeText = {(value) => setDescription(value)}
                    style = {{
                        width: '90%', height: 50, marginBottom: 20,
                        borderColor: '#54AEFF', borderWidth: 2, borderRadius: 5
                    }}
                />
                <TouchableOpacity
                    onPress = {() => {
                        if(title) {
                            dispatch(addTask(title, description));
                            navigation.goBack();
                        }
                        else {
                            Alert.alert(
                                'Alert',
                                'Title is required'
                            );
                        }
                    }}
                    style = {{
                        width: '40%', height: 50,
                        backgroundColor: '#54AEFF', borderRadius: 5,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <Text style = {{
                        color: 'white', fontSize: 20
                    }}>Add Task</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddTask;