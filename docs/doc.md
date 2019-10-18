## dialog-queue 弹框组件

:::demo 通过 `dialog-queue` 组件，可以快速创建对话框，`show` 属性控制显示与关闭，当同时出现多个弹框时可以通过`dialog-queue`组件实现连续弹框

```html
<dialog-queue  @closeDialog="closeDialog('show')" v-if=show>
        <div class="test-dialog">
            test dialog
        </div>
</dialog-queue>
<div v-if=show1>
    <dialog-queue  @closeDialog="closeDialog('show1')">
            <div class="test-dialog">
                test dialog1
            </div>
    </dialog-queue>
</div>
<div v-if=show2>
    <dialog-queue  @closeDialog="closeDialog('show2')">
            <div class="test-dialog">
                test dialog2
            </div>
    </dialog-queue>
</div>
<dialog-test v-if=show3 @closeTestDialog="closeDialog('show3')">
    test dialog3
</dialog-test>
<dialog-test v-if=show4 @closeTestDialog="closeDialog('show4')">
    test dialog4
</dialog-test>
<button class="button" @click="show = true">开启弹窗</button>
<button class="button" @click="show1 = show2 = show3 = show4 = true">连续弹窗</button>
<script>
  import DialogQueue from '../src/DialogQueue.vue';
  import DialogTest from './components/DialogTest.vue'
  export default {
    data () {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false
      }
    },
    components: {
        DialogQueue,
        DialogTest
    },
    methods: {
        closeDialog(arg) {
            this[arg] = false;
        }
    }
  }
</script>
<style lang="stylus">
    .test-dialog
        width 200px
        line-height 400px
        text-align center
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
```
:::
