<template>
    <div class="item__right">


        <!-- <h3>shuffled</h3> -->
        <!-- <h3>{{item}}</h3> -->
        <!-- <h4>{{this.useStore.unwrapData[list.title]}}</h4> -->


            <div 
            v-for="square in shuffledSquares" class="square"
            :style="`background:${square}`"
            @click="decrementSquare"
            ></div>
    </div>
</template>
  
<script>
import { storeManager } from '@/store/index.js';
export default {
    data(){
        return {
            // check: false,
            // edit: false,
            // num: 24,
            // color: '#2476CF',
        }
    },
    props: ['shuffledSquares'],
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
    margin-bottom: 2px;
    // opacity: 0;
    // transition: opacity 0.1s;
}
</style>