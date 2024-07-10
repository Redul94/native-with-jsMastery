import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";

import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
// import { styled } from 'nativewind';

// const StyledView = styled(View)
// const StyledText = styled(Text)
export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text >Home</Text>
      <StatusBar  style="auto"/>
      <Link href="/profile" style={{color:"blue"}}> Go to Profile</Link>
    </View>
  );
}

