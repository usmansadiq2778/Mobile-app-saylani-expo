import { Camera, CameraType } from 'expo-camera';
// import { RNCamera } from 'react-native-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function Cemera({ navigation }) {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setimage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [capturedImage, setCapturedImage] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    // let camera: Camera;
    useEffect(() => {
        (async () => {
            const { library } = await MediaLibrary.requestPermissionsAsync();
            const camerastatus = await Camera.requestCameraPermissionsAsync();
            if (camerastatus.status === 'granted') {
                setHasPermission(true);
            } else {
                setHasPermission(false);
            }

            // setHasPermission(camerastatus.status === 'granted');
        })();
    }, []);

    function toggleCameraType() {
        // setType((current) =>
        //     current === CameraType.back ? CameraType.front : CameraType.back
        // );
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }
    const takepicture = async () => {
        // if (!camera) return;
        // const options = { quality: 1, base64: true };
        const photo = await ref.current.takePictureAsync();
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        console.log('photo', photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text> No camera Access</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera
                ref={ref}
                // ref={(r) => {
                //     camera = r;
                // }}
                flashMode={Camera.Constants.FlashMode.on}
                style={styles.camera}
                type={type}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraType}
                    >
                        <Text style={styles.text}>Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,

                            paddingHorizontal: 20,
                            alignSelf: 'flex-end',
                            justifyContent: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => takepicture()}
                    >
                        <Text style={styles.text}>Take selfe </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        // fontSize: 2
        marginBottom: 10,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        // backgroundColor: 'blue',
    },
});
