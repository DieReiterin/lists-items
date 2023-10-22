<template>
    <div class="list__right">
        <div class="list__header">            
            <p class="header__title">{{ list.title }}</p>
            <button 
                v-if="unwrapped && btnShowCheck()"
                class="header__btn"
                @click="clickShuffleSort"
            >{{this.list.listStatus.listShuffled ? `Сортировать` : `Перемешать`}}
          </button>
        </div>
        <template v-if="unwrapped">
            <item-right
                v-if="!this.list.listStatus.listShuffled"             
                v-for="item in Object.values(list.items)" 
                :item="item"
                :list="this.list"
                :key="item.name"
                :checked="list.items[item.name].itemStatus.itemChecked"
            />
            <item-shuffled
                v-if="this.list.listStatus.listShuffled"             
                :shuffleArr="this.shuffleArr"
            />   
        </template>
    </div> 
</template>

<script>
import ItemRight from '@/components/ItemRight.vue'
import ItemShuffled from '@/components/ItemShuffled.vue'
export default {
    components: {
        ItemRight, ItemShuffled,
    },
    data(){
          return {
              shuffleArr: [],
          }
      },
    props: ['list', 'unwrapped'],
    methods: {
        clickShuffleSort() {
          if(!this.list.listStatus.listShuffled){
            this.refreshShuffleArr(this.list)
          }
          this.list.listStatus.listShuffled = !this.list.listStatus.listShuffled
        },
        btnShowCheck() {
          let show = 0
          for (let itemObj of Object.values(this.list.items)) {
            
            if(this.list.items[itemObj.name].itemStatus.itemChecked  
                && this.list.items[itemObj.name].number > 0) {
              show++
            }
          }
          return show > 1
        },
        refreshShuffleArr(list) {
          function shuffle(array) {
              let currentIndex = array.length,  randomIndex;
              while (currentIndex > 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                  array[randomIndex], array[currentIndex]];
              }
              return array;
          }
          const newArr = [];
          
          for (let itemObj of Object.values(list.items)) {
            
            if(!this.list.items[itemObj.name].itemStatus.itemChecked) {
                  continue
                }

            for(let i = 0; i < itemObj.number; i++) {
              newArr.push(itemObj.color)
            }
          }


          this.shuffleArr = [];
          for (let square of shuffle(newArr)) {
            this.shuffleArr.push(square)
          }
          
        }
    }
}
</script>

<style scoped lang="scss">
.list__right {
  position: relative;
  min-height: 20px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.list__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: 20px;
}
.header__title {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-right: 10px;
  line-height: 20px;
}
.header__btn {
    all: unset;
    min-width: 30px;
    height: 10px;
    padding: 5px 7px 7px 5px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    background-color: rgb(1, 167, 253);
    box-shadow: 3px 5px 10px 0px rgba(35, 100, 210, 0.2);
    cursor: pointer;
}
</style>
