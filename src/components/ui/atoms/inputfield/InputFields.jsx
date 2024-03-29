
import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../constants/color";
import { Fonts } from "../../../../constants/fonts";

const Inputfields = ({ placeholder, color, type, onchange, value, label}) => {
  const [isActive, setIsActive] = useState(false);
  // const OnChange = (e) => {
  //   let value = e.target.value;
  //   setValue(value);
  // };
  const onfocus = () => {
    setFocus();
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        style={[styles.input, { borderColor: isActive ? colors.Purple : "transparent" }]}
        value={value}
        placeholder={placeholder}
        onChangeText={onchange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor={colors.textGrey}
        selectionColor={colors.grey}
        textContentType={type}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        inputAccessoryViewID={label}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Inputfields;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "transparent",
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    color: colors.grey,
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    width: "100%"
  },
  placeholder: {
    fontSize: 14,
    color: colors.grey,
    fontFamily: Fonts.MonsteratBold
  },
});
