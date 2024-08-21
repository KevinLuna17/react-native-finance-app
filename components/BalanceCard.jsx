import { Text, View } from "react-native";

export function BalanceCard() {
  return (
    <View className="bg-sky-300">
      <Text className="text-2xl text-bold">Your wallet Balance</Text>
      <Text>$2000</Text>
      <Text>Balance</Text>
      <Text>History</Text>
    </View>
  );
}
