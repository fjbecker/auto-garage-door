input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onSound(DetectedSound.Loud, function () {
    clap_count += 1
})
hummingbird.startHummingbird()
let clap_count = 0
basic.forever(function () {
    if (clap_count == 2) {
        hummingbird.setPositionServo(FourPort.One, 90)
        if (clap_count == 4) {
            hummingbird.setPositionServo(FourPort.One, 90)
            clap_count = 0
        }
    }
})
