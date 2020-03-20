/* vant组件引入 */

import Vue from 'vue'

// Tabbar底部
import {Tabbar, TabbarItem} from 'vant'
Vue.use(Tabbar).use(TabbarItem)

// loading组件
import {Loading} from 'vant'
Vue.use(Loading)

// 轮播组件
import {Swipe, SwipeItem} from "vant"
Vue.use(Swipe).use(SwipeItem)


// 懒加载
import {Lazyload} from "vant"
Vue.use(Lazyload)

// 栅栏宫格
import {Grid, GridItem} from 'vant'
Vue.use(Grid).use(GridItem)

// icon图标
import {Icon} from "vant"
Vue.use(Icon)


// panel面板
import {Panel} from 'vant'
Vue.use(Panel)

// 倒计时
import {CountDown} from 'vant'
Vue.use(CountDown)

// 分割线
import {Divider} from 'vant'
Vue.use(Divider)

// image
import {Image} from "vant"
Vue.use(Image)


// 商品卡片
import {Card} from 'vant';

Vue.use(Card);

// 按钮
import {Button} from 'vant'
Vue.use(Button)


// 导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

// 上拉菜单
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);

// 单元格
import { Cell, CellGroup,Col } from 'vant';
Vue.use(Cell).use(CellGroup).use(Col);


// 商品导航
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);

// 标签
import {Tag} from 'vant';
Vue.use(Tag);

// SKU商品规格
import {Sku} from 'vant'
Vue.use(Sku)

// tab标签
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

// 表单
import { Form,Field } from 'vant';
Vue.use(Form).use(Field);

// 复选框
import {Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

// 提交栏
import {SubmitBar} from 'vant';
Vue.use(SubmitBar);

// 步进器
import {Stepper} from 'vant';
Vue.use(Stepper);


// 联系人卡片
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard).use(ContactList).use(ContactEdit);
