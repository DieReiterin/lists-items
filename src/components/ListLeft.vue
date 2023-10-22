<template>
    <div class="list__left">
        <div class="list__header">
            <span 
                class="header__bracket" 
                :style="`transform:${this.useStore.unwrapData[this.list.title].status.listUnwrapped ? 'rotate(90deg)' : 'rotate(0deg)'}`"
                @click="toggleUnwrap"
                >&#10095;</span>                 
            <input 
                class="header__checkbox" 
                type="checkbox" 
                :class="{
                        'point': this.useStore.unwrapData[this.list.title].status.listPointed, 
                        'check': this.useStore.unwrapData[this.list.title].status.listChecked
                        }"
                @click="listChecked"
            >
            <p class="header__title">{{ list.title }}</p>
        </div>
        <item-left
            v-if="this.useStore.unwrapData[this.list.title].status.listUnwrapped"
            v-for="item in list.items" 
            :item="item"
            :key="item.name"
            :list="this.list"
            />  
            <!-- @itemClick="itemClick" -->
    </div> 
</template>

<script>
import ItemLeft from '@/components/ItemLeft.vue'
import { storeManager } from '@/store/index.js'
export default {
  components: {
    ItemLeft,
  },
  data(){
        return {
            // point: false,
            // check: false,
            // unwrapped: false,
        }
  },
  props: ['list'],
  methods: {
    // itemClick() {
    //   // const pointNeeded = false;
    //   for(const key of Object.keys(this.useStore.unwrapData[this.list.title])) {
    //       if(key !== 'listUnwrapped') {
    //         if (this.useStore.unwrapData[this.list.title][key]){this.point = true}
    //       }
    //     }
    // },
    toggleUnwrap() {
      this.useStore.unwrapData[this.list.title].status.listUnwrapped = !this.useStore.unwrapData[this.list.title].status.listUnwrapped
    },
    listChecked() {
      if(!this.useStore.unwrapData[this.list.title].status.listChecked) {
          this.useStore.unwrapData[this.list.title].status.listPointed = false
          for(const key of Object.keys(this.useStore.unwrapData[this.list.title])) {
              if(key !== 'status') {
                  this.useStore.unwrapData[this.list.title][key] = true
              }
          }
      } else if(this.useStore.unwrapData[this.list.title].status.listChecked) {
          for(const key of Object.keys(this.useStore.unwrapData[this.list.title])) {
              if(key !== 'status') {
                  this.useStore.unwrapData[this.list.title][key] = false
              }
          }
      }
      this.useStore.unwrapData[this.list.title].status.listChecked = !this.useStore.unwrapData[this.list.title].status.listChecked
    }
  },
  setup() {
        const useStore = storeManager(); 
        // const listUnwrapped = useStore.unwrapData[props.list.title].status.listUnwrapped;    
        // const listChecked = useStore.unwrapData[props.list.title].status.listChecked;    
        // const listPointed = useStore.unwrapData[props.list.title].status.listPointed;    
        return {
          useStore,
          // listChecked,
          // listUnwrapped,
          // listPointed,
        }
    },
}
</script>

<style scoped lang="scss">
.list__left {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  // padding-left: 30px;
  // cursor: pointer;
}
.list__header {
  margin-bottom: 10px;
  margin-left: 20px;
}
.header__bracket {
  position: absolute;
  left: 10px;
  top: 7px;
  // transform: translateY(-50%);
  // transform: ;
}
.header__title {
  margin: 0;
  padding: 0;
  display: inline-block;
  // margin-right: 10px;
  line-height: 20px;
}
.header__checkbox {
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
.header__checkbox::before {
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
.header__checkbox::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #000;
  position: relative;
  top: -2px;
  left: 1px;
  opacity: 0;
  transition: opacity 0.1s;
  border-radius: 2px;
}
.point::after {
  opacity: 1;
}
</style>
