import {
    StyleSheet,
    ActivityIndicator,
    Button,
    Image,
    Text,
    View,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import * as ImagePicker from 'expo-image-picker';

function Gellery({ navigation }) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { width } = useWindowDimensions();
    const pickImage = async () => {
        setIsLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            allowsMultipleSelection: true,
            selectionLimit: 10,
            aspect: [4, 3],
            quality: 1,
        });
        setIsLoading(false);
        console.log(result);
        if (!result.cancelled) {
            setImages(result.uri);
            // ? [result.uri] : result.selected);
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            {images && (
                <Image
                    source={{ uri: images }}
                    style={{ width: 200, height: 200 }}
                />
            )}

            <Button style={{}} title='Pick images' onPress={pickImage} />
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

export { Gellery };
