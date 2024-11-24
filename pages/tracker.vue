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
                            selected ? setupPlayer2() : setupPlayer1()
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
} from "~/entities/Player";

const players = useState<Map<string, Player>>("players", () => new Map());

setupPlayer1();
setupPlayer2();
function toggleFullScreen() {
    const screen = document.querySelector("#tracker-app");
    //
    if (
        document.fullscreenElement ||
        // @ts-ignore
        document.webkitFullscreenElement ||
        // @ts-ignore
        document.mozFullScreenElement
    ) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // @ts-ignore
        } else if (document.webkitExitFullscreen) {
            // @ts-ignore
            document.webkitExitFullscreen();
            // @ts-ignore
        } else if (document.mozCancelFullScreen) {
            // @ts-ignore
            document.mozCancelFullScreen();
        }
    } else {
        if (screen?.requestFullscreen) {
            screen.requestFullscreen();
            // @ts-ignore
        } else if (screen?.webkitRequestFullscreen) {
            // @ts-ignore
            screen.webkitRequestFullScreen();
            // @ts-ignore
        } else if (screen?.mozRequestFullScreen) {
            // @ts-ignore
            screen.mozRequestFullScreen();
        }
    }
}

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
