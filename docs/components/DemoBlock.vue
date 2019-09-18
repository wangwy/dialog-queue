<template>
    <div class="demo-block">
        <slot name="source"></slot>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <slot name="highlight"></slot>
        </div>
    </div>
</template>
<script>
    /**
     * @file file demo-block
     * @author wangwenyuan03(wangwenyuan03@baidu.com)
     */
    export default {
        name: 'DemoBlock',
        props: {
            jsfiddle: Object
        },
        created () {
            // console.log(this.jsfiddle)
        }
    }
</script>

<style lang="stylus">
    .demo-block body,
    .demo-block .meta .hljs
        background transparent
    .demo-block
        border 1px solid #ebebeb
        border-radius 3px
        transition .2s
        padding 0px
        margin 10px 0
        .source
            padding 24px
        .meta
            background-color #fafafa
            border-top 1px solid #eaeefb
            overflow hidden
            .description
                padding 20px
                box-sizing border-box
                border 1px solid #ebebeb
                border-radius 3px
                font-size 14px
                line-height 22px
                color #666
                word-break break-word
                margin 10px
                background-color #fff
                p
                    padding 0
                    margin 0
</style>