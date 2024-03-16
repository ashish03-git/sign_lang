import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
export interface RegistrationProps {
  name: string;
  email: string;
  password: string;
}
export interface LoginProps {
  email: string;
  password: string;
}
const db = firebase.firestore();
export const registerUser = async (details: RegistrationProps) => {
  try {
    const signUpStatus = await auth().createUserWithEmailAndPassword(
      details.email,
      details.password,
    );

    if (signUpStatus) {
      const id = signUpStatus.user.uid;
      let userInfo = {
        ...details,
        id: id,
      };
      await createUserInFirestore(id, userInfo);
    }
    return true;
  } catch (error: any) {
    const seprateError: string = error;

    // Define a regular expression pattern to extract the message
    const pattern = /\[(.*?)\]\s(.*?)$/;

    // Use RegExp.prototype.exec() to find the pattern in the error message
    const match = pattern.exec(seprateError);

    if (match) {
      // Extract the error code and message
      const errorCode = match[1];
      const message = match[2];

      console.log('Error code:', errorCode);
      console.log('Message:', message);
      Alert.alert('Registratin Failed', message, [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
      return false;
    } else {
      console.log('No match found.');
      return false;
    }
  }
};

const createUserInFirestore = async (
  uid: string,
  details: RegistrationProps,
) => {
  await db
    .collection('users')
    .doc(uid)
    .set(details)
    .then(resp => {
      Alert.alert('Success', 'user registered successfully', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    })
    .catch(err => console.log('failed to create user'));
};

export const loginUser = async (details: LoginProps) => {
  try {
    const userInfo = await auth().signInWithEmailAndPassword(
      details.email,
      details.password,
    );
    if (userInfo.user.uid) {
      return true;
    }
  } catch (error) {
    console.log('failed to login >>>>>', error);
    return false;
  }
};
