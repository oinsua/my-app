import React from 'react';
import { useFonts } from 'expo-font';
import {Text, View} from 'react-native';

const Font = () => {

    const [loaded] = useFonts({
        Roboto_italic: require('../../font/Roboto/Roboto-Italic.ttf'),
        Roboto_light: require('../../font/Roboto/Roboto-Light.ttf'),
        Roboto_medium: require('../../font/Roboto/Roboto-Medium.ttf'),
        Roboto_bold: require('../../font/Roboto/Roboto-Bold.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <View>
            <Text style={{ fontFamily: 'Roboto_italic', fontSize: 30 }}>Roboto_italic</Text>
            <Text style={{ fontFamily: 'Roboto_light', fontSize: 30 }}>Roboto_light</Text>
            <Text style={{ fontFamily: 'Roboto_medium', fontSize: 30 }}>Roboto_medium</Text>
            <Text style={{ fontFamily: 'Roboto_bold', fontSize: 30 }}>Roboto_bold</Text>
        </View>
    )
}

export default Font
