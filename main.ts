let Izquierda = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        Izquierda = Math.randomBoolean()
        if (Izquierda == true) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
        if (Izquierda == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
