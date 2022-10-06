import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    Dimensions,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);

    const [users, setUsers] = useState(0);
    const [count, setcount] = useState('');
    const [message, setMessage] = useState('Hi there, how are you?');
    // const [isLoading, setLoading] = useState(true);
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    useEffect(() => {
        setTimeout(() => {
            axios
                .get('https://api.github.com/users')
                .then((response) => {
                    if (response.data) {
                        // console.log(response.data);
                        setUsers(response.data);
                        // console.log(response.data);
                    }
                })
                .catch((error) => {
                    Alert.alert('❌', 'connot find data ');
                })
                .finally(() => setLoading(false));
        }, 1000);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                setcount(item.login);
                navigation.navigate('About', {
                    image: item.avatar_url,
                    Name: item.login,
                    value: count,
                });
            }}
        >
            <Image
                source={{ uri: item.avatar_url }}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    resizeMode: 'contain',
                }}
            />

            <Text
                style={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'blue',
                }}
            >
                {item.login}
            </Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 32 }}>This is Home page</Text> */}
            {isLoading ? (
                <ActivityIndicator size={60} color={'white'} />
            ) : (
                <FlatList
                    // isMounted={false}
                    // keyExtractor={keyExtractor}
                    data={users}
                    // keyExtractor={(users) => users.id}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        margin: 15,

        // justifyContent:'center',
        // alignItems:'center',
        // padding:10,
        // borderWidth:1
    },
});

export { Home };
