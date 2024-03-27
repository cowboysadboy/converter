<script setup>
defineProps({
    counts: {
        type: Array,
        required: false
    },
})
const getKey = (value) => {
    return Object.keys(value)[0]
}
const getValue = (value) => {
    return Object.values(value)[0]
}
</script>
<template>
    <div v-for="elem, i in counts" :key="i" class="rates">
        <span class="rates__name">{{ getKey(elem) }}</span>
        <span class="rates__count"> {{ getValue(elem) }}</span>
    </div>
</template>
<style lang="scss" scoped>
.rates {
    display: flex;
    padding: 24px 12px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(70, 70, 70, 0.25);
    color: rgb(70, 70, 70);
    font-size: 14px;
    font-weight: 600;
}
</style>
