import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const AttachMoney = (props) => {
  return (
    <MaterialIcons name="attach-money" size={24} color="black" {...props} />
  );
};

export const AddAssets = (props) => {
  return <FontAwesome6 name="add" size={24} color="black" {...props} />;
};
