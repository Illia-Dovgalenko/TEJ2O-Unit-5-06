/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: March 2026
 * This program the distance using a sonar
*/


// setup
let distance = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.showNumber(distance)
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )


    // finding the distance
    basic.showNumber(distance)
    basic.showIcon(IconNames.Happy)
})

