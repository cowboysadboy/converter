<script setup>
import { ref } from 'vue'
defineProps({
    placeholder: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: false
    }, 

    event: {
        type: String,
        required: false
    }
})
const event = ref('')
</script>
<template>
    <div class="input">
        <label v-if="label" class="input__label">{{ label }}</label>
        <input v-model="event" @input="$emit('changeEvent', event)" class="input__element" :placeholder="placeholder"
            type="text">
    </div>
</template>
<style lang="scss">
.input {
    display: flex;
    flex-direction: column;

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
</style>