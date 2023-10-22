<template>
    <div class="panel__right">
        <list-right
            v-for="list in lists" 
            :list="list"
            :key="list.title"
            :unwrapped="list.listStatus.listUnwrapped"
        />
    </div>
</template>

<script>
import ListRight from '@/components/ListRight.vue'
import { storeManager } from '@/store/index.js'
export default {
  components: {
    ListRight,  
  },
  setup() {
    const useStore = storeManager();
    const lists = Object.values(useStore.lists);
    return {
      useStore,
      lists,
    }
    },
}
</script>

<style scoped lang="scss">
.panel__right {
  width: 30%;
  min-height: 450px;
  // margin-right: 70px;
  padding: 30px 15px;
  outline: 1px solid black;
}
</style>

