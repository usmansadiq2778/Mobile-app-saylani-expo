import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                // initialRegion={{
                //     latitude: 31.2908052,
                //     longitude: 73.0236736,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}
            >
                <Marker
                    coordinate={{
                        latitude: location ? location.latitude : 31.2908052,
                        longitude: location ? location.longitude : 73.0286576,
                    }}
                    // image={{ uri: 'custom_pin' }}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
