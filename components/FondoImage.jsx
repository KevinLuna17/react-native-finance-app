import { Image, View } from "react-native";

const fondo = require("../assets/wallpaper.jpg");

export function FondoImage() {
  return (
    <View className="flex-1">
      <Image
        source={fondo}
        style={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="h-96 w-full absolute"
      />
    </View>
  );
}
