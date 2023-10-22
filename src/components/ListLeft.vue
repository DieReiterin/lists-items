<template>
    <div class="list__left">
        <div class="list__header">
            <span 
                class="header__bracket" 
                :style="`transform:${this.list.listStatus.listUnwrapped ? 'rotate(90deg)' : 'rotate(0deg)'}`"
                @click="toggleUnwrap"
                >&#10095;</span>                 
            <input 
                class="header__checkbox" 
                type="checkbox" 
                :class="{
                        'point': this.list.listStatus.listPointed, 
                        'check': this.list.listStatus.listChecked
                        }"
                @click="listChecked"
            >
            <p class="header__title">{{ list.title }}</p>
        </div>
        <item-left
            v-if="this.list.listStatus.listUnwrapped"
            v-for="item in Object.values(list.items)" 
            :item="item"
            :key="item.name"
            :list="this.list"
            />  
    </div> 
</template>

<script>
import ItemLeft from '@/components/ItemLeft.vue'
export default {
    components: {
        ItemLeft,
    },
    data(){
          return {
          }
    },
    props: ['list'],
    methods: {
        toggleUnwrap() {
            this.list.listStatus.listUnwrapped = !this.list.listStatus.listUnwrapped
        },
        listChecked() {
            this.list.listStatus.listShuffled = false

            if(!this.list.listStatus.listChecked) {

                this.list.listStatus.listPointed = false;

                for(const item of Object.values(this.list.items)) {

                    item.itemStatus.itemChecked = true

                }

            } else if(this.list.listStatus.listChecked) {

                for(const item of Object.values(this.list.items)) {

                    item.itemStatus.itemChecked = false
                }
            }
            this.list.listStatus.listChecked = !this.list.listStatus.listChecked
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
}
.list__header {
  margin-bottom: 10px;
  margin-left: 20px;
}
.header__bracket {
  position: absolute;
  left: 10px;
  top: 7px;
  cursor: pointer;
}
.header__title {
  display: inline-block;
  margin: 0;
  padding: 0;
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
  vertical-align: middle;
  cursor: pointer;
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
