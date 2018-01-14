// @flow
import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { MAIN_COLOR } from '../../../constants';

const styles = {
  containerStyle: {
    margin: 20,
    marginVertical: 10,
  },
  inputContainerStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 8,
    ...Platform.select({
      ios: {
        borderBottomColor: '#bdc6cf',
        borderBottomWidth: 1,
      },
    }),
  },
  inputStyle: {
    color: '#86939e',
    ...Platform.select({
      android: {
        minHeight: 46,
      },
      ios: {
        minHeight: 36,
      },
    }),
  },
  buttonContainerStyle: {
    marginVertical: 8,
  },
  disabledButton: {
    backgroundColor: '#ffb384',
  },
};

export const LoginForm = (props) => {
  const {
    email,
    password,
    isLoading,
    tabLabel,
    onPress,
    onEmailChange,
    onPasswordChange,
  } = props;

  const isEnabled = email.length > 0 && password.length > 0;
  let passwordInput;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="メールアドレス"
          onChangeText={(text: string) => onEmailChange(text)}
          value={email}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordInput.focus()}
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <TextInput
          style={styles.inputStyle}
          secureTextEntry
          placeholder="パスワード"
          value={password}
          onChangeText={(text: string) => onPasswordChange(text)}
          ref={input => passwordInput = input}
        />
      </View>
      <Button
        title={tabLabel}
        containerViewStyle={styles.buttonContainerStyle}
        backgroundColor={MAIN_COLOR}
        onPress={() => onPress(email, password)}
        borderWidth={1.3}
        loading={isLoading}
        disabled={!isEnabled || isLoading}
        disabledStyle={styles.disabledButton}
        raised
      />
    </View>
  );
};
