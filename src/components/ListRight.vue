<template>
    <div class="list__left">
        <div class="list__header">            
            <p class="header__title">{{ list.title }}</p>
            <button 
            v-if="unwrapped"
            class="header__btn"
            @click="clickShuffleSort()"
            >Перемешать</button>
        </div>
        <template v-if="unwrapped">
          <item-right
              v-if="!shuffled"             
              v-for="item in list.items" 
              :item="item"
              :list="this.list"
              :key="item.name"
          />
          <item-shuffled
              v-if="shuffled"             
              :shuffledSquares="this.shuffleArr"
          />   
        </template>
    </div> 
</template>

<script>
import ItemRight from '@/components/ItemRight.vue'
import ItemShuffled from '@/components/ItemShuffled.vue'
import { storeManager } from '@/store/index.js'
export default {
  components: {
    ItemRight, ItemShuffled,
  },
  data(){
        return {
            shuffled: false,
            shuffleArr: [],
        }
    },
  props: ['list', 'unwrapped'],
  setup() {
        const useStore = storeManager();     
        return {
          useStore,
        }
  },
  methods: {
    clickShuffleSort() {
      if (!this.shuffled) {
        this.shuffleSquares(this.list.items)
      } else {
        this.shuffled = false
      }
    },
    shuffleSquares(itemsArr) {
      this.shuffled = true;
      const squaresArr = []; 

      for (let arrItem of itemsArr) {
        if(!this.useStore.unwrapData[this.list.title][arrItem.name]) {          
          continue
        }
        for(let i = 0; i < arrItem.number; i++) {
          // let newItem = {'number'}
          squaresArr.push(arrItem.color)
        }
      }

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

      // shuffle(squaresArr);
      this.shuffleArr = [];
      for (let it of shuffle(squaresArr)) {
        this.shuffleArr.push(it)
      }
      
      // console.log(shuffle(squaresArr));
    }
  }
}
</script>

<style scoped lang="scss">
.list__left {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
//   padding-left: 30px;
  // cursor: pointer;
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
    // max-width: 164px;
    height: 10px;
    padding: 5px 7px 7px 5px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    // font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: rgb(1, 167, 253);
    box-shadow: 3px 5px 10px 0px rgba(35, 100, 210, 0.2);
    cursor: pointer;
}
</style>
