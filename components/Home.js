import React, {useState, useEffect} from "react";
import { FlatList, StyleSheet, View} from "react-native";
import SearchGoods from "./SearchGoods";
import GoodsItem from "./GoodsItem";
const Home = ({navigation}) => {
    const [goods, setGoods] = useState([]);
    const fetchGoods = () => {
        fetch(`https://bsa-marketplace.azurewebsites.net/api/Products`,
        )
            .then(response => response.json())
            .then(data => setGoods(data))
            .catch(error => {
                console.log('Error : ' + error)
            })

    }
    const getItemId = (id) => {
        navigation.navigate('ItemInfo', {id})
    }
    const handleDelete = (id) => {
        const newGoods = goods.filter(el=>el.id !== id);
        setGoods(newGoods);
    }
    useEffect(() => {
        fetchGoods();
    }, []);
    return (
        <View style={styles.home}>
            <SearchGoods/>
            <View style={styles.c}>
                <FlatList
                    data={goods}
                    renderItem={({item}) => <GoodsItem item={item}
                                                       getItemId={()=>getItemId(item.id)}
                                                       handleDelete={()=>handleDelete(item.id)}
                    />}
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
    },
    loader: {
        marginVertical: 15,
        alignItems: "center"
    }
})

export default Home;