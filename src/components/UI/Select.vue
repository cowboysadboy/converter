<script setup>
import { ref } from 'vue'
defineProps({
    label: {
        type: String,
        required: false
    },
    data: {
        type: Object,
        required: false
    },
})
const event = ref('RUB')
</script>
<template>
    <div class="select">
        <label v-if="label" class="select__label">{{ label }}</label>
        <select v-model="event" @change="$emit('changeEvent', event)" class="select__element">
            <option v-for="event, key in data" :key class="select__option" :value="key">
                {{ key }}</option>
        </select>
    </div>
</template>
<style lang="scss">
.select {
    display: flex;
    flex-direction: column;

    &__label {
        color: rgb(131, 131, 131);
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 4px
    }

    &__element {
        padding: 12px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px rgba(70, 70, 70, 0.15);
        height: 37px;
        width: 80px;
        font-size: 12px;
        font-weight: 400;
        color: #464646;
    }

    &__option {
        font-size: 12px;
        font-weight: 400;
    }
}
</style>