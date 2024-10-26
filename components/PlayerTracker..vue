<template>
    <div class="player-tracker">
        <ExpeditionTracker
            :type="ExpeditionTypeEnum.hero"
            :regions="player.expeditions.get(ExpeditionTypeEnum.hero)!.regions"
            :reversed="reversed"
            @change="
                ([regionType, value]: [RegionTypeEnum, number]) =>
                    incrementPlayerExpeditionRegionValue(
                        player,
                        ExpeditionTypeEnum.hero,
                        regionType,
                        value
                    )
            "
        ></ExpeditionTracker>
        <div class="player-actions-container">
            <UButton @click="() => (reversed = !reversed)">Reverse</UButton>
        </div>
        <ExpeditionTracker
            :type="ExpeditionTypeEnum.companion"
            :regions="
                player.expeditions.get(ExpeditionTypeEnum.companion)!.regions
            "
            :reversed="reversed"
            @change="
                ([regionType, value]: [RegionTypeEnum, number]) =>
                    incrementPlayerExpeditionRegionValue(
                        player,
                        ExpeditionTypeEnum.companion,
                        regionType,
                        value
                    )
            "
        ></ExpeditionTracker>
    </div>
</template>

<script setup lang="ts">
import { ExpeditionTypeEnum } from "~/entities/Expedition";
import {
    incrementPlayerExpeditionRegionValue,
    PlayerEnum,
    type Player,
} from "~/entities/Player";
import type { RegionTypeEnum } from "~/entities/Region";

const props = defineProps<{
    playerId: PlayerEnum;
}>();

let reversed = ref(props.playerId === PlayerEnum.player2);

const players = useState<Map<string, Player>>(`players`, () => new Map());
const player = ref(players.value.get(props.playerId)!);
</script>

<style>
.player-tracker {
    display: flex;
    flex-direction: row;
    background: linear-gradient(#00b4e8, #d0e9f1);
    color: #3d331d;
    height: 100%;
    width: 100%;
}

.player-actions-container {
    background-color: #fcf4de;

    /* background: linear-gradient(#fcf4de, #fcf6e5); */
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
