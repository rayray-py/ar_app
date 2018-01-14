// @flow
import React, { Component } from 'react';
import { Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Router,
  Stack,
  Scene,
  Tabs,
  Modal,
  Actions,
} from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import Auth from './screens/auth/auth.container';
import { MAIN_COLOR, TEXT_COLOR, APP_BACKGROUND_COLOR, GREY_ICON_COLOR } from './constants';

const plusIcon = require('../assets/plusIcon.png');

const styles = {
  routerStyle: {
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  navigationBarStyle: {
    backgroundColor: 'white',
  },
  navigationTitleStyle: {
    color: TEXT_COLOR,
  },
  tabBarStyle: {
    backgroundColor: 'white',
  },
  labelStyle: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  navBarIconStyle: {
    padding: 10,
  },
  centertabBarIconStyle: {
    position: 'absolute',
    bottom: 3,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
};

const TabBarIcon = (props) => {
  if (props.name === 'plusIcon') {
    return (
      <Image source={plusIcon} style={styles.centertabBarIconStyle} />
    );
  }
  return (
    <Icon
      name={props.name}
      type="ionicon"
      color={props.focused ? MAIN_COLOR : GREY_ICON_COLOR}
    />
  );
};

const onHandleBackAndroid = () => {
  Actions.pop();
  return true;
};

const renderTabs = () => (
  <Tabs
    key="tabBar"
    tabBarPosition="bottom"
    activeTintColor={MAIN_COLOR}
    inactiveTintColor={GREY_ICON_COLOR}
    labelStyle={styles.labelStyle}
    tabBarStyle={styles.tabBarStyle}
    swipeEnabled={false}
    backToInitial
  >
    <Scene
      key="home"
      component={Auth}
      title="Home"
      icon={({ focused }) => <TabBarIcon name="md-search" focused={focused} />}
    />
    <Scene
      key="postTab"
      icon={({ focused }) => <TabBarIcon name="plusIcon" focused={focused} />}
      tabBarLabel // This property accepts string values but set 'true' not to render tabBarLabel
      title="投稿"
      component={Auth}
    />
    <Scene
      key="myPage"
      component={Auth}
      icon={({ focused }) => <TabBarIcon name="md-person" focused={focused} />}
      title="マイページ"
      renderRightButton={
        <Icon
          name="settings"
          color={GREY_ICON_COLOR}
          containerStyle={styles.navBarIconStyle}
          onPress={() => Actions.settings()}
        />
      }
    />
  </Tabs>
);

const renderAuthStack = () => (
  <Stack key="auth" hideNavBar>
    <Scene key="auth" component={Auth} />
  </Stack>
);

const renderAppStack = (isLoggedIn) => (
  <Stack
    key="app"
    initial={isLoggedIn}
    hideNavBar
  >
    {renderTabs()}
  </Stack>
);


class RouterComponent extends Component {
  render() {
    const {
      isLoggedIn,
    } = this.props;

    return (
      <Router
        sceneStyle={styles.routerStyle}
        backAndroidHandler={() => onHandleBackAndroid()}
      >
        <Modal
          navBarButtonColor={MAIN_COLOR}
          navigationBarStyle={styles.navigationBarStyle}
          titleStyle={styles.navigationTitleStyle}
          hideNavBar
        >
          <Stack
            key="root"
            hideNavBar
            backTitle={null}
          >
            {renderAuthStack()}
            {renderAppStack(isLoggedIn)}
          </Stack>
        </Modal>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { authToken } = state.entities.currentUser;
  return { isLoggedIn: authToken };
};

export default connect(mapStateToProps)(RouterComponent);
