import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask, removeTask } from '../store/actions.js';

export default Tasks = ({ navigation }) => {
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    const dispatch = useDispatch();

    return(
        <View style = {{
            width: '100%', height: '100%',
            alignItems: 'center'
        }}>
            {/* Tasks */}
            <ScrollView
                style = {{
                    width: '100%', height: '100%',
                    margin: 10,
                }}
                contentContainerStyle = {{
                    alignItems: 'center'
                }}
            >
                {
                    tasks.map((task) => (
                        <View
                            key = {task.id}
                            style = {{
                                width: '90%', marginBottom: 10, backgroundColor: 'white',
                                borderWidth: 1, borderColor: '#54AEFF', borderRadius: 5,
                                flexDirection: 'row',
                                padding: 5
                            }}
                        >
                            {/* Task Details */}
                            <View style = {{
                                width: '75%'
                            }}>
                                <Text style = {{
                                    color: '#54AEFF', fontSize: 18, fontWeight: 'bold',
                                    marginBottom: 3,
                                }}>{task.title}</Text>
                                <Text style = {{
                                    color: 'black', fontSize: 15,
                                }}>{task.description}</Text>
                            </View>

                            {/* Buttons */}
                            <View style = {{
                                width: '25%',
                                justifyContent: 'center', alignItems: 'center',
                            }}>
                                {/* Complete Task */}
                                <TouchableOpacity
                                    onPress = {() => {
                                        dispatch(completeTask(task.id));
                                    }}
                                    style = {{
                                        width: '100%',
                                        justifyContent: 'center', alignItems: 'center',
                                        backgroundColor: task.completed ? 'gray' : 'green',
                                        borderRadius: 5, padding: 3, marginBottom: 3,
                                    }}
                                    disabled = { task.completed }
                                >
                                    <Text style = {{
                                        color: 'white'
                                    }}>{task.completed ? 'Completed' : 'Complete'}</Text>
                                </TouchableOpacity>
                                
                                {/* Delete Task */}
                                <TouchableOpacity
                                    onPress = {() => {
                                        dispatch(removeTask(task.id));
                                    }}
                                    style = {{
                                        width: '100%',
                                        justifyContent: 'center', alignItems: 'center',
                                        backgroundColor: 'red', borderRadius: 5,
                                        padding: 3,
                                    }}
                                >
                                    <Text style = {{
                                        color: 'white'
                                    }}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>

            {/* Add Float Button */}
            <TouchableOpacity 
                onPress = {() => navigation.navigate('Add Task')}
                style = {{
                    position: 'absolute', bottom: 30, right: 20,
                    width: 60, height: 60, borderRadius: 30,
                    backgroundColor: '#54AEFF',
                    elevation: 5,
                    justifyContent: 'center', alignItems: 'center',
                }}
            >
                <Text style = {{
                    color: 'white', fontSize: 35,
                }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}