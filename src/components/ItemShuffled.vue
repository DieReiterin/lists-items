<template>
    <div class="item__right">
        <div 
            v-for="square in shuffleArr" class="square"
            :style="`background:${square}`"
        ></div>
    </div>
</template>
  
<script>
export default {
    props: ['shuffleArr'],
}
</script>  
<style scoped lang="scss">
.item__right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: calc(100% - 50px);
    min-height: 30px;
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