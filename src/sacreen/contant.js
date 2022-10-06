import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
function Contect({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32 }}>This is contact page</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 15 }}
                onPress={() => navigation.navigate('Cemera')}
            >
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    go open Camera
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'red', padding: 15, marginTop: 10 }}
                onPress={() => navigation.navigate('Gellery')}
            >
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    Pick image from gellery
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: 'yellow',
                    padding: 20,
                    marginTop: 10,
                    borderRadius: 15,
                }}
                onPress={() => navigation.navigate('Map')}
            >
                <Text
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    MAp View
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: 'yellow',
                    padding: 20,
                    marginTop: 10,
                    borderRadius: 15,
                }}
                onPress={() => navigation.navigate('RnCamera')}
            >
                <Text
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    RnCamera
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Contect };
