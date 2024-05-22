let hourHTML = document.querySelector('.hour')
let minuteHTML = document.querySelector('.minute')
let secondHTML = document.querySelector('.second')
let playPauseHTML = document.querySelector('.play-pause')
let resetHTML = document.querySelector('.reset')

let fontAwesone = document.querySelector('.fa-solid')
console.log(fontAwesone);

let minutes = 0
let seconds = 0
let hours = 0
let intervalVariable;

playPauseHTML.addEventListener('click', () => {

    if (playPauseHTML.classList.contains('pause')) {
        playPauseHTML.classList.remove('pause')
        playPauseHTML.classList.add('play')


        fontAwesone.classList.remove('fa-play')
        fontAwesone.classList.add('fa-pause')
        // playPauseHTML.innerHTML = '⏸'
        // playPauseHTML.style.fontSize = '1rem'
        // playPauseHTML.style.display = 'flex'
        // playPauseHTML.style.paddingTop = '0.33rem'
        // playPauseHTML.style.paddingLeft = '0.33rem'

        intervalVariable = setInterval(() => {

            seconds += 1;

            let conSeconds = seconds.toString()
            if (conSeconds.length === 1) {
                secondHTML.innerText = '0' + seconds
            }


            else {
                secondHTML.innerText = seconds
                if (seconds === 60) {
                    seconds = 0
                    minutes += 1
                    secondHTML.innerText = '0' + 0

                    let conMinute = minutes.toString()
                    if (conMinute.length === 1) {
                        minuteHTML.innerText = "0" + minutes
                    }
                    else {
                        minuteHTML.innerText = minutes;

                        if (minutes === 60) {
                            minutes = 0
                            hours += 1
                            minuteHTML.innerText = '0' + minutes
                            let conHour = hours.toString()
                            if (conHour.length === 1) {
                                hourHTML.innerText = "0" + hours
                            }

                            else {
                                hourHTML.innerText = hours
                            }
                        }
                    }
                }
            }

        }, 1000)
    }

    else if (playPauseHTML.classList.contains('play')) {
        playPauseHTML.classList.remove('play')
        playPauseHTML.classList.add('pause')


        fontAwesone.classList.remove('fa-pause')
        fontAwesone.classList.add('fa-play')
        clearInterval(intervalVariable)
    }
})


resetHTML.addEventListener('click', () => {
    seconds = 0
    minutes = 0
    hours = 0

    secondHTML.innerText = '0' + seconds
    minuteHTML.innerText = '0' + minutes
    hourHTML.innerText = '0'  + hours
    clearInterval(intervalVariable)
    playPauseHTML.classList.remove('play')
    playPauseHTML.classList.add('pause')

    fontAwesone.classList.remove('fa-pause')
    fontAwesone.classList.add('fa-play')
})