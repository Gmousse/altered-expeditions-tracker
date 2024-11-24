<template>
    <div class="expedition-tracker">
        <img
            v-if="props.type === ExpeditionTypeEnum.hero"
            :class="
                !props.reversed ? 'expedition-icon' : 'expedition-icon reversed'
            "
            :src="`icons/${props.type}.png`"
            :placeholder="props.type"
        />
        <TrackerRegion
            :type="RegionTypeEnum.forest"
            :value="props.regions.get(RegionTypeEnum.forest)!.counter"
            :reversed="props.reversed"
            @change="
                (value: number) =>
                    $emit('change', [RegionTypeEnum.forest, value])
            "
        />
        <TrackerRegion
            :type="RegionTypeEnum.mountain"
            :value="props.regions.get(RegionTypeEnum.mountain)!.counter"
            :reversed="props.reversed"
            @change="
                (value: number) =>
                    $emit('change', [RegionTypeEnum.mountain, value])
            "
        />
        <TrackerRegion
            :type="RegionTypeEnum.water"
            :value="props.regions.get(RegionTypeEnum.water)!.counter"
            :reversed="props.reversed"
            @change="
                (value: number) =>
                    $emit('change', [RegionTypeEnum.water, value])
            "
        />
        <img
            v-if="props.type === ExpeditionTypeEnum.companion"
            :class="
                !props.reversed ? 'expedition-icon' : 'expedition-icon reversed'
            "
            :src="`icons/${props.type}.png`"
            :placeholder="props.type"
        />
    </div>
</template>

<script setup lang="ts">
import { ExpeditionTypeEnum } from "~/entities/Expedition";
import { RegionTypeEnum, type Region } from "~/entities/Region";

const props = defineProps<{
    type: ExpeditionTypeEnum;
    regions: Map<RegionTypeEnum, Region>;
    reversed?: boolean;
}>();
</script>

<style>
.expedition-tracker {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
}

.expedition-icon {
    max-width: 3em;
    max-height: 3em;
}
</style>
