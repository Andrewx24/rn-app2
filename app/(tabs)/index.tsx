import LoginForm from "@/components/Form";
import { Text, View, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="p-4">
      <Text className="text-yellow-300">
        Edit app/index.tsx to edit this screen.
      </Text>
      
      <LoginForm />
      
      <Link 
        href="/explore" 
        className="py-2 my-2"
      >
        <Text className="text-blue-500 underline">
          Go to Explore
        </Text>
      </Link>
      
      <Image 
        source={require('@/assets/images/icon.png')} 
        className="w-[100px] h-[100px]"
        resizeMode="contain"
      />
    </View>
  );
}