import { BalanceCard } from "./BalanceCard";
import { Text, View } from "react-native";
import { ScreenLayuout } from "./ScreenLayout";
import { AddAssets } from "./Icons";
import { FondoImage } from "./FondoImage";
import { Header } from "./Header";

export function Main() {
  return (
    <ScreenLayuout>
      <FondoImage />
      <Header />
      <BalanceCard />
      <View className="flex-row justify-between">
        <View></View>
      </View>
      <View className="flex-1">
        <Text className="px-11 justify-center items-center text-2xl">
          Ultimos movimientos
        </Text>
      </View>
      <View>
        <AddAssets />
      </View>
    </ScreenLayuout>
  );
}
