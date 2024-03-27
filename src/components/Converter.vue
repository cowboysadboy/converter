<script setup>
import Select from '@/components/UI/Select.vue'
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const store = useStore
store.dispatch('fetchCurrency', 'rub');

const ListCurrency = computed(() => {
    return store.getters.getCurrency
})

const difference = computed(() => {
    if (!store.getters.getCurrency) {
        return []
    }
    return store.getters.getCurrency[currencyTo.value]
})

const currencyTo = ref('RUB')
const valueFrom = ref(1)
const valueTo = ref(1)

const changeSelectFrom = (n) => {
    store.dispatch('fetchCurrency', n);
    changeInputTo()
}
const changeSelectTo = (n) => {
    currencyTo.value = n
    changeInputFrom()
}

const changeInputFrom = () => {
    valueTo.value = (valueFrom.value * difference.value).toFixed(2)
}
const changeInputTo = () => {
    valueFrom.value = (valueTo.value / difference.value).toFixed(2)
}

</script>
<template>
    <div class="converter">
        <div class="converter__input">
            <div class="input">
                <label class="input__label" for="from">From</label>
                <input class="input__element" id="from" type="text" v-model="valueFrom" @input="changeInputFrom">
            </div>
            <Select :data="ListCurrency" @change-event="changeSelectFrom" />
        </div>
        <div class="converter__input">
            <div class="input">
                <label class="input__label" for="to">To</label>
                <input class="input__element" id="to" type="text" v-model="valueTo" @input="changeInputTo">
            </div>
            <Select :data="ListCurrency" @change-event="changeSelectTo" />
        </div>
    </div>
</template>
<style lang="scss">
.converter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &__input {
        display: flex;
        align-items: flex-end;
        margin-right: 32px;
        margin-bottom: 10px;


        .input {
            display: flex;
            flex-direction: column;
            margin-right: 8px;

            &__label {
                color: rgb(72, 72, 72);
                font-size: 12px;
                font-weight: 500;
                margin-bottom: 4px;
            }

            &__element {
                border: none;
                border-radius: 8px;
                box-shadow: 0px 0px 10px 0px rgba(70, 70, 70, 0.15);
                background: rgb(255, 255, 255);
                height: 37px;
                padding: 0 12px;
                color: rgb(131, 131, 131);
                font-size: 12px;
                font-weight: 500;
            }
        }
    }
}
</style>
