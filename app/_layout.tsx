import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'

import { Stack } from "expo-router";
import "../app/global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
    <Stack>
 
      <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
    </Stack>
    </ClerkLoaded>
    </ClerkProvider>
  );
}
