<template>
    <div class="item__right" v-if="checked">
      <!-- <h2>sorted</h2> -->
            <div 
                v-for="square in item.number" class="square"
                :style="`background:${item.color}`"
                @click="decrementSquare"
            ></div>
    </div>
</template>
<script>
import { storeManager } from '@/store/index.js'
export default {
data(){
      return {
        // check: false,
        // edit: false,
        // num: 24,
        // color: '#2476CF',
      }
  },
  props: ['item', 'list', 'checked'],
  methods: {
    decrementSquare() {
        this.item.number -= 1
    }
  },
  setup() {
        const useStore = storeManager();     
        return {
          useStore,
        }
  },
}
</script>

<style scoped lang="scss">
.item__right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 50px);
    min-height: 30px;
    padding: 5px 10px;
    margin-left: 30px;
    // background-color: beige;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.square {
    width: 10px;
    height: 10px;
    // background: red;
    margin-right: 2px;
    // opacity: 0;
    // transition: opacity 0.1s;
}
</style>
