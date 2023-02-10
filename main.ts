input.onButtonPressed(Button.A, function () {
    led.unplot(4, 4)
    led.unplot(3, 4)
    led.plot(2, 4)
    led.plot(1, 4)
    led.plot(0, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.plot(3, 4)
    led.plot(4, 4)
    led.plot(2, 4)
})
let pongx = 0
let pongy = 0
pongy += 0
pongx += 0
loops.everyInterval(1000, function () {
    pongx += randint(0, 4)
    pongy += 0
})
loops.everyInterval(1000, function () {
    led.unplot(pongx, pongy)
})
loops.everyInterval(500, function () {
    led.plot(pongx, pongy)
})
