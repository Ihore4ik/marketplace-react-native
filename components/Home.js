import React, {useState, useEffect} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import SearchGoods from "./SearchGoods";
import GoodsItem from "./GoodsItem";

const Home = ({navigation}) => {
    const [goods, setGoods] = useState([]);
    const fetchText = () => {
        return fetch('https://bsa-marketplace.azurewebsites.net/api/Products',
            {
                method: "GET",
                headers: {
                    'accept': 'text/plain'
                }
            })
    }
    const getItemId = (id) => {
        navigation.navigate('ItemInfo', {id})
    }
    useEffect(() => {
        fetchText()
            .then(response => response.json())
            .then(data => setGoods(data))
            .catch(error => {
                console.log('Error : ' + error)
            });
    }, []);
    return (
        <View style={styles.home}>
            <SearchGoods fetchText={fetchText}/>

            <View style={styles.c}>
                <FlatList
                    data={goods}
                    renderItem={({}) => {
                        return (
                            <View>
                                {goods.map((item,key) => {
                                    return (
                                        <GoodsItem item={item}
                                                   getItemId={() => getItemId(item.id)}/>
                                    )
                                })}
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    home: {
        padding: 5,
        margin: 5,
        position: "relative",
        alignItems: "center",
        justifyContent: "center"
    },
    c: {
        marginTop: 50
    }
})

export default Home;