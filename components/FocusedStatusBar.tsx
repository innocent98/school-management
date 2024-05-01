import { StatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { JSX } from "react";
import { COLORS } from "../constants";

const FocusedStatusBar = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<StatusBar> & Readonly<StatusBarProps>) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle="light-content"
      translucent={false}
      backgroundColor={COLORS.light.primary}
      animated={true}
      {...props}
    />
  ) : null;
};

export default FocusedStatusBar;
