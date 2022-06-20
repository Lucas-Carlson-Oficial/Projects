import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
//import { AiOutlineCamera } from "react-icons/ai";

export default function Home() {
    // const { user } = props.navigation.state.params;

    // const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     console.disableYellowBox = true;
    //     api.updateMessages((msg) => {
    //         setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
    //     });
    // }, []);

    // const onSend = async (msgs) => {
    //     msgs.forEach((msg) => {
    //         const { text, user } = msg;
    //         const message = { text, user, createdAt: new Date().getTime() };
    //         api.saveMessage(message);
    //     });
    // };
    const onSend = async (msgs) => {
        msgs.forEach((msg) => {
            const { text } = msg;
            const message = { text, createdAt: new Date().getTime() };
            // CreateAnimatedFlatListTest1(message);
            // api.saveMessage(message);
        });
    };
    // function CreateAnimatedFlatListTest1(message) {
    //     const renderItem = useCallback(
    //       ({ item, index }: { item: Item[]; index: number }) => {
    //         if (Math.random()) {
    //           return null;
    //         }
    //         return <View style={{ width: 100 }}></View>;
    //       },
    //       []
    //     );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.statusBar}>
            </View>
            <View style={styles.container}>
                <View style={styles.messagePanel}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View>
                <View style={styles.fixed}>
                    <View style={styles.imageMessage}>
                        <View style={styles.inputLeft}>
                            <View style={styles.buttonImage}>
                                {/* APAGAR ISSO */}
                                {/* <AiOutlineCamera /> */}
                                <Text style={styles.buttonText}>X</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputMessage}>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            //value={number}
                            placeholder="Digite alguma coisa..."
                            keyboardType="default"
                            multiline={true}

                            // messages={messages} user={user}
                            onSend={onSend}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(230, 230, 230)',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    // StatusBar.currentHeight
    statusBar: {
        height: 30,
        width: '100%',
        backgroundColor: 'cyan',
    },
    messagePanel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    fixed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 75,
    },
    inputMessage: {
        width: '82%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageMessage: {
        width: '13%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,

        width: '100%',
        height: '100%',
        borderColor: 'rgb(128, 128, 128)',
        backgroundColor: 'rgb(245, 245, 245)',

        opacity: 0.9,
        paddingLeft: 10,
    },
    inputLeft: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,

        width: '100%',
        height: '100%',
        borderColor: 'rgb(128, 128, 128)',
        backgroundColor: 'rgb(245, 245, 245)',

        opacity: 0.9,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImage: {
        backgroundColor: 'rgb(33, 150, 243)',
        width: '100%',
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    //APAGAR ISSO
    buttonText: {
        color: '#fff',
    }
});
