import {ScrollView, Text, StyleSheet, TextInput, View, Pressable, useColorScheme,} from 'react-native';
import * as React from "react";
import {useState} from "react";

export default function LoginScreen({ navigation }) {
    const colorScheme = useColorScheme();

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showLogin, setShowLogin] = useState(true);


    return (
        <ScrollView style={[
            styles.container,
            colorScheme === 'light'
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#333333' },
        ]} keyboardDismissMode={"on-drag"}>
            <Text style={[
                styles.headerText,
                colorScheme === 'light'
                    ? { color: '#333333' }
                    : { color: '#EDEFEE' },
            ]}>Welcome to Little Lemon</Text>
            {showLogin ? (
                    <View>
                        <Text style={[
                            styles.regularText,
                            colorScheme === 'light'
                                ? { color: '#333333' }
                                : { color: '#EDEFEE' },
                        ]}>Login to continue </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="email"
                            value={email}
                            onChange={onChangeEmail}
                            secureTextEntry={true}
                            keyboardType={'email-address'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            value={password}
                            onChange={onChangePassword}
                            secureTextEntry={true}
                            keyboardType={'default'}
                        />
                        <Pressable style={styles.button} onPress={() => {
                            setShowLogin(prevState => !prevState)
                            navigation.navigate('Welcome')
                        }}>
                            <Text style={styles.buttonText}>
                                Log in
                            </Text>
                        </Pressable>
                    </View>)
                :
                (
                    <Text style={[
                        styles.headerText,
                        colorScheme === 'light'
                            ? { color: '#333333' }
                            : { color: '#EDEFEE' },
                    ]}>
                        You are logged in!
                    </Text>
                )
            }

        </ScrollView>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#b8b9b9',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});

