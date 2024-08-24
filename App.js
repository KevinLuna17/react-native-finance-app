import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { ScreenLayuout } from "./components/ScreenLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenLayuout>
        <StatusBar style="auto" />
        <Main />
      </ScreenLayuout>
    </SafeAreaProvider>
  );
}
