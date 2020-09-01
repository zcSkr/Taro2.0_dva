import Taro, { PureComponent } from '@tarojs/taro'
import { View, ScrollView, Input, Image, Button, Swiper, SwiperItem, Text, Switch } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from './order.less'

import { AtIcon, AtDivider, AtModal, AtModalContent, AtTabs, AtTabsPane } from 'taro-ui';
import numeral from 'numeral';
import moment from 'moment';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"],
}))
export default class Order extends PureComponent {
  config = {
    navigationBarTitleText: '订单',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  componentDidMount() {
    console.log('didMount')
    const { dispatch } = this.props;
  }


  render() {
    const { loading } = this.props;
    return (
      <View className={styles.page}>
        订单
      </View>
    )
  }
}
