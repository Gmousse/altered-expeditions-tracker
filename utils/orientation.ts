function checkIfOrientationInLandscape() {
    return screen.orientation.type.startsWith("landscape");
}

export { checkIfOrientationInLandscape };
