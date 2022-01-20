import React, {useEffect, useState} from "react";
import {
    Linking,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from "react-native";


const ItemInfo = ({navigation, route}) => {

    const [user, setUser] = useState(null);
    const fetchUser = () => {
        return fetch(`https://bsa-marketplace.azurewebsites.net/api/Products/${route.params.id}`,
            {
                method: "GET",
                headers: {
                    'accept': 'text/plain'
                }
            })
    }

    useEffect(() => {
        fetchUser()
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log('Error : ' + error))
    }, []);

    return (
        !user
            ? <ActivityIndicator size="large" style={{borderColor: "#aaa", alignItems: "center"}}/>
            : <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <TouchableOpacity>
                        <Button title="prev"/>
                    </TouchableOpacity>
                    <Image source={{uri: user.pictures[0] ? user.pictures[0].url : "v"}} style={styles.img}/>
                    <TouchableOpacity>
                        <Button title="next"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={{fontSize: 20}}>{user.title}</Text>
                    <Text style={{fontSize: 18}}>{user.price}$</Text>
                </View>
                <View style={{flex: 1}}>
                    <ScrollView>
                        <View style={{padding: 5}}>
                            <Text style={{fontSize: 15}}>{user.description}</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.seller}>
                    <Image source={{uri: user.seller.avatar}} style={styles.sellerImg}/>
                    <View style={styles.sellerInfo}>
                        <Text style={{fontSize: 20}}>{user.seller.name}</Text>
                        <Text style={{fontSize: 18}}>{user.seller.phoneNumber}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Button title="Call Seller" onPress={() => {
                            Linking.openURL(`tel:${user.seller.phoneNumber}`)
                        }}/>
                    </TouchableOpacity>
                </View>
            </View>


    )
}
const styles = StyleSheet.create({
    container: {
        padding: 25,
        height: "100%",
        justifyContent: "space-between"
    },
    imgContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "30%",
    },
    img: {
        flex: 3,
        width: "100%",
        height: "100%"
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    seller: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sellerImg: {
        width: 50,
        height: 50,
    },
    sellerInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    }
})
export default ItemInfo;

