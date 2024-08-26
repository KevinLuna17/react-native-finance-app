import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { ScreenLayout } from "./components/ScreenLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenLayout>
        <StatusBar style="auto" />
        <Main />
      </ScreenLayout>
    </SafeAreaProvider>
  );
}
