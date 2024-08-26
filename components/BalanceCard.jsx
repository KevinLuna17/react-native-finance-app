import { Text, View } from "react-native";

export function BalanceCard() {
  return (
    <View className="flex justify-center items-center w-full mt-32 absolute">
      <View className="p-8 rounded-2xl bg-slate-200/10 w-80">
        <Text className="text-xl text-bold text-center">Total Balance</Text>
        <Text className="text-3xl text-bold font-bold text-center">
          $2,000.00
        </Text>
      </View>
    </View>
  );
}
