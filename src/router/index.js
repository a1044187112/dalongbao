import Vue from 'vue'
import Router from 'vue-router'
import indexPag from '@/components/indexPag'
import comClass from '@/components/comClass/comClass'
import comInfo from '@/components/comClass/comInfo'
import login from '@/components/login/login'
import remartpw from '@/components/login/remartPw'
import hotAno from '@/components/index/hotAno'
import omall from '@/components/mall/omall'
import detOrder from '@/components/buy/detOrder'
import manShipAddress from '@/components/addressMan/manShipAddress'
import addAddress from '@/components/addressMan/addAddress'
import perCenter from '@/components/perCenter/perCenter'
import longBao from '@/components/perCenter/longBao'
import vipBuy from '@/components/buy/vipBuy'
import incomeExpDetails from '@/components/perCenter/moneyMan/incomeExpDetails'
import payQRCode from '@/components/buy/payQRCode'
import transferVou from '@/components/perCenter/moneyMan/transferVou'
import voucher from '@/components/perCenter/moneyMan/voucher'
import vouInfo from '@/components/comClass/vouInfo'
import voucherCom from '@/components/buy/voucherCom'
import lbBalance from '@/components/perCenter/moneyMan/lbBalance'
import addBankC from '@/components/perCenter/bankCardMan/addBankC'
import lbVouTran from '@/components/perCenter/moneyMan/lbVouTran'
import order from '@/components/buy/myOrder/order'
import businCheckIn from '@/components/mall/businCheckIn'
import perP from '@/components/perCenter/perP'
import collection from '@/components/perCenter/coll/collection'
import accSafe from '@/components/perCenter/accSafe/accSafe'
import changePw from '@/components/login/changePw'
import userHelp from '@/components/perCenter/userHelp/userHelp'
import mySetting from '@/components/perCenter/accSafe/mySetting'
import modifyName from '@/components/perCenter/accSafe/modifyName'
import userMsg from '@/components/perCenter/userMsg/userMsg'
import shoppingCart from '@/components/buy/shoppingCart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   name: 'indexPag',component: indexPag // 首页
    },
    {
      path: '/comClass/class',  name: 'comClass',component: comClass // 分类商品
    },
    {
      path: '/login',  name: 'login',component: login // 登陆
    },
    {
      path: '/remartpw',  name: 'remartpw',component: remartpw // 重置密码
    },
    {
      path: '/index/hotAno',  name: 'hotAno', component: hotAno // 热议
    },
    {
      path: '/comClass/comInfo',    name: 'comInfo',component: comInfo // 商品详情
    },
      {
      path: '/mall/omall',  name: 'omall',component: omall // 官方商城
    },
   	 {
      path: '/detOrder', name: 'detOrder',component: detOrder  // 确认订单
    },
     {
      path: '/addressMan/manShipAddress',  name: 'manShipAddress',component: manShipAddress // 管理收货地址
    },
    {
      path: '/addressMan/addAddress',  name: 'addAddress', component: addAddress // 添加收货地址
    },
    {
      path: '/perCenter',  name: 'perCenter',component: perCenter // 个人中心
    },
     {
      path: '/longBao',  name: 'longBao',component: longBao // 开户
    },
    {
      path: '/vipBuy',   name: 'vipBuy',component: vipBuy // 会员购货
    },
     {
      path: '/perCenter/moneyMan/incomeExpDetails',   name: 'incomeExpDetails', component: incomeExpDetails // 收支明细
    },
    {
      path: '/payQRCode',  name: 'payQRCode', component: payQRCode // 支付二维码
    },
     {
      path: '/perCenter/moneyMan/transferVou',   name: 'transferVou', component: transferVou // 转让首购券
    },
    {
      path: '/perCenter/moneyMan/voucher',   name: 'voucher', component: voucher // 兑换券
    },
     {
      path: '/comClass/vouInfo',   name: 'vouInfo',  component: vouInfo // 兑换券兑换商品详情
    },
    {
      path: '/voucherCom',   name: 'voucherCom',  component: voucherCom // 兑换券兑换商品订单确认
    },
    {
      path: '/perCenter/moneyMan/lbBalance',   name: 'lbBalance',  component: lbBalance // 龙宝余额
    },
     {
      path: '/perCenter/bankCardMan/addBankC',   name: 'addBankC',  component: addBankC // 龙宝余额
    },
     {
      path: '/perCenter/moneyMan/lbVouTran',   name: 'lbVouTran',  component: lbVouTran // 大龙宝转首购券
    },
     {
      path: '/myOrder/order',   name: 'order',  component: order // 我的订单
    },
    {
      path: '/mall/businCheckIn',   name: 'businCheckIn',  component: businCheckIn // 商家入驻
    },
    {
      path: '/perP',   name: 'perP',  component: perP // 我的人脉
    },
    {
      path: '/perCenter/coll/collection',   name: 'collection',  component: collection // 商品收藏
    },
     {
      path: '/perCenter/accSafe/accSafe',   name: 'accSafe',  component: accSafe // 账户安全
    },
    {
      path: '/changePw',   name: 'changePw',  component: changePw // 修改密码
    },
    {
      path: '/perCenter/userHelp/userHelp',   name: 'userHelp',  component: userHelp // 帮助中心
    },
     {
      path: '/perCenter/accSafe/mySetting',   name: 'mySetting',  component: mySetting // 我的设置
    },
     {
      path: '/perCenter/accSafe/modifyName',   name: 'modifyName',  component: modifyName // 我的设置
    },
    {
      path: '/perCenter/userMsg',   name: 'userMsg',  component: userMsg // 用户消息
    },
     {
      path: '/buy/shoppingCart',   name: 'shoppingCart',  component: shoppingCart // 购物车
    },
  ]
})
