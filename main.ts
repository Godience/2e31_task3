let go = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        go += 1
        basic.showNumber(go)
    }
})
