// import '@tarojs/async-await'
import Taro, { PureComponent } from '@tarojs/taro'
import Index from './pages/index';
import dva from './utils/dva'
import models from './model'
import { Provider } from '@tarojs/redux'
import './customVariables.global.scss'
import './app.global.less'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    // dispatch(action("sys/error", e));
    console.log(e)
  },
});
const store = dvaApp.getStore();

class App extends PureComponent {

  config = {
    entryPagePath: 'pages/index',
    pages: [
      'pages/index',
      'pages/mine',
      'pages/order',
      'pages/shop'
    ],
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    },
    // debug: true,
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
      backgroundColor: "#3f3f3f"
    },
    tabBar: {
      color: "#999999",
      selectedColor: "#333333",
      backgroundColor: "#FFFFFF",
      borderStyle: "black",
      list: [{
        pagePath: "pages/index",
        text: "首页",
        iconPath: "./assets/tabbar/icon_home.png",
        selectedIconPath: "./assets/tabbar/icon_home_selected.png"
      }, {
        pagePath: "pages/shop",
        text: "积分商城",
        iconPath: "./assets/tabbar/icon_shop.png",
        selectedIconPath: "./assets/tabbar/icon_shop_selected.png"
      }, {
        pagePath: "pages/order",
        text: "订单",
        iconPath: "./assets/tabbar/icon_order.png",
        selectedIconPath: "./assets/tabbar/icon_order_selected.png"
      }, {
        pagePath: "pages/mine",
        text: "我的",
        iconPath: "./assets/tabbar/icon_mine.png",
        selectedIconPath: "./assets/tabbar/icon_mine_selected.png"
      }]
    },
    lazyCodeLoading: "requiredComponents"
  }

  store = store
  componentDidMount() {
    Taro.onMemoryWarning((res) => {
      Taro.showModal({
        title: '警告',
        content: '小程序内存不足，建议重启！',
        showCancel: false,
        confirmText: '知道了'
      })
    })
    console.log('\x1b[35m%s', '程序启动');
    switch (process.env.TARO_ENV) {
      case 'weapp':
        const updateManager = Taro.getUpdateManager();
        updateManager.onUpdateReady(() => {
          Taro.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success: res => {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
        break;
      default: break;
    }

  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
