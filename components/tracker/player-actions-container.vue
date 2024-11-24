<template>
    <div
        :class="
            !reversed
                ? 'player-actions-container'
                : 'player-actions-container reversed'
        "
    >
        <UButton @click="$emit('reverse')"><UIcon name="uil-sort" /> </UButton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    reversed?: boolean;
}>();
</script>

<style>
.player-actions-container {
    background-color: #fcf4de;

    /* background: linear-gradient(#fcf4de, #fcf6e5); */
    height: 100%;
    min-width: 5%;
    max-width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.player-actions-container > button {
    justify-content: center;
    margin-right: 2px;
    margin-left: 2px;
}
</style>
