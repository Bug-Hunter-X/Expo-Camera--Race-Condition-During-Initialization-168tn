# Expo Camera Initialization Race Condition

This repository demonstrates a common, yet elusive bug encountered when using the Expo Camera API. The core issue is a race condition: the application attempts to access camera features before the camera has fully initialized.

This leads to unpredictable behavior, ranging from silent failures to application crashes.  The error manifests subtly, often masked by other, more visible errors, making diagnosis challenging.

## Reproducing the Issue

The `cameraBug.js` file contains code that attempts to access camera properties prematurely. Running this code will likely result in the error described above.

## Solution

The `cameraBugSolution.js` file provides a corrected version. The key change is to ensure all camera operations occur within the `onCameraReady` callback function of the `Camera` component. This guarantees the camera is fully initialized before attempting to access its properties or functionality.