const path = require('path');
const config = {
  projectName: 'Taro2.0_dva',
  date: '2020-2-24',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist_${process.env.TARO_ENV}`,
  babel: {
    sourceMap: false,
    presets: [
      ['env']
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ]
  },
  defineConstants: {
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  plugins: ['@tarojs/plugin-less', '@tarojs/plugin-sass', '@tarojs/plugin-terser'],
  mini: {
    webpackChain(chain, webpack) {
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              moment: {
                name: 'moment',
                priority: 1000,
                test(module) {
                  return /node_modules[\\/]moment/.test(module.context)
                }
              }
            }
          }
        }
      })
    },
    commonChunks(commonChunks) {
      commonChunks.push('moment')
      return commonChunks
    },
    imageUrlLoaderOption: {
      limit: 10240 // 大小限制，单位为 b
    },
    cssLoaderOption: {
      modules: {
        auto: /[a-zA-Z]+\.less$/i,
        mode: 'local',
        localIdentName: '[name]_[local]_[hash:base64:5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
          if (context.resourcePath.includes('customVariables.global.scss') || context.resourcePath.includes('app.global.less')) {
            return localName;
          }
        },
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    devServer: {
      port: 8080
    },
    esnextModules: ['taro-ui'],
    // webpackChain(chain, webpack) { },
    cssLoaderOption: {
      modules: {
        auto: /[a-zA-Z]+\.less$/i,
        mode: 'local',
        localIdentName: '[name]_[local]_[hash:base64:5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
          if (context.resourcePath.includes('customVariables.global.scss') || context.resourcePath.includes('app.global.less')) {
            return localName;
          }
        },
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
