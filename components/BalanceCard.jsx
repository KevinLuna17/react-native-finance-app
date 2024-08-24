import { Text, View } from "react-native";

export function BalanceCard() {
  return (
    <View className="flex justify-center items-center w-full mt-20 absolute">
      <View className="p-10 rounded-2xl bg-purple-500/30">
        <Text className="text-3xl text-bold">Your wallet Balance</Text>
        <Text className="text-2xl text-bold font-bold">$2000</Text>
        <Text className="text-lg">Available Balance</Text>
      </View>
    </View>
  );
}
