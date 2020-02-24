import Taro, { PureComponent } from '@tarojs/taro'
import { View, ScrollView, Input, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from './mine.less';
import { AtIcon, AtButton, AtModal } from 'taro-ui';
import { setToken, setUnionuser, getToken, getUnionuser, fileUrl } from '@/config/config';

@connect(({ mine, loading }) => ({
  mine,
}))
class Mine extends PureComponent {
  config = {
    navigationBarTitleText: '我的',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: false,
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  };
  
  render() {
    return (
      <View className={styles.page}>
        我的
      </View>
    )
  }
}
export default Mine
