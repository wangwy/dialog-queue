<template>
    <div class="dialog" v-if="open">
        <div class="dialog-mask" :style="styleObject"
             v-if="showMask" @click="handMaskClick"></div>
        <div class="dialog-content">
            <slot></slot>
            <div class="dialog-close" v-if="showCloseBtn" @click="closeDialog"></div>
        </div>
    </div>
</template>

<script>
    /**
     * @file Dialog基础弹层
     * @author wangwenyuan03
     */
    const queue = [];
    export default {
        name: 'Dialog',
        props: {
            showMask: {
                type: Boolean,
                default: true
            },
            showCloseBtn: {
                type: Boolean,
                default: true
            },
            disableMaskClick: {
                type: Boolean,
                default: false
            },
            backgroundBottom: {
                type: String,
                default: 'rgba(28, 2, 2, 0.8)'
            },
            backgroundTop: {
                type: String,
                default: 'rgba(28, 2, 2, 0.1)'
            }
        },
        data() {
            return {
                open: false,
                styleObject: {
                    background: `linear-gradient(to top, ${this.backgroundBottom}, ${this.backgroundTop})`
                }
            }
        },
        mounted() {
            if (!queue.length) {
                this.showDialog();
            }
            queue.push(this);
        },
        destroyed() {
            queue.shift(this);
            let dialog = queue[0];
            if (dialog) {
                dialog.showDialog.call(dialog);
            }
        },
        methods: {
            // 蒙层点击
            handMaskClick() {
                if (!this.disableMaskClick) {
                    this.closeDialog();
                }
            },
            // 关闭弹框
            closeDialog() {
                this.$emit('closeDialog');
            },
            showDialog() {
                this.open = true;
            }
        }
    };
</script>
<style scoped>
    .dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
    .dialog-mask {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .dialog-content {
        position:fixed;
        left: 50%;
        top: 50%;
        z-index: 998;
        transform: translate(-50%, -50%);
    }
    .dialog-close {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -220px;
        margin: 0 auto;
        width: 30px;
        height: 30px;
        background-image: url("./dialog-close.png");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>