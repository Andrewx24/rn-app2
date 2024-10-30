import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

interface FormData {
 email: string;
 password: string;
}

export default function LoginForm() {
 const [formData, setFormData] = useState<FormData>({
   email: '',
   password: ''
 });

 const handleSubmit = () => {
   console.log(formData);
 };
 function clickHandler() {
    alert('Button clicked');
    }

 return (
   <View className="flex-1 justify-center bg-white p-8">
     <Text className="text-2xl font-bold mb-8 text-center">Login</Text>
     
     <View className="space-y-4">
       <View>
         <Text className="text-gray-600 mb-2">Email</Text>
         <TextInput 
           className="p-4 bg-gray-50 rounded-lg border border-gray-200"
           placeholder="Enter your email"
           value={formData.email}
           onChangeText={(text) => setFormData({...formData, email: text})}
         />
       </View>

       <View>
         <Text className="text-gray-600 mb-2">Password</Text>
         <TextInput
           className="p-4 bg-gray-50 rounded-lg border border-gray-200"
           placeholder="Enter your password" 
           secureTextEntry
           value={formData.password}
           onChangeText={(text) => setFormData({...formData, password: text})}
         />
       </View>

       <TouchableOpacity 
         className="bg-blue-500 p-4 rounded-lg mt-6"
         onPress={handleSubmit}
       >
         <Text   className="text-white text-center font-semibold text-lg">
           Sign In
         </Text>
       </TouchableOpacity>
     </View>
   </View>
 );
}