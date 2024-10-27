<template>
    <div id="tracker-app">
        <div
            class="player-tracker-container"
            v-if="players.has(PlayerEnum.player2)"
        >
            <PlayerTracker :playerId="PlayerEnum.player2" />
        </div>
        <div class="tracker-app-actions-container">
            <UButton @click="toggleFullScreen" size="xl">
                <p>FullScreen</p>
                <UIcon name="uil-focus" />
            </UButton>
            <UButton @click="resetAllRegions" size="xl">
                <p>Reset</p>
                <UIcon name="uil-refresh" />
            </UButton>
            <UFormGroup class="toggle" label="2 Players">
                <UToggle
                    size="xl"
                    :modelValue="players.has(PlayerEnum.player2)"
                    @change="
                        (selected: Boolean) =>
                            selected ? setup2Players() : setup1Player()
                    "
                />
            </UFormGroup>
        </div>
        <div class="player-tracker-container">
            <PlayerTracker
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
} from "./entities/Player";

const players = useState<Map<string, Player>>("players", () => new Map());

setup1Player();

const isFullscreen = ref(false);

function toggleFullScreen() {
    const screen = document.querySelector("#app");
    //
    if (!isFullscreen.value) {
        if (screen?.requestFullscreen) {
            screen.requestFullscreen();
            // @ts-ignore
        } else if (screen?.webkitRequestFullScreen) {
            // @ts-ignore
            screen.webkitRequestFullScreen();
            // @ts-ignore
        } else if (screen?.mozRequestFullScreen) {
            // @ts-ignore
            screen.mozRequestFullScreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // @ts-ignore
        } else if (document.webkitCancelFullScreen) {
            // @ts-ignore
            document.webkitCancelFullScreen();
            // @ts-ignore
        } else if (document.mozCancelFullScreen) {
            // @ts-ignore
            document.mozCancelFullScreen();
        }
    }

    isFullscreen.value = !isFullscreen.value;
}

function resetAllRegions() {
    for (const player of players.value.values()) {
        resetAllPlayersExpeditions(player);
    }
}

function setup1Player() {
    if (!players.value.has(PlayerEnum.player1)) {
        players.value.set(
            PlayerEnum.player1,
            createNewPlayer(PlayerEnum.player1)
        );
    }
    players.value.delete(PlayerEnum.player2);
}

function setup2Players() {
    if (!players.value.has(PlayerEnum.player2)) {
        players.value.set(
            PlayerEnum.player2,
            createNewPlayer(PlayerEnum.player2)
        );
    }
}
</script>

<style>
#tracker-app {
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
}

.tracker-app-actions-container {
    /* background: linear-gradient(#fcf4de, #fcf6e5); */
    background-color: #fcf4de;
    min-height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
