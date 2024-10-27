<template>
    <div class="region-tracker">
        <div v-if="!props.reversed" class="region-tracker-count">
            <img
                :src="`/icons/regions/${props.type}.png`"
                :placeholder="props.type"
                class="region-icon"
            />
            <h3>{{ props.value }}</h3>
        </div>
        <div
            :class="
                !props.reversed
                    ? 'region-tracker-button-container'
                    : 'region-tracker-button-container reversed'
            "
        >
            <UButton class="region-tracker-button" @click="$emit('change', -1)">
                -
            </UButton>
            <UButton class="region-tracker-button" @click="$emit('change', 1)">
                +
            </UButton>
        </div>
        <div v-if="props.reversed" class="region-tracker-count">
            <h3 class="reversed">{{ props.value }}</h3>
            <img
                :src="`/icons/regions/${props.type}.png`"
                class="region-icon reversed"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RegionTypeEnum } from "~/entities/Region";

const props = defineProps<{
    value: number;
    type: RegionTypeEnum;
    reversed?: boolean;
}>();
</script>

<style>
.region-tracker {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.region-tracker-count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    flex-grow: 0 1 auto;
}

.region-tracker-button-container {
    height: 30%;
}

.region-tracker-button {
    height: 90%;
    min-width: 10vh;
}

.reversed {
    transform: rotate(180deg);
}
</style>
