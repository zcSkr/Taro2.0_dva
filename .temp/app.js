// import '@tarojs/async-await'
import Taro, { PureComponent } from "@tarojs/taro-h5";

import dva from './utils/dva';
import models from "./model/index";
import { Provider } from "@tarojs/redux-h5";
import "taro-ui/dist/style/index.scss";
import './app.global.less';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    // dispatch(action("sys/error", e));
    console.log(e);
  }
});
const store = dvaApp.getStore();

class App extends PureComponent {
  state = {
    __tabs: {
      color: "#999999",
      selectedColor: "#333333",
      backgroundColor: "#FFFFFF",
      borderStyle: "black",
      list: [{
        pagePath: "/pages/index",
        text: "首页",
        iconPath: require("././assets/tabbar/icon_home.png"),
        selectedIconPath: require("././assets/tabbar/icon_home_selected.png")
      }, {
        pagePath: "/pages/shop",
        text: "积分商城",
        iconPath: require("././assets/tabbar/icon_shop.png"),
        selectedIconPath: require("././assets/tabbar/icon_shop_selected.png")
      }, {
        pagePath: "/pages/order",
        text: "订单",
        iconPath: require("././assets/tabbar/icon_order.png"),
        selectedIconPath: require("././assets/tabbar/icon_order_selected.png")
      }, {
        pagePath: "/pages/mine",
        text: "我的",
        iconPath: require("././assets/tabbar/icon_mine.png"),
        selectedIconPath: require("././assets/tabbar/icon_mine_selected.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  config = {
    pages: ["/pages/index", "/pages/mine", "/pages/order", "/pages/shop"],
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
      backgroundColor: "#3f3f3f"
    },
    tabBar: { color: "#999999", selectedColor: "#333333", backgroundColor: "#FFFFFF", borderStyle: "black", list: [{ pagePath: "/pages/index", text: "首页", iconPath: require("././assets/tabbar/icon_home.png"), selectedIconPath: require("././assets/tabbar/icon_home_selected.png") }, { pagePath: "/pages/shop", text: "积分商城", iconPath: require("././assets/tabbar/icon_shop.png"), selectedIconPath: require("././assets/tabbar/icon_shop_selected.png") }, { pagePath: "/pages/order", text: "订单", iconPath: require("././assets/tabbar/icon_order.png"), selectedIconPath: require("././assets/tabbar/icon_order_selected.png") }, { pagePath: "/pages/mine", text: "我的", iconPath: require("././assets/tabbar/icon_mine.png"), selectedIconPath: require("././assets/tabbar/icon_mine_selected.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {
    console.log("程序启动");
    switch ("h5") {
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
      default:
        break;
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index',
            componentLoader: () => import( /* webpackChunkName: "index" */'./pages/index'),
            isIndex: true
          }, {
            path: '/pages/mine',
            componentLoader: () => import( /* webpackChunkName: "mine" */'./pages/mine'),
            isIndex: false
          }, {
            path: '/pages/order',
            componentLoader: () => import( /* webpackChunkName: "order" */'./pages/order'),
            isIndex: false
          }, {
            path: '/pages/shop',
            componentLoader: () => import( /* webpackChunkName: "shop" */
            './pages/shop'),
            isIndex: false
          }]} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index" />
        </TabbarContainer>
        </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));