import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BalanceCard } from "./BalanceCard";
import { Link } from "expo-router";

const profileImage = require("../assets/profile.jpg");
const imageBackground = require("../assets/wallpaper.jpg");

export function Header() {
  return (
    <ImageBackground
      source={imageBackground}
      className="pt-12 h-96 w-full"
      imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
    >
      <View className="flex-row justify-between items-center px-5">
        <View className="flex-row justify-center items-center gap-1">
          <Image
            source={profileImage}
            style={{ width: 50, height: 50 }}
            className="rounded-full"
          />
          <View>
            <Text className="font-medium">Hi, Kevin</Text>
            <Text className="font-medium">Your Budget</Text>
          </View>
        </View>

        <Link asChild href="/myTransactions">
          <TouchableOpacity
            style={{
              borderColor: "#666",
              borderWidth: 1,
              padding: 8,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>My Transactions</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <BalanceCard />
    </ImageBackground>
  );
}
