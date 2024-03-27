<script setup>
import Input from '@/components/UI/InputSearch.vue'
import Select from '@/components/UI/Select.vue'
import ListRates from '@/components/ListRates.vue'
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const store = useStore
store.dispatch('fetchCurrency', 'rub');

const ListCurrency = computed(() => {
    return store.getters.getCurrency
})

const filterValue = ref("")

const FilterCurrency = computed(() => {
    if (!store.getters.getCurrency) {
        return []
    }
    return Object.entries(store.getters.getCurrency)
        .map(([key, value]) => ({ [key]: value }))
        .filter(elem => (Object.keys(elem) + '').includes(filterValue.value.toUpperCase()));

})

const changeSelect = (n) => {
    store.dispatch('fetchCurrency', n);
}
const changeInput = (n) => {
    filterValue.value = n
}
</script>
<template>
    <div class="list">
        <div class="list__ui">
            <Input :label="'From'" :placeholder="'Search'" @change-event="changeInput" />
            <Select :data="ListCurrency" :label="'Currency'" @change-event="changeSelect" />
        </div>
        <ListRates :counts="FilterCurrency" />
    </div>
</template>
<style lang="scss">
.list {
    width: 100%;

    &__ui {
        display: flex;
        justify-content: space-between;
    }
}
</style>
