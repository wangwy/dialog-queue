## DialogQueue

自从入职新公司一来，一直在做给app拉新的活动，最近接到一个活动，一进首页时会连续弹多个弹框提示用户获得的奖励或者完成的任务。现在将连续弹框的逻辑抽离出来，写了`DialogQueue`组件(该组建更多的是作为一个连续弹框的解决方案)。

[Live Demo](https://wangwy.github.io/dialog-queue/example/index.html)

## use
```
npm install dialog-queue
```

```
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

### DialogQueue Attributes
| 参数      | 说明  | 类型  | 可选值 | 默认值  |
|---------- |-------------- |---------- |--------  |-------- |
| showMask  | 是否显示弹框背景蒙层 | boolean | -  | true |
| backgroundBottom  | 蒙层底部背景样式 | string | -  | rgba(28, 2, 2, 0.8) |
| backgroundTop  | 蒙层顶部背景样式 | string | -  | rgba(28, 2, 2, 0.1) |
| showCloseBtn  | 是否显示弹框关闭按钮 | boolean | -  | true |
| disableMaskClick  | 点击蒙层是否关闭弹框 | boolean | -  | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| closeDialog  | 点击关闭按钮或者蒙层时触发的事件 | events |