import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  BUTTON_COLOR,
  BUTTON_BACKGROUND_COLOR
} from "../common/theme";

const AppButton = ({
  onPress,
  title,
  color = BUTTON_COLOR,
  backgroundColor = BUTTON_BACKGROUND_COLOR,
  style = {}
}) => {
    const styles = StyleSheet.create({
      appButtonContainer: {
        elevation: 8,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        ...style
      },
      appButtonText: {
        fontSize: 18,
        color: color,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
    });

    return <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
};



  export default AppButton;