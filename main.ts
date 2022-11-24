let distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
basic.forever(function () {
    if (distancia < 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
        basic.pause(1000)
    } else {
        if (distancia == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        }
    }
})
