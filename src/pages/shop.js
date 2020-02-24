import Taro, { PureComponent } from '@tarojs/taro'
import { View, ScrollView, Input, Image, Button, Swiper, SwiperItem, } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { AtButton } from 'taro-ui'
import styles from './shop.less';
import numeral from 'numeral';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"],
}))
class Shop extends PureComponent {
  config = {
    navigationBarTitleText: '积分商城',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: false,
  };

  state = {
    countNum: 0
  }

  render() {
    return (
      <View className={styles.page}>
        商城
      </View>
    )
  }
}
export default Shop
