import { Stack } from 'expo-router/stack';

const isAuth = false;

export default function AppLayout() {
  return (
    <Stack>
      {isAuth ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
