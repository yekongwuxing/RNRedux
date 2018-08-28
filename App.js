/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import TestText from './app/components/TestText';
import { connect } from 'react-redux'
import {changeText} from './app/redux/action/Action';
type Props = {};
class App extends Component<Props> {

  render() {
      // 通过 props 拿到保存的 onChangeText
    const { onChageText } = this.props;
    return (
      <View style={styles.container}>
          {/* 要改变组件的值*/}
        <TestText {...this.props}/>
          {/*按钮*/}
          <TouchableOpacity onPress={onChageText}>
              <Text>改变文字按钮</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
//获取 state 变化
const  mapStateToProps = (state) => {
  return{
    value:state.text,

  }
};
//发送行为
const mapDispatchToProps = (dispatch) => {
  return{
    onChageText:() => dispatch(changeText('外面传值')),
  }
};

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(mapStateToProps,mapDispatchToProps)(App)