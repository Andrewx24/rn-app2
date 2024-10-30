import LoginForm from "@/components/Form";
import { Text, View,Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="p-4 " >
    <Text className="text-yellow-300">Edit app/index.tsx to edit this screen.</Text>
    <LoginForm/>
    <Link href="users/1" className="btn">Go to user page</Link>
    <Image source={require('@/assets/images/icon.png')} />
  </View>
  );
}
