import React, {useState,useEffect} from "react";
import { FlatList, StyleSheet, View} from "react-native";
import SearchGoods from "./SearchGoods";
import GoodsItem from "./GoodsItem";

const Home = ({navigation}) => {
    const [goods,setGoods] = useState([]);
    const fetchText = async () => {
            try {
                const response = await fetch('https://bsa-marketplace.azurewebsites.net/api/Products',
                    {
                        method: "GET",
                        headers: {
                            'accept': 'text/plain'
                        }
                    })
                if (!response.ok) {
                    throw new Error("Wrong url!");
                }
                return await response.json();
            } catch (error) {
                 console.log(error.message);
            }
    }
    const getItemId = (id) => {
        console.log(id)
    }
    useEffect(()=>{
        const data = fetchText();
        data.then(d=>setGoods(d));
    },[]);
    return (
        <View style={styles.home}>
            <SearchGoods fetchText={fetchText}/>

                <View style={styles.c}>
                    <FlatList
                        data={goods}
                        renderItem={({ item }) => {
                            return(
                                <View >
                                     {goods.map((item, key) =>
                                    {
                                        return(
                                            <GoodsItem item={item}
                                                       getItemId={()=>getItemId(item.id)} />
                                        )
                                    })}
                                </View>
                            )
                        } }
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