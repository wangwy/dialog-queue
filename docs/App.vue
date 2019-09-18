<template>
    <div id="app">
        <header>
            <img src="./assets/logo.png">
            <h1>dialog 弹框组件</h1>
        </header>
        <main class="doc-block">
            <doc/>
        </main>
        <main class="doc-block">
            <readme/>
        </main>
    </div>
</template>

<script>
    /**
     * @file file App
     * @author wangwenyuan03(wangwenyuan03@baidu.com)
     */
    import Readme from '../README.md';
    import Doc from './doc.md';
    export default {
        name: 'App',
        components: {
            Readme,
            Doc
        },
        props: {},
        methods: {}
    };
</script>