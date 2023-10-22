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
        const storeLists = listsData;
        
        for(const list of Object.values(storeLists)) {

            list.listStatus = {
                'listUnwrapped': false, 
                'listChecked': false, 
                'listPointed': false,
                'listShuffled': false
              }

            for(const item of Object.values(list.items)) {
              item.itemStatus = { 
                'itemChecked': false, 
              }
            }

          useStore.lists = storeLists
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
