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

export default class Index extends PureComponent {
  config = {
    navigationBarTitleText: '首页',
    navigationBarTextStyle: "black",
    navigationBarBackgroundColor: "#fff",
    enablePullDownRefresh: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      triggered: false
    }
  }

  componentDidMount() {
    console.log('didMount')
    const { dispatch } = this.props;
    // setTimeout(() => {
    //   this.setState({
    //     triggered: false,
    //   })
    // }, 1000)
  }

  onPulling = (e) => {
    // console.log('onPulling:', e)
    // this.setState({ triggered: true })
    // setTimeout(() => {
    //   Taro.stopPullDownRefresh()
    //   console.log(123)
    // },5000)
  }

  onRefresh = () => {
    console.log('onRefresh')
    this.setState({ triggered: true })
    setTimeout(() => {
      this.setState({ triggered: false })
      console.log(123)
    }, 2000)
  }

  onRestore = (e) => {
    console.log('onRestore:', e)
  }

  onAbort = (e) => {
    console.log('onAbort', e)
  }

  render() {
    const {
      loading,
      home: { carList, goodsList, shopBannerList, shopGoodsTypeList, shopInfo },
    } = this.props;
    const { triggered } = this.state;
    return (
      <View className={styles.page}>
        <AtButton type='primary'>shdgasj</AtButton>
        <View className={styles.testName}>
          测试类名1
          <AtButton type='primary'>测试:global按钮</AtButton>
        </View>
        {/* {
          [...new Array(3).keys()].map(item => <View key={item}>首页{item}</View>)
        } */}
        <ScrollView
          scrollY 
          style="width: 100%; height: 100vh;"
          // scrollTop={200}
          refresherEnabled={true}
          refresherThreshold={100}
          refresherDefaultStyle="white"
          refresherBackground="#3f3f3f"
          scrollWithAnimation={true}
          refresherTriggered={triggered}
          onRefresherPulling={this.onPulling}
          onRefresherRefresh={this.onRefresh}
          onRefresherRestore={this.onRestore}
          onRefresherAbort={this.onAbort}
        >
          {
            [...new Array(66).keys()].map(item => {
              return (
                <View style="min-width: 200rpx" key={item}>首页{item}</View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}