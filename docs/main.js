/**
 * @file file
 * @author wangwenyuan03(wangwenyuan03@baidu.com)
 */
import Vue from 'vue';
import App from './App';
import DemoBlock from './components/DemoBlock';
import './assets/common.css';

Vue.component('DemoBlock', DemoBlock);

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
});