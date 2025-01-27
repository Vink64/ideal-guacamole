import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack/> // Esconde o cabeçalho globalmente: screenOptions={{ headerShown: false }}
  );
}
