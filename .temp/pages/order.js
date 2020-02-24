import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import styles from './order.less';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"]
}))
class Order extends Taro.PureComponent {
  config = {
    navigationBarTitleText: '订单',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: true
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  componentDidMount() {
    console.log('didMount');
    const { dispatch } = this.props;
  }

  render() {
    const { loading } = this.props;
    return <View className={styles.page}>
        订单
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
export default Order;