<template>
  <div class="container">
    <panel-left/>
    <panel-right/>
  </div>
</template>

<script>
import PanelLeft from '@/components/PanelLeft.vue'
import PanelRight from '@/components/PanelRight.vue'
import { listsData } from '@/constants/lists.js'
import { storeManager } from '@/store/index.js'

export default {
  name: 'App',
  components: {
    PanelLeft, PanelRight
  },
  setup() {
        const useStore = storeManager();
        const lists = listsData;
        
        for(const list of lists) {
          useStore.storeLists.push(list)
        }  
        for(const list of lists) {
            const newList = {
              'status': {
                'listUnwrapped': false, 
                'listChecked': false, 
                'listPointed': false
              }
            }

            for(const item of list.items) {
              newList[item.name] = false
            }
            
            useStore.unwrapData[list.title] = newList;
        }
    },
}
</script>

<style lang="scss">
.container {
  -webkit-user-drag: none;
  user-select: none;
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  margin: 0;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  // background-color: lightgray;
  // outline: 1px solid red;
}
</style>
