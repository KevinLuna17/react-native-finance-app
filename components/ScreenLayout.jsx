import { View } from "react-native";

export function ScreenLayout({ children }) {
  return <View className="flex-1 bg-white pt-4 px-4">{children}</View>;
}
