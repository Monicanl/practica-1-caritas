Izquierda = False

def on_forever():
    global Izquierda
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 20 and maqueen.ultrasonic(PingUnit.CENTIMETERS) != 0:
        Izquierda = Math.random_boolean()
        if Izquierda == True:
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(500)
        if Izquierda == False:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
    else:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
basic.forever(on_forever)
