import React, { useEffect, useState } from 'react';

import { RNCamera } from 'react-native-camera';

export default function RnCamera() {
    const [type, setType] = useState(RNCamera.Constants.Type.back);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const ref = useRef(null);
    useEffect(() => {
        (async () => {
            const { library } = await MediaLibrary.requestPermissionsAsync();
            const camerastatus = await RNCamera.requestCameraPermissionsAsync();
            if (camerastatus.status === 'granted') {
                setHasPermission(true);
            } else {
                setHasPermission(false);
            }

            // setHasPermission(camerastatus.status === 'granted');
        })();
    }, []);

    return (
        <RNCamera
            ref={(ref) => {
                setType(
                    type === RNCamera.Constants.Type.back
                        ? RNCamera.Constants.Type.front
                        : RNCamera.Constants.Type.back
                );
            }}
        />
    );
}
