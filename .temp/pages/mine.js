import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import styles from './mine.less';

@connect(({ mine, loading }) => ({
  mine
}))
class Mine extends Taro.PureComponent {
  config = {
    navigationBarTitleText: '我的',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: false
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <View className={styles.page}>
        我的
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
export default Mine;