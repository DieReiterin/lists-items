<template>
    <div class="item__left">
        <input 
            class="item__checkbox" 
            type="checkbox" 
            :class="{'check': item.itemStatus.itemChecked}"
            @click="itemClick()"
        >
        <p class="item__title">{{ item.name }}</p>
        <input 
            class="item__number-input" 
            v-model="item.number" 
            type="number" 
            min="0"
            @input="listUnshuffle()"
        >
        <input 
            class="item__color" 
            v-model="item.color" 
            type="color"
            @input="listUnshuffle()"
        >
    </div>
</template>

<script>
export default {
  props: ['item', 'list'],
  methods: {
    listUnshuffle() {
        this.list.listStatus.listShuffled = false
    },
    itemClick() {
        this.list.listStatus.listShuffled = false

        if(this.list.items[this.item.name].itemStatus.itemChecked) {
            this.itemCheckUp()
        } else if(!this.list.items[this.item.name].itemStatus.itemChecked) {
            this.itemCheckDown()
        }
    },
    itemCheckUp() {
        this.list.items[this.item.name].itemStatus.itemChecked = false;
        this.list.listStatus.listChecked = false
        this.parentPointRefresh()
        this.parentCheckRefresh()                
    },
    itemCheckDown() {
        this.list.items[this.item.name].itemStatus.itemChecked = true
        this.parentPointRefresh()
        this.parentCheckRefresh()
    },
    parentPointRefresh() {

        let point = false;

        for(const item of Object.values(this.list.items)) {
            if(item.itemStatus.itemChecked) {
                point = true
            }
        }

        if(point) {
            this.list.listStatus.listPointed = true
        } else if(!point) {
            this.list.listStatus.listPointed = false
        }
    },
    parentCheckRefresh() {
        let check = true;

        for(const item of Object.values(this.list.items)) {
            if(!item.itemStatus.itemChecked) {
                check = false
            }
        }

        if(check) {
            this.list.listStatus.listPointed = false

            this.list.listStatus.listChecked = true
        }
    }
  },
}
</script>

<style scoped lang="scss">
.item__left {
    display: flex;
    align-items: center;
    width: calc(100% - 60px);
    height: 30px;
    margin-left: 30px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.item__title {
    margin: 0 100px 0 0;
    padding: 0;
    line-height: 20px;
}
.item__checkbox {
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
.item__checkbox::before {
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
.item__number-input {
    width: 40px;
    margin-right: 10px;
    border: none;
}
.item__color {
    width: 20px;
    height: 25px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
}
</style>
