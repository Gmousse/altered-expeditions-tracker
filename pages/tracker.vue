<template>
    <div id="tracker-app">
        <TrackerScreenOrientationModal />
        <div
            class="player-tracker-container"
            v-if="players.has(PlayerEnum.player2)"
        >
            <TrackerPlayer :playerId="PlayerEnum.player2" />
        </div>
        <TrackerActionsContainer
            @fullscreen="toggleFullScreen"
            @reset="resetAllRegions"
            @close="navigateTo('/')"
        />
        <div class="player-tracker-container">
            <TrackerPlayer
                v-if="players.has(PlayerEnum.player1)"
                :playerId="PlayerEnum.player1"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    createNewPlayer,
    PlayerEnum,
    resetAllPlayersExpeditions,
    type Player,
} from "~/entities/Player";
import { toggleFullScreen } from "~/utils/fullscreen";

const players = useState<Map<string, Player>>("players", () => new Map());

setupPlayer1();
setupPlayer2();

function resetAllRegions() {
    for (const player of players.value.values()) {
        resetAllPlayersExpeditions(player);
    }
}

function setupPlayer1() {
    if (!players.value.has(PlayerEnum.player1)) {
        players.value.set(
            PlayerEnum.player1,
            createNewPlayer(PlayerEnum.player1)
        );
    }
    players.value.delete(PlayerEnum.player2);
}

function setupPlayer2() {
    if (!players.value.has(PlayerEnum.player2)) {
        players.value.set(
            PlayerEnum.player2,
            createNewPlayer(PlayerEnum.player2)
        );
    }
}
</script>

<style>
#tracker-app:-webkit-full-screen {
    width: 100%;
    height: 100%;
}

#tracker-app {
    touch-action: none;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
}

.toggle {
    > div > div > label {
        color: red !important;
    }
}

.player-tracker-container {
    min-height: 40%;
    flex-grow: 2;
}

@media screen and (orientation: portrait) {
    #tracker-app {
        display: flex;
        width: 100vh;
        height: 50vh;
        transform: rotate(90deg) translate(25vh, 55%);
    }
}

@media screen and (orientation: landscape) {
    /* Nothing to do */
}
</style>
