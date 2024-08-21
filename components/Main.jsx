import { Logo } from "./Logo";
import { BalanceCard } from "./BalanceCard";
import { Text, View } from "react-native";
import { ScreenLayuout } from "./ScreenLayout";

export function Main() {
  return (
    <ScreenLayuout>
      <Logo />
      <BalanceCard />
      <Text className="text-2xl">Prueba con Tailwindcss</Text>
    </ScreenLayuout>
  );
}
