<template>
    <div id="tracker-home">
        <header>
            <UHorizontalNavigation
                :links="navigationLinks"
                class="border-b border-gray-200 dark:border-gray-800"
            />
        </header>
        <main>
            <section>
                <h1>Altered expeditions tracker</h1>
                <h2>
                    A browser in-game tracker for your
                    <ULink
                        active-class="text-primary"
                        inactive-class="text-primary"
                        target="_blank"
                        to="https://www.altered.gg"
                        >AlteredTCG</ULink
                    >
                    expeditions !
                </h2>
            </section>
            <section>
                <p>Prepare your hero, shuffle your deck and...</p>
                <UButton size="xl">
                    <NuxtLink to="/tracker">Start a game !</NuxtLink>
                </UButton>
            </section>
            <section>
                <p>
                    The tracker is a safe client-only webapp, without user data
                    tracking; It's just a bunch of html / javascript.
                </p>
                <p>
                    If you want to participate to the development, submit issues
                    or new ideas, visit the
                    <ULink
                        active-class="text-primary"
                        inactive-class="text-primary"
                        target="_blank"
                        to="https://www.altered.gg"
                        ><UIcon name="uil:github"></UIcon> Github page</ULink
                    >
                </p>
            </section>
        </main>
        <footer>
            Made with <UIcon name="uil:heart-sign"></UIcon> from Lille
        </footer>
    </div>
</template>

<script lang="ts" setup>
const navigationLinks = [
    {
        label: "Home",
        icon: "uil:home",
        to: "/index",
        active: true,
    },
    {
        label: "In-game Tracker",
        icon: "uil:dice-five",
        to: "/tracker",
    },
    {
        label: "Github",
        icon: "uil:github",
        to: "https://github.com/Gmousse/altered-expeditions-tracker",
        inactive: true,
        target: "_blank",
    },
];
</script>

<style>
#tracker-home {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: space-between;
}

section {
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

section > p {
    margin-bottom: 1vh;
}

footer {
    flex-shrink: 0;
}
</style>
