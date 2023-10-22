<template>
    <div class="item__right" 
        v-if="checked"
    >
        <div class="square"
            v-for="square in item.number"
            :style="`background:${item.color}`"
            @click="decrementSquare"
        >
        </div>
    </div>
</template>
<script>
export default {
    props: ['item', 'checked'],
    methods: {
      decrementSquare() {
          this.item.number -= 1
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
    min-height: 20px;
    padding: 5px 10px;
    margin-left: 30px;
    outline: 1px solid #ccc;
    border-radius: 4px;
}
.square {
    width: 10px;
    height: 10px;
    margin-right: 2px;
    margin-bottom: 2px;
    outline: 1px solid black;
}
</style>
