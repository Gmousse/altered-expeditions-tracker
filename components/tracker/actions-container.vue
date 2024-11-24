<template>
    <div id="tracker-app-actions-container">
        <UButton @click="$emit('fullscreen')" size="md">
            <p>FullScreen</p>
            <UIcon name="uil:focus" />
        </UButton>
        <UButton @click="$emit('reset')" size="md">
            <p>Reset</p>
            <UIcon name="uil:refresh" />
        </UButton>
        <UButton @click="$emit('close')" size="md">
            <p>Close</p>
            <UIcon name="uil:multiply" />
        </UButton>
    </div>
</template>

<style>
#tracker-app-actions-container {
    background-color: #fcf4de;
    min-height: 10vh;
    max-height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#tracker-app-actions-container > button {
    margin-top: 2px;
    margin-bottom: 2px;
}
</style>
