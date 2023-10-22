<template>
    <div class="panel__left">
        <list-left
            v-for="list in lists" 
            :list="list"
            :key="list.title"
        />
    </div>
</template>

<script>
import ListLeft from '@/components/ListLeft.vue'
import { storeManager } from '@/store/index.js'
export default {
  components: {
    ListLeft,
  },
  methods: {
    // toggleUnwrap(listName) {
    //   this.$emit('toggleUnwrap', listName)
    // }
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
.panel__left {
  width: 30%;
  min-height: 450px;
  margin-right: 70px;
  padding: 30px 15px;
  outline: 1px solid black;
}
</style>
