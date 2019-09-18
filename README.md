## DialogQueue

自从入职新公司一来，一直在做给app拉新的活动，最近接到一个活动，一进首页时会连续弹多个弹框提示用户获得的奖励或者完成的任务。现在将连续弹框的逻辑抽离出来，写了`DialogQueue`组件(该组建更多的是作为一个连续弹框的解决方案)。

## use
```
npm install dialog-queue
```

```
<dialog-queue  @closeDialog="closeDialog" v-if=show1>
        <div class="test-dialog">
            test dialog
        </div>
</dialog-queue>
<button class="button" @click="show1 = true">开启弹窗</button>
<script>
  import DialogQueue from '../src/DialogQueue.vue';
  export default {
    data () {
      return {
        show1: false
      }
    },
    components: {
        DialogQueue
    },
    methods: {
        closeDialog() {
            this.show1 = false;
        }
    }
  }
</script>
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