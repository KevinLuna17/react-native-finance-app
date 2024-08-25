import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const profileImage = require("../assets/profile.jpg");

export function Header() {
  return (
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
    </View>
  );
}
