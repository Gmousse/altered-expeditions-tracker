<template>
    <UModal
        :model-value="shouldShowModal && !modalIsExplicitelyIgnored"
        fullscreen
    >
        <UCard class="screen-orientation-modal-content">
            <p>
                The tracker app is mainly designed to work on mobile phone in
                landscape mode.
            </p>
            <br />
            <br />
            <p>Please rotate and lock your phone. Or ignore the warning:</p>
            <UButton @click="ignoreModalExplicitely">Ignore</UButton>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { checkIfOrientationInLandscape } from "~/utils/orientation";

const shouldShowModal = ref(false);
const modalIsExplicitelyIgnored = ref(false);

shouldShowModal.value = !checkIfOrientationInLandscape();

screen.orientation.addEventListener("change", (event) => {
    if (event) {
        shouldShowModal.value = !checkIfOrientationInLandscape();
    }
});

function ignoreModalExplicitely() {
    modalIsExplicitelyIgnored.value = true;
}
</script>

<style>
.screen-orientation-modal-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
}
</style>
