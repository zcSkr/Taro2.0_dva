import Taro, { PureComponent } from '@tarojs/taro'
import { View, ScrollView, Input, Image, Button, Swiper, SwiperItem, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from './index.less'

import { AtIcon, AtDivider, AtButton } from 'taro-ui';
import numeral from 'numeral';
import { fileUrl } from '@/config/config';

@connect(({ home, loading }) => ({
  home,
  loading: loading.effects["home/query"],
  submiting: loading.effects["home/service"],
}))

class Index extends PureComponent {
  config = {
    navigationBarTitleText: '首页',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: true,
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('didMount')
    const { dispatch } = this.props;
  }

  render() {
    const { 
      loading, 
      home: { carList, goodsList, shopBannerList, shopGoodsTypeList, shopInfo },
    } = this.props;

    return (
      <View className={styles.page}>
        {
          [...new Array(3).keys()].map(item => <View key={item}>首页{item}</View>)
        }
      </View>
    )
  }
}

export default Index