import LoginForm from "@/components/Form";
import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <LoginForm />
     <Link href="/explore" style={styles.link}>
     <Text>Go to Explore</Text>
        </Link>
      <Image 
        source={require('@/assets/images/icon.png')} 
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: '#FDE047', // Yellow-300 equivalent
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
});