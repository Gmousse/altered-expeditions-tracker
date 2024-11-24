<template>
    <div class="player-tracker">
        <TrackerExpedition
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
        ></TrackerExpedition>
        <div
            :class="
                !reversed
                    ? 'player-actions-container'
                    : 'player-actions-container reversed'
            "
        >
            <UButton @click="() => (reversed = !reversed)"
                ><UIcon name="uil-sort" />
            </UButton>
        </div>
        <TrackerExpedition
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
        ></TrackerExpedition>
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
