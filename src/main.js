import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import "element-plus/packages/theme-chalk/src/base.scss"
import "normalize.css/normalize.css"
import "./assets/common.css"

import { ElTable , ElTableColumn,ElButton,ElContainer,
    ElHeader,ElMain,ElAside,ElFooter,ElInput,ElForm,ElFormItem,
    ElPagination,ElBreadcrumb,ElBreadcrumbItem,ElMenu,ElMenuItem,ElSubmenu
} from 'element-plus';
// import ElementPlus from 'element-plus';


const app = createApp(App);
/*按需引入Element组件*/
app.component(ElTable.name, ElTable);
app.component(ElTableColumn.name, ElTableColumn);
app.component(ElButton.name, ElButton);
app.component(ElContainer.name, ElContainer);
app.component( ElHeader.name,  ElHeader);
app.component( ElMain.name,  ElMain);
app.component( ElAside.name,  ElAside);
app.component( ElFooter.name,  ElFooter);
app.component( ElInput.name,  ElInput);
app.component( ElForm.name,  ElForm);
app.component( ElFormItem.name,  ElFormItem);
app.component( ElPagination.name,  ElPagination);
app.component( ElBreadcrumb.name,  ElBreadcrumb);
app.component( ElBreadcrumbItem.name,  ElBreadcrumbItem);
app.component( ElMenu.name,  ElMenu);
app.component( ElMenuItem.name,  ElMenuItem);
app.component( ElSubmenu.name,  ElSubmenu);


// 假设 test 是外部引入的方法
const test = () => {
    console.log('ccccc')
    return '测试成功001'
}

app.provide('$test', test)

// app.use(ElementPlus);
app.use(router);
app.use(store);
// app.use(Antd);
// app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount('#app');