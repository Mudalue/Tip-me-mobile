
import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../constants/color";

const Inputfields = ({ placeholder, color, type }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const OnChange = (e) => {
    let value = e.target.value;
    setValue(value);
  };
  const onfocus = () => {
    setFocus();
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        style={[styles.input, { borderColor: isActive ? colors.Purple : "transparent" }]}
        value={value}
        placeholder={placeholder}
        onChangeText={OnChange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor={colors.grey}
        selectionColor={colors.grey}
        textContentType={type}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </View>
  );
};

export default Inputfields;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "transparent",
    backgroundColor: "#dcdcdc",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    color: colors.grey,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.grey,
  },
});
