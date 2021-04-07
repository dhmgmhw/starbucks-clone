import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label, Text } from 'native-base';

export default function Loading({ title, type, setFunc, error }) {
  return (
    <>
      <Item floatingLabel last>
        <Label style={styles.label}>{title}</Label>
        <Input
          secureTextEntry={type == 'password' ? true : false}
          onChangeText={(text) => {
            setFunc(text);
          }}
        />
      </Item>
      <Item style={{ borderColor: 'transparent' }}>
        <Text>{error}</Text>
      </Item>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
});
