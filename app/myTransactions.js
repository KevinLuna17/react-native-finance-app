import { SafeAreaView, Text } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { Stack } from "expo-router";

export default function MyTransaction() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "black",
          headerTitle: "My Transactions",
          header: () => {},
        }}
      />
      <SafeAreaView>
        <Text>My Transaction</Text>
      </SafeAreaView>
    </ScreenLayout>
  );
}
