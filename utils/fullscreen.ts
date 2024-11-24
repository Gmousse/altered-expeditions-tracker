async function toggleFullScreen() {
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
            await document.exitFullscreen();
            // @ts-ignore
        } else if (document.webkitExitFullscreen) {
            // @ts-ignore
            await document.webkitExitFullscreen();
            // @ts-ignore
        } else if (document.mozCancelFullScreen) {
            // @ts-ignore
            await document.mozCancelFullScreen();
        }
    } else {
        if (screen?.requestFullscreen) {
            await screen.requestFullscreen();
            // @ts-ignore
        } else if (screen?.webkitRequestFullscreen) {
            // @ts-ignore
            await screen.webkitRequestFullScreen();
            // @ts-ignore
        } else if (screen?.mozRequestFullScreen) {
            // @ts-ignore
            await screen.mozRequestFullScreen();
        }
    }
}

export { toggleFullScreen };
