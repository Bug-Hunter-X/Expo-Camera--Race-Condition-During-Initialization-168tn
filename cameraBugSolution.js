This solution utilizes the `onCameraReady` callback to ensure all camera operations happen after successful initialization.  This eliminates the race condition.

```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraReady, setCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  if (hasPermission === null) {
    return <View />; // Handle permission request
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        onCameraReady={handleCameraReady}
      >
        {cameraReady && (
          <View style={styles.buttonContainer}>
            {/* Camera controls here  */}
          </View>              
        )}
      </Camera>
    </View>
  );
};

export default CameraScreen;
```