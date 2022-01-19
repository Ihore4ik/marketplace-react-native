import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";


const GoodsItem = ({item, navigation, route, getItemId}) => {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={{
                uri: item.picture,
            }}/>
            <View style={styles.info}>
                <Text style={styles.title} onPress={getItemId}>{item.title}</Text>
                <Text style={styles.desc} numberOfLines={5}>{item.description}</Text>
            </View>
            <View style={styles.price}>
                <Text>
                    {item.price}$
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        borderColor: "grey",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 5,
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        width: "96%",
    },
    img: {
        width: 80,
        height: 80
    },
    info: {
        width: "60%",
        marginLeft: 10

    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    desc: {
        fontSize: 15
    },
    price: {
        alignSelf: "flex-start"
    }
})
export default GoodsItem;