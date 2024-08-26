import { Text, View } from "react-native";
import { ScreenLayout } from "./ScreenLayout";

export function Main() {
  return (
    <ScreenLayout>
      <View className="flex-1">
        <Text className="justify-center items-center text-2xl">
          Ultimos movimientos
        </Text>
      </View>
    </ScreenLayout>
  );
}
