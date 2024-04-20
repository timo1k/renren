import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
import { RNCamera } from "react-native-camera";

const Home = () => {
  takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
  return (
    <ScrollView>
      <Text>
        {"\n\n\n\n"}RenRen{"\n"}
      </Text>
      <View>
        <Text>Sign to voice app</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Text>{"\n\n\n\n"}</Text>
      <View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
