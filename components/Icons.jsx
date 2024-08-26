import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const AttachMoney = (props) => {
  return (
    <MaterialIcons name="attach-money" size={24} color="black" {...props} />
  );
};

export const AddAssets = (props) => {
  return <FontAwesome6 name="add" size={24} color="black" {...props} />;
};

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={24} color="black" {...props} />
);
