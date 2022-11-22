def on_gesture_shake():
    basic.show_number(randint(0, 6))
    basic.pause(500)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
