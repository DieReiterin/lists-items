<template>
    <div class="item__left">
        <input 
            class="item__checkbox" 
            type="checkbox" 
            :class="{'check': this.useStore.unwrapData[this.list.title][this.item.name]}"
            @click="itemClick"
        >
        <p class="item__title">{{ item.name }}</p>
        <input class="item__number-input" v-model="item.number" type="number" min="0" max="50">
        <input class="item__color" v-model="item.color" type="color">
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
  props: ['item', 'list'],
  methods: {
    itemClick() {
        if(this.useStore.unwrapData[this.list.title][this.item.name]) {
            this.itemCheckUp()
        } else if(!this.useStore.unwrapData[this.list.title][this.item.name]) {
            this.itemCheckDown()
        }
    },
    itemCheckUp() {
        this.useStore.unwrapData[this.list.title][this.item.name] = false;
        this.parentPointRefresh()
        this.parentCheckRefresh()        
    },
    itemCheckDown() {
        this.useStore.unwrapData[this.list.title][this.item.name] = true
        this.parentCheckRefresh()
    },
    parentPointRefresh() {
        let point = false;

        for(const key of Object.keys(this.useStore.unwrapData[this.list.title])) {
          if(key !== 'status' && key !== this.list.title) {
                if(this.useStore.unwrapData[this.list.title][key] === true) {
                    point = true
                }
          }
        }

        if(point) {
            this.useStore.unwrapData[this.list.title].status.listPointed = true
        } else if(!point) {
            this.useStore.unwrapData[this.list.title].status.listPointed = false
        }

    },
    parentCheckRefresh() {
        let check = true;

        for(const key of Object.keys(this.useStore.unwrapData[this.list.title])) {
          if(key !== 'status' && key !== this.list.title) {
                if(this.useStore.unwrapData[this.list.title][key] === false) {
                    check = false
                }
          }
        }

        if(check) {
            this.useStore.unwrapData[this.list.title].status.listPointed = false
            this.useStore.unwrapData[this.list.title].status.listChecked = true
        } else if(!check) {
            this.useStore.unwrapData[this.list.title].status.listChecked = false
            this.parentPointRefresh()

        }

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
.item__left {
    display: flex;
    align-items: center;
    width: calc(100% - 60px);
    height: 30px;
    margin-left: 30px;
    padding: 5px 10px;
    // background-color: beige;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.item__title {
    margin: 0 100px 0 0;
    padding: 0;
    // display: inline-block;
    // margin-right: 10px;
    line-height: 20px;
}
.item__checkbox {
    margin: 0;
    padding: 0;
    appearance: none;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    vertical-align: middle;
}
.item__checkbox::before {
    content: '\2714';
    display: inline-block;
    width: 6px;
    height: 6px;
    position: relative;
    top: 0;
    left: 4px;
    opacity: 0;
    transition: opacity 0.1s;
    border-radius: 2px;
}
.check::before {
    opacity: 1;
}
// .item__number-p {
//     height: 20px;
//     min-width: 170px;
//     margin: 0;
//     text-align: left;
//     padding: 7px 0 5px 5px;
//     outline: 1px solid #ccc;
//     border-radius: 5px;
// }
.item__number-input {
    width: 40px;
    margin-right: 10px;
    border: none;
}
.item__color {
    width: 20px;
    height: 25px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
}
</style>
