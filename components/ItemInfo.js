import React, {useEffect, useState} from "react";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const ItemInfo = ({navigation, route, id}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch( `http://localhost/${id}`)
            .then(response=>response.json())
            .then(data=>setUser(data))
            .catch(error=> console.log('Error : ' + error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <TouchableOpacity>
                    <Button title="prev"/>
                </TouchableOpacity>
                <Image source={{uri: ""}} style={styles.img}/>
                <TouchableOpacity>
                    <Button title="next"/>
                </TouchableOpacity>
            </View>
            <View style={style.titleContainer}>
                <Text>Title</Text>
                <Text>Price$</Text>
            </View>
            <View>
                <Text>Lorem ipsum set amet</Text>
            </View>
            <View style={styles.seller}>
                <Image source={{uri: ""}} style={styles.sellerImg}/>
                <View style={styles.sellerInfo}>
                    <Text>Seller Name</Text>
                    <Text>+380665733126</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Button title="Call Seller"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 25
    },
    imgContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "30%"
    },
    img: {
        flex: 3
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    seller: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sellerImg: {},
    sellerInfo: {},
})
export default ItemInfo;