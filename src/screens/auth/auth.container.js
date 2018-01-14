// @flow
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { signUp, signIn } from './actions';
import { MAIN_COLOR } from '../../constants';
import {
  LoginForm,
} from './components';

const { width } = Dimensions.get('window');

const styles = {
  containerStyle: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width * (2 / 5),
  },
  logo: {
    height: width / 4,
    width: width / 2,
  },
  textWithLogo: {
    color: MAIN_COLOR,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  tabBarTextStyle: {
    fontSize: 20,
  },
  tabBarUnderlineStyle: {
    backgroundColor: MAIN_COLOR,
    height: 3,
    width: width / 3,
    marginHorizontal: width / 12,
  },
  defaultTabBarStyle: {
    borderBottomWidth: 0,
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(email: string) {
    this.setState({ email });
  }

  onPasswordChange(password: string) {
    this.setState({ password });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollableTabView
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarInactiveTextColor={MAIN_COLOR}
          tabBarActiveTextColor={MAIN_COLOR}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          renderTabBar={() => <DefaultTabBar style={styles.defaultTabBarStyle} />}
          prerenderingSiblingsNumber={1}
        >
          <LoginForm
            tabLabel="ログイン"
            onPress={this.props.onSignIn}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            isLoading={this.props.isLoading}
            {...this.state}
          />
          <LoginForm
            tabLabel="サインアップ"
            onPress={this.props.onSignUp}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            isLoading={this.props.isLoading}
            {...this.state}
          />
        </ScrollableTabView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { errors, isLoading } = state.screens.auth;
  return { errors, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (email, password) => dispatch(signUp({ email, password })),
    onSignIn: (email, password) => dispatch(signIn({ email, password })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
