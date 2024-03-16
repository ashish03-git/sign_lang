// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
// } from 'react-native-vision-camera';
// import {requestCameraPermission} from '../../Permission/permission';

// const CameraRecognitionScreen = () => {
//   const cameraRef = useRef<Camera>(null);
//   const [gestureLabel, setGestureLabel] = useState('Unknown');
//   const [isCameraReady, setIsCameraReady] = useState(false);
//   const device = useCameraDevice('back', {
//     physicalDevices: [
//       'ultra-wide-angle-camera',
//       'wide-angle-camera',
//       'telephoto-camera',
//     ],
//   });

//   // useEffect(() => {
//   //   // Request camera permission when component mounts
//   //   const requestCameraPermission = async () => {
//   //     const granted = await useCameraPermission();
//   //     if (granted) {
//   //       setIsCameraReady(true);
//   //     } else {
//   //       setIsCameraReady(false);
//   //       // Handle permission denied scenario
//   //     }
//   //   };

//   //   requestCameraPermission();

//   //   return () => {
//   //     // Clean up any resources if needed
//   //   };
//   // }, []);

//   useEffect(() => {
//     getPermission();
//   }, []);

//   const getPermission = async () => {
//     let status = await requestCameraPermission();
//     if (status) {
//       setIsCameraReady(true);
//     } else {
//       setIsCameraReady(false);
//     }
//     // console.log(status);
//   };

//   // Function to handle capturing a photo
//   const capturePhoto = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePhoto();
//         compareWithGestureImages(photo.base64);
//       } catch (error) {
//         console.error('Error capturing photo:', error);
//       }
//     }
//   };

//   // Function to compare captured image with gesture images
//   const compareWithGestureImages = capturedImageBase64 => {
//     // Implementation of image comparison
//     // This function remains unchanged from your original code
//   };

//   return (
//     <View style={styles.container}>
//       {isCameraReady && <Camera ref={cameraRef} device={device} style={styles.camera} />}
//       <TouchableOpacity
//         style={styles.captureButton}
//         onPress={capturePhoto}
//         disabled={!isCameraReady}>
//         <Text style={styles.captureButtonText}>Take Photo</Text>
//       </TouchableOpacity>
//       <View style={styles.labelContainer}>
//         <Text style={styles.label}>{gestureLabel}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   captureButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   captureButtonText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   labelContainer: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 24,
//     color: 'white',
//   },
// });

// export default CameraRecognitionScreen;

// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
//   CameraDevice,
// } from 'react-native-vision-camera';
// import {requestCameraPermission} from '../../Permission/permission';
// import RNFS from 'react-native-fs';

// const CameraRecognitionScreen = () => {
//   const cameraRef = useRef<Camera>(null);
//   const [gestureLabel, setGestureLabel] = useState('Unknown');
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   const gestureImages = [
//     {lable: 'appa', image: require('../../sign images/appa.jpg')},
//     {lable: 'class', image: require('../../sign images/class.jpg')},
//     {lable: 'exam', image: require('../../sign images/exam.jpg')},
//   ];
//   // Function to convert image to Base64
//   async function imageToBase64(imagePath) {
//     try {
//       // Read the image file
//       const imageBuffer = await RNFS.readFile(imagePath, 'base64');
//       return imageBuffer;
//     } catch (error) {
//       console.error('Error reading image:', error);
//       return null;
//     }
//   }

//   // Convert each image in gestureImages to Base64 and store it back in the array
//   async function convertImagesToBase64() {
//     for (let i = 0; i < gestureImages.length; i++) {
//       const base64Image = await imageToBase64(gestureImages[i].imagePath);
//       gestureImages[i].base64Image = base64Image;
//     }
//   }

//   // Call the function to convert images
//   convertImagesToBase64()
//     .then(() => {
//       console.log(gestureImages);
//     })
//     .catch(error => {
//       console.error('Error converting images:', error);
//     });

//   const device = useCameraDevice('back', {
//     physicalDevices: [
//       'ultra-wide-angle-camera',
//       'wide-angle-camera',
//       'telephoto-camera',
//     ],
//   });

//   useEffect(() => {
//     getPermission();
//   }, []);

//   const getPermission = async () => {
//     let status = await requestCameraPermission();
//     if (status) {
//       setIsCameraReady(true);
//     } else {
//       setIsCameraReady(false);
//     }
//   };

//   // Function to handle capturing a photo
//   const capturePhoto = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePhoto();
//         const base64Image = await convertToBase64(photo.path);
//         compareWithGestureImages(base64Image);
//       } catch (error) {
//         console.error('Error capturing photo:', error);
//       }
//     }
//   };

//   const convertToBase64 = async imageUri => {
//     try {
//       const imageData = await RNFS.readFile(imageUri, 'base64');
//       return imageData;
//     } catch (error) {
//       console.error('Error converting image to base64:', error);
//     }
//   };

//   // Function to compare captured image with gesture images
//   const compareWithGestureImages = capturedImageBase64 => {
//     let maxMatchingPixels = -1;
//     let recognizedGestureLabel = 'Unknown';
//     for (const gesture of gestureImages) {
//       const matchingPixels = calculateMatchingPixels(
//         capturedImageBase64,
//         gesture.image,
//       );
//       if (matchingPixels > maxMatchingPixels) {
//         maxMatchingPixels = matchingPixels;
//         recognizedGestureLabel = gesture.lable;
//       }
//     }
//     setGestureLabel(recognizedGestureLabel);
//   };
//   const calculateMatchingPixels = (image1, image2Path) => {
//     let matchingPixelCount = 0;
//     // const image2 = require(image2Path); // Load the gesture image
//     const image1Array = image1.split(',');
//     // const image2Array = image2.split(',');
//     for (let i = 0; i < image1Array.length; i++) {
//       if (image1Array[i] === image2Array[i]) {
//         matchingPixelCount++;
//       }
//     }
//     return matchingPixelCount;
//   };

//   return (
//     <View style={styles.container}>
//       {isCameraReady && device && (
//         <Camera
//           ref={cameraRef}
//           device={device}
//           style={styles.camera}
//           isActive={true}
//           photo={true}
//         />
//       )}
//       <TouchableOpacity
//         style={styles.captureButton}
//         onPress={capturePhoto}
//         disabled={!isCameraReady}>
//         <Text style={styles.captureButtonText}>Take Photo</Text>
//       </TouchableOpacity>
//       <View style={styles.labelContainer}>
//         <Text style={styles.label}>{gestureLabel}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   captureButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   captureButtonText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   labelContainer: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 24,
//     color: 'white',
//   },
// });

// export default CameraRecognitionScreen;

// 3

// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
// } from 'react-native-vision-camera';
// import {requestCameraPermission} from '../../Permission/permission';
// import RNFS from 'react-native-fs';

// const CameraRecognitionScreen = () => {
//   const cameraRef = useRef<Camera>(null);
//   const [gestureLabel, setGestureLabel] = useState('Unknown');
//   const [isCameraReady, setIsCameraReady] = useState(false);
//   const [gestureImages, setGestureImages] = useState<Gesture[]>([]);

//   const device = useCameraDevice('back', {
//     physicalDevices: [
//       'ultra-wide-angle-camera',
//       'wide-angle-camera',
//       'telephoto-camera',
//     ],
//   });

//   useEffect(() => {
//     initializeCamera();
//     loadGestureImages();
//     getPermission();
//   }, []);

//   const initializeCamera = async () => {
//     try {
//       // Request camera permission
//       const permissionGranted = await requestCameraPermission();
//       if (!permissionGranted) {
//         // Handle permission denied scenario
//         console.error('Camera permission denied');
//         return;
//       }

//       // Check if camera device is available
//       if (!device) {
//         console.error('No camera device available');
//         return;
//       }

//       setIsCameraReady(true);
//     } catch (error) {
//       console.error('Error initializing camera:', error);
//     }
//   };

//   // const capturePhoto = async () => {
//   //   if (!isCameraReady) {
//   //     console.error('Camera is not ready');
//   //     return;
//   //   }

//   //   if (!cameraRef.current) {
//   //     console.error('Camera reference is not available');
//   //     return;
//   //   }

//   //   try {
//   //     const photo = await cameraRef.current.takePhoto();
//   //     const base64Image = await convertToBase64(photo.path);
//   //     compareWithGestureImages(base64Image);
//   //   } catch (error) {
//   //     console.error('Error capturing photo:', error);
//   //   }
//   // };

//   const loadGestureImages = async () => {
//     // Load gesture images and convert to base64
//     const images = [
//       {label: 'appa', path: require('../../signImages/appa.jpg')},
//       {label: 'class', path: require('../../signImages/exam.jpg')},
//       {label: 'exam', path: require('../../signImages/class.jpg')},
//       // Add more gesture images with paths and labels
//     ];

//     const imagesWithBase64 = await Promise.all(
//       images.map(async image => {
//         const base64Image = await convertToBase64(image.path);
//         return {label: image.label, base64Image};
//       }),
//     );

//     setGestureImages(imagesWithBase64);
//   };

//   const getPermission = async () => {
//     let status = await requestCameraPermission();
//     if (typeof status === 'boolean') {
//       setIsCameraReady(status);
//     }
//   };

//   const capturePhoto = async () => {
//     if (!isCameraReady) {
//       console.error('Camera is not ready');
//       return;
//     }

//     if (!cameraRef.current) {
//       console.error('Camera reference is not available');
//       return;
//     }

//     try {
//       const photo = await cameraRef.current.takePhoto();
//       const base64Image = await convertToBase64(photo.path);

//       // Check if base64Image is null
//       if (!base64Image) {
//         console.error('Error converting image to base64: Base64 data is null');
//         return;
//       }

//       compareWithGestureImages(base64Image);
//     } catch (error) {
//       console.error('Error capturing photo:', error);
//     }
//   };

//   const convertToBase64 = async imagePath => {
//     try {
//       const imageBuffer = await RNFS.readFile(imagePath, 'base64');
//       return imageBuffer;
//     } catch (error) {
//       console.error('Error reading image:', error);
//       return null;
//     }
//   };

//   const compareWithGestureImages = capturedImageBase64 => {
//     let maxMatchingPixels = -1;
//     let recognizedGestureLabel = 'Unknown';
//     for (const gesture of gestureImages) {
//       const matchingPixels = calculateMatchingPixels(
//         capturedImageBase64,
//         gesture.base64Image,
//       );
//       if (matchingPixels > maxMatchingPixels) {
//         maxMatchingPixels = matchingPixels;
//         recognizedGestureLabel = gesture.label;
//       }
//     }
//     setGestureLabel(recognizedGestureLabel);
//   };

//   const calculateMatchingPixels = (image1, image2) => {
//     // Implement image comparison logic here
//     // This could be pixel-wise comparison or using image recognition libraries
//     // For simplicity, let's just compare lengths of base64 strings
//     return Math.min(image1.length, image2.length);
//   };

//   return (
//     <View style={styles.container}>
//       {isCameraReady && (
//         <Camera
//           ref={cameraRef}
//           style={styles.camera}
//           device={
//             device
//               ? device
//               : useCameraDevice('back', {
//                   physicalDevices: [
//                     'ultra-wide-angle-camera',
//                     'wide-angle-camera',
//                     'telephoto-camera',
//                   ],
//                 })
//           }
//           isActive={true}
//           photo={true}
//         />
//       )}
//       <TouchableOpacity
//         style={styles.captureButton}
//         onPress={capturePhoto}
//         disabled={!isCameraReady}>
//         <Text style={styles.captureButtonText}>Take Photo</Text>
//       </TouchableOpacity>
//       <View style={styles.labelContainer}>
//         <Text style={styles.label}>{gestureLabel}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   captureButton: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   captureButtonText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   labelContainer: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 24,
//     color: 'white',
//   },
// });

// export default CameraRecognitionScreen;

import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {requestCameraPermission} from '../../Permission/permission';
import RNFS from 'react-native-fs';
type Gesture = {
  label: string;
  base64Image: string | null;
  path?: string; // Make path property optional
};

const CameraRecognitionScreen = () => {
  const cameraRef = useRef<Camera>(null);
  const [gestureLabel, setGestureLabel] = useState('Unknown');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [gestureImages, setGestureImages] = useState<Gesture[]>([]); // State to hold gesture images

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  useEffect(() => {
    initializeCamera();
    loadGestureImages(); // Load gesture images on component mount
    getPermission();
  }, []);

  const initializeCamera = async () => {
    try {
      const permissionGranted = await requestCameraPermission();
      if (!permissionGranted || !device) {
        setIsCameraReady(false);
        console.error('Failed to initialize camera');
        return;
      }
      setIsCameraReady(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };

  const loadGestureImages = async () => {
    try {
      // Load gesture images and convert them to base64
      const images = [
        {
          label: 'appa',
          path: 'D:/Srn Project/Sign Dataset/Sign Dataset/Appa/appa.jpg',
        }, // Replace 'path_to_your_appa_image' with the actual path
        {
          label: 'class',
          path: '"D:/Srn Project/Sign Dataset/Sign Dataset/Class/class.jpg"',
        }, // Replace 'path_to_your_class_image' with the actual path
        {
          label: 'exam',
          path: '"D:/Srn Project/Sign Dataset/Sign Dataset/Exam/exam.jpg"',
        }, // Replace 'path_to_your_exam_image' with the actual path
        // Add more gesture images with paths and labels
      ];

      const imagesWithBase64 = await Promise.all(
        images.map(async image => {
          const base64Image = await convertToBase64(image.path);
          return {label: image.label, base64Image};
        }),
      );

      setGestureImages(imagesWithBase64);
    } catch (error) {
      console.error('Error loading gesture images:', error);
    }
  };

  const getPermission = async () => {
    let status = await requestCameraPermission();
    if (typeof status === 'boolean') {
      setIsCameraReady(status);
    }
  };

  const capturePhoto = async () => {
    if (!isCameraReady || !cameraRef.current) {
      console.error('Camera is not ready or camera reference is not available');
      return;
    }

    try {
      const photo = await cameraRef.current.takePhoto();
      const base64Image = await convertToBase64(photo.path);

      // Check if base64Image is null
      if (!base64Image) {
        console.error('Error converting image to base64: Base64 data is null');
        return;
      }

      compareWithGestureImages(base64Image);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  const convertToBase64 = async imagePath => {
    try {
      const imageBuffer = await RNFS.readFile(imagePath, 'base64');
      return imageBuffer;
    } catch (error) {
      console.error('Error reading image:', error);
      return null;
    }
  };

  const compareWithGestureImages = capturedImageBase64 => {
    let maxMatchingPixels = -1;
    let recognizedGestureLabel = 'Unknown';
    for (const gesture of gestureImages) {
      const matchingPixels = calculateMatchingPixels(
        capturedImageBase64,
        'data:image/jpeg;base64,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',
        // gesture.base64Image
      );
      if (matchingPixels > maxMatchingPixels) {
        maxMatchingPixels = matchingPixels;
        recognizedGestureLabel = gesture.label;
      }
    }
    setGestureLabel(recognizedGestureLabel);
  };

  const calculateMatchingPixels = (image1, image2) => {
    const maxLength = Math.max(image1.length, image2.length);
    let matchingPixels = 0;

    // Loop through each character in the base64 strings and count matching pixels
    for (let i = 0; i < maxLength; i++) {
      // Get the character code at the current position for both images
      const charCode1 = i < image1.length ? image1.charCodeAt(i) : 0;
      const charCode2 = i < image2.length ? image2.charCodeAt(i) : 0;

      // If the character codes are equal, increment matching pixels count
      if (charCode1 === charCode2) {
        matchingPixels++;
      }
    }

    // Calculate the similarity as a percentage
    const similarity = (matchingPixels / maxLength) * 100;
    return similarity;
  };

  return (
    <View style={styles.container}>
      {isCameraReady && (
        <Camera
          ref={cameraRef}
          style={styles.camera}
          device={
            device
              ? device
              : useCameraDevice('back', {
                  physicalDevices: [
                    'ultra-wide-angle-camera',
                    'wide-angle-camera',
                    'telephoto-camera',
                  ],
                })
          }
          isActive={true}
          photo={true}
        />
      )}
      <TouchableOpacity
        style={styles.captureButton}
        onPress={capturePhoto}
        disabled={!isCameraReady}>
        <Text style={styles.captureButtonText}>Take Photo</Text>
      </TouchableOpacity>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{gestureLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  captureButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    color: 'white',
  },
});

export default CameraRecognitionScreen;
