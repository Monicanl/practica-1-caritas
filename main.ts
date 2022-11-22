input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
