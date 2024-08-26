import { Stack } from "expo-router";
import { View } from "react-native";
import { Header } from "../components/Header";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitle: "",
          header: () => <Header />,
        }}
      />
    </View>
  );
}
