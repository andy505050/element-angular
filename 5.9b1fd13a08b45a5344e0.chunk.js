webpackJsonp([5],{1028:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var o=t(1),i=t(34),l=t(957),c=t(958),a=t(959),s=t(960),p=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},r=[{path:"",component:l.a,children:[{path:"menu",component:c.a},{path:"steps",component:a.a},{path:"dropdown",component:s.a}]}],d=function(){function NavRoutingModule(){}return NavRoutingModule=p([Object(o.M)({imports:[i.e.forChild(r)],exports:[i.e]})],NavRoutingModule)}()},1029:function(e,n){e.exports="<router-outlet></router-outlet>\n"},1030:function(e,n){e.exports=""},1031:function(e,n){e.exports='<h2>NavMenu 导航菜单</h2>\n<h3>为网站提供导航功能的菜单。</h3>\n\n\x3c!--<h3>顶栏</h3>--\x3e\n\x3c!--<p>适用广泛的基础用法。</p>--\x3e\n\n\x3c!--<el-menu mode="horizontal" [default-active]="\'2\'">--\x3e\n  \x3c!--<el-menu-item index="1">处理中心</el-menu-item>--\x3e\n  \x3c!--<el-submenu index="2" title="我的工作台">--\x3e\n    \x3c!--<el-menu-item index="2-1">选项1</el-menu-item>--\x3e\n    \x3c!--<el-menu-item index="2-2">选项2</el-menu-item>--\x3e\n    \x3c!--<el-menu-item index="2-3">选项3</el-menu-item>--\x3e\n  \x3c!--</el-submenu>--\x3e\n\x3c!--</el-menu>--\x3e\n\n<ex-document doc="menu"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},1032:function(e,n){e.exports=""},1033:function(e,n,t){"use strict";n.a=['\n\x3c!--[active] 的值标识当前的进度 它是一个整数--\x3e\n<div class="demo">\n  <el-steps space="100px" [active]="active" [finish-status]="\'success\'">\n    <el-step title="步骤 1"></el-step>\n    <el-step title="步骤 2"></el-step>\n    <el-step title="步骤 3"></el-step>\n  </el-steps>\n  <el-button (click)="handle()">next</el-button>\n</div>\n','\n\n<el-steps space="100px" [active]="1" [finish-status]="\'success\'">\n  <el-step title="已完成"></el-step>\n  <el-step title="进行中"></el-step>\n  <el-step title="步骤 3"></el-step>\n</el-steps>\n\n','\n\n<el-steps space="200px" [active]="1">\n  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>\n  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>\n  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>\n</el-steps>\n\n','\n\n<el-steps space="100px" [active]="1">\n  <el-step title="步骤 1" icon="edit"></el-step>\n  <el-step title="步骤 2" icon="upload"></el-step>\n  <el-step title="步骤 3" icon="picture"></el-step>\n</el-steps>\n\n','\n\n<el-steps space="100px" [active]="1" direction="vertical" [finish-status]="\'success\'">\n  <el-step title="步骤 1"></el-step>\n  <el-step title="步骤 2"></el-step>\n  <el-step title="步骤 3"></el-step>\n</el-steps>\n\n']},1034:function(e,n){e.exports='<h2>Steps 步骤条</h2>\n<p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，至少需要 2 步</p>\n\n<h3>基础用法</h3>\n<p>简单的步骤条。</p>\n<ex-demo link="2" [code]="code[0]" [class]="ExClass">\n</ex-demo>\n\n<h3>含状态步骤条</h3>\n<p>每一步骤显示出该步骤的状态。</p>\n<ex-demo link="2" [code]="code[1]">\n</ex-demo>\n\n<h3>有描述的步骤条</h3>\n<p>每个步骤有其对应的步骤状态描述。</p>\n<ex-demo link="2" [code]="code[2]">\n</ex-demo>\n\n<h3>带图标的步骤条</h3>\n<p>步骤条内可以启用各种自定义的图标。</p>\n<ex-demo link="2" [code]="code[3]" notes="通过 <code>icon</code> 属性来设置图标，图标的类型可以参考 Icon 组件的文档">\n</ex-demo>\n\n<h3>竖式步骤条</h3>\n<p>竖直方向的步骤条。</p>\n<ex-demo link="2" [code]="code[4]">\n</ex-demo>\n\n\n<ex-document doc="steps"></ex-document>\n<ex-document doc="step"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1035:function(e,n){e.exports=".demo {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .demo .el-button {\n    margin-bottom: 25px; }\n"},1036:function(e,n,t){"use strict";n.a=["\n\n<el-dropdown [model]=\"data\">\n  下拉菜单\n</el-dropdown>\n\n<script type=\"text\">\n// in component:\nprivate data: any[] = [{\n  value: 'huangjingao',\n  label: '黄金糕',\n}, {\n  value: 'shizitou',\n  label: '狮子头',\n}, {\n  value: 'luosifen',\n  label: '螺蛳粉',\n}]\n\n<\/script>\n",'\n\n<div el-row class="block-col-2">\n  <div el-col span="12">\n    <span class="demonstration">hover 激活</span>\n    <el-dropdown [model]="data">\n      下拉菜单\n    </el-dropdown>\n  </div>\n  \n  <div el-col span="12">\n    <span class="demonstration">click 激活</span>\n    <el-dropdown trigger="click" [model]="data">\n      下拉菜单\n    </el-dropdown>\n  </div>\n</div>\n\n',"\n\n<el-dropdown [model]=\"data2\">\n  下拉菜单\n</el-dropdown>\n\n<script type=\"text\">\n// in component:\nprivate data2: any[] = [{\n  value: 'huangjingao',\n  label: '黄金糕',\n}, {\n  value: 'shizitou',\n  label: '狮子头',\n  disabled: true,\n}, {\n  value: 'luosifen',\n  label: '螺蛳粉',\n}]\n\n<\/script>\n","\n\n<el-dropdown [model]=\"data3\">\n  下拉菜单\n</el-dropdown>\n\n<script type=\"text\">\n// in component:\nprivate data3: any[] = [{\n  value: 'huangjingao',\n  label: '黄金糕',\n  divided: true,\n}, {\n  value: 'shizitou',\n  label: '狮子头',\n}, {\n  value: 'luosifen',\n  label: '螺蛳粉',\n}]\n<\/script>\n\n",'\n\n<el-dropdown [model]="data3"\n  [split-button]="true"\n  type="primary">\n  下拉菜单\n</el-dropdown>\n\n']},1037:function(e,n){e.exports='<h2>Dropdown 下拉菜单</h2>\n<p>将动作或菜单折叠到下拉菜单中。</p>\n\n<h3>基础用法</h3>\n<p>移动到下拉菜单上，展开更多操作。</p>\n<ex-demo link="2" [code]="code[0]" [class]="exClass" notes="数据源 <code>model</code>\n需要遵循一定的结构，详见文末的参考">\n</ex-demo>\n\n<h3>触发方式</h3>\n<p>可以配置 click 激活或者 hover 激活。</p>\n<ex-demo link="2" [code]="code[1]" [class]="exClass" notes="在 <code>trigger</code>\n属性设置为 <code>click</code> 即可。">\n</ex-demo>\n\n<h3>禁用单项</h3>\n<p>禁用某一个选项</p>\n<ex-demo link="2" [code]="code[2]" [class]="exClass" notes="设置数据源的某一项 <code>disabled</code>\n为 <code>true</code> 即可禁用此选项">\n</ex-demo>\n\n<h3>显示分割线</h3>\n<p>为单个选项增加分割线</p>\n<ex-demo link="2" [code]="code[3]" [class]="exClass" notes="设置数据源的某一项 <code>divided</code>\n为 <code>true</code> 即可禁用此选项">\n</ex-demo>\n\n<h3>按钮模式</h3>\n<p>可使用按钮触发下拉菜单。</p>\n<ex-demo link="2" [code]="code[4]" [class]="exClass" notes="设置数据源的某一项 <code>divided</code>\n为 <code>true</code> 即可禁用此选项">\n</ex-demo>\n\n\n\n<ex-document doc="dropdown"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1038:function(e,n){e.exports=".el-dropdown {\n  vertical-align: top; }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px; }\n\n.el-dropdown-link {\n  cursor: pointer;\n  color: #20a0ff; }\n\n.el-icon-caret-bottom {\n  font-size: 12px; }\n\n.block-col-2 {\n  margin: -24px; }\n  .block-col-2 .el-col {\n    padding: 30px 0;\n    text-align: center;\n    border-right: 1px solid #eff2f6; }\n    .block-col-2 .el-col:last-child {\n      border-right: 0; }\n\n.demo-dropdown .demonstration {\n  display: block;\n  color: #8492a6;\n  font-size: 14px;\n  margin-bottom: 20px; }\n"},935:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"NavigationModule",function(){return x});var o=t(7),i=t(1),l=t(51),c=t(1028),a=t(98),s=t(957),p=t(958),r=t(959),d=t(219),u=t(960),f=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},x=function(){function NavigationModule(){}return NavigationModule=f([Object(i.M)({declarations:[s.a,p.a,r.a,u.a],imports:[o.b,l.a,c.a,a.b,d.a],exports:[s.a],providers:[]})],NavigationModule)}()},957:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t(1),i=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},l=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},c=function(){function ExNavigationMainComponent(){}return ExNavigationMainComponent.prototype.ngOnInit=function(){},ExNavigationMainComponent=i([Object(o.o)({selector:"ex-navigation-main",template:t(1029),styles:[t(1030)]}),l("design:paramtypes",[])],ExNavigationMainComponent)}()},958:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(1),i=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},l=function(){function ExMenuComponent(){this.page={previous:{name:"Notification 通知",link:"/notice/notification"},next:{name:"Steps 步骤条",link:"/nav/steps"}}}return ExMenuComponent.prototype.ngOnInit=function(){},ExMenuComponent=i([Object(o.o)({selector:"ex-menu",template:t(1031),styles:[t(1032)]})],ExMenuComponent)}()},959:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t(1),i=t(1033),l=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},c=function(){function ExStepsComponent(){this.ExClass=function(){function class_1(){this.active=1}return class_1.prototype.handle=function(){3===this.active?this.active=0:this.active++},class_1}(),this.code=i.a,this.page={previous:{name:"NavMenu 导航菜单",link:"/nav/menu"},next:{name:"Dropdown 下拉菜单",link:"/nav/dropdown"}}}return ExStepsComponent.prototype.ngOnInit=function(){},ExStepsComponent=l([Object(o.o)({selector:"ex-steps",template:t(1034),styles:[t(1035)],encapsulation:o._19.None})],ExStepsComponent)}()},960:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t(1),i=t(1036),l=this&&this.__decorate||function(e,n,t,o){var i,l=arguments.length,c=l<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(l<3?i(c):l>3?i(n,t,c):i(n,t))||c);return l>3&&c&&Object.defineProperty(n,t,c),c},c=function(){function ExDropdownComponent(){this.exClass=function(){function class_1(){this.data=[{value:"huangjingao",label:"黄金糕"},{value:"shizitou",label:"狮子头"},{value:"luosifen",label:"螺蛳粉"}],this.data2=[{value:"huangjingao",label:"黄金糕"},{value:"shizitou",label:"狮子头",disabled:!0},{value:"luosifen",label:"螺蛳粉"}],this.data3=[{value:"huangjingao",label:"黄金糕"},{value:"shizitou",label:"狮子头",divided:!0},{value:"luosifen",label:"螺蛳粉"}]}return class_1.prototype.handle=function(){},class_1}(),this.code=i.a,this.page={previous:{name:"Steps 步骤条",link:"/nav/steps"},next:{name:"Tooltip 文字提示",link:"/others/tooltip"}}}return ExDropdownComponent.prototype.ngOnInit=function(){},ExDropdownComponent=l([Object(o.o)({selector:"ex-dropdown",template:t(1037),styles:[t(1038)],encapsulation:o._19.None})],ExDropdownComponent)}()}});