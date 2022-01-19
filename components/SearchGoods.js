import React, { useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const SearchGoods = ({fetchText}) => {
    const [inputText, setInputText] = useState("");

    const onSubmit = (text) => {
        fetchText(text);
        setInputText("");
    }

    return (
        <View style={styles.formWrapper}>
            <TextInput style={styles.input}
                       onChangeText={text => setInputText(text)}
                       defaultValue={inputText}
            />
            <Button style={styles.btn} title="Find" onPress={(() => onSubmit(inputText))}/>
        </View>
    );
};

const styles = StyleSheet.create({
    formWrapper: {
        position: "absolute",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000",
        left: 0,
        top: 0,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fffff"

    },
    input: {
        width: "82%",
        borderColor: "#000",
        height: "100%",
        padding: 5,
        fontSize: 20
    },
    btn: {
        height: "100%",
        padding: 5,
        width: "10%",
        fontSize: 18
    }
});

export default SearchGoods;