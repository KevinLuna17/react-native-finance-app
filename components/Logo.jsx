import { Image } from "react-native";

const logo = require("../assets/logo.png");

export function Logo() {
  return <Image source={logo} style={{ width: 120, height: 100 }} />;
}
