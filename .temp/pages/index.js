import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import styles from './index.less';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"]
}))
class Index extends Taro.PureComponent {
  config = {
    navigationBarTitleText: '首页',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: true
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('didMount');
    const { dispatch } = this.props;
  }

  render() {
    const {
      loading,
      home: { carList, goodsList, shopBannerList, shopGoodsTypeList, shopInfo }
    } = this.props;

    return <View className={styles.page}>
        {[...new Array(3).keys()].map(item => <View key={item}>首页{item}</View>)}
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Index;