<template>
    <dialog-queue  @closeDialog="closeDialog">
        <div class="test-dialog">
            <slot></slot>
        </div>
    </dialog-queue>
</template>

<script>
    /**
     * @file file DialogTest
     * @author wangwenyuan03(wangwenyuan03@baidu.com)
     */
    import DialogQueue from '../../src/DialogQueue';
    export default {
        components: {
            DialogQueue
        },
        methods: {
            closeDialog() {
                this.$emit('closeTestDialog');
            }
        }
    };
</script>

<style lang="stylus">
    .test-dialog
        width 200px
        height 400px
        background antiquewhite
        animation-name dialogIn
        animation-duration .5s
        animation-fill-mode forwards
    @keyframes dialogIn
        0%
            transform scale(0, 0)
        50%
            transform scale(1.1, 1.1)
        75%
            transform scale(0.95, 0.95)
        100%
            transform scale(1, 1)

</style>