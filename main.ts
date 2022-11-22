input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
    basic.pause(500)
    basic.clearScreen()
})
