const input = document.getElementById('input')
const nameList = document.getElementById('name-list')
const display = document.getElementById('display')
const shuffle = document.getElementById('shuffle')
const reset = document.getElementById('reset')
const inputFile = document.getElementById('input-file')
const checkbox = document.getElementById('checkbox')
const ready = document.getElementById('ready')

var Position1 = null;
var Position2 = null;
var Position3 = null;
var Position4 = null;
var Position5 = null;
var Position6 = null;
var Position7 = null;
var Position8 = null;
var Position9 = null;
var Position10 = null;

let participantNames = []

let htmlElements =
    document.getElementById("numbercheck");
ready.addEventListener('click', function (event) {
    if (input.value === '') {
        Swal.fire('Oops...', 'Name List is empty!', 'info')
    } else {
        let contestantName = input.value.split(/[\n,]+/).map(arr => arr.trim())
        participantNames = [...contestantName]
        input.value = participantNames.join('\n')

        ready.setAttribute('disabled', false)
        input.setAttribute('disabled', false)
    }
})

var checkclick = 1;
shuffle.addEventListener('click', function (event) {
    for (let i = 0; i < htmlElements.value; i++) {
        var setnum = i + 1;

        switch (setnum) {
            case 1:
                // code block
                Position1 = document.getElementById('position1');
                break;
            case 2:
                // code block
                Position2 = document.getElementById('position2');
                break;
            case 3:
                // code block
                Position3 = document.getElementById('position3');
                break;
            case 4:
                // code block
                Position4 = document.getElementById('position4');
                break;
            case 5:
                // code block
                Position5 = document.getElementById('position5');
                break;
            case 6:
                // code block
                Position6 = document.getElementById('position6');
                break;
            case 7:
                // code block
                Position7 = document.getElementById('position7');
                break;
            case 8:
                // code block
                Position8 = document.getElementById('position8');
                break;
            case 9:
                // code block
                Position9 = document.getElementById('position9');
                break;
            case 10:
                // code block
                Position10 = document.getElementById('position10');
                break;
            default:
            // code block
        }
    }
    if (participantNames.length === 0) {
        Swal.fire('Oops...', `You're not ready to shuffle`, 'info')
    } else {
        let suffledNames = shuffleArray(participantNames)

        for (let i = 1; i < suffledNames.length; i++) {
            (function (i, count) {
                setTimeout(() => {
                    let rand = Math.floor(Math.random() * (suffledNames.length))
                    display.innerHTML = suffledNames[rand]

                    if (count === suffledNames.length - 1) {
                        if (Position1 != null && checkclick == 1)
                            if (!Position1.innerHTML) {
                                Position1.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position2 != null && checkclick == 2)
                            if (!Position2.innerHTML) {
                                Position2.innerHTML = suffledNames[rand]

                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                            if (Position3 != null && checkclick == 3)
                            if (!Position3.innerHTML) {
                                Position3.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position4 != null && checkclick == 4)
                            if (!Position4.innerHTML) {
                                Position4.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position5 != null && checkclick == 5)
                            if (!Position5.innerHTML) {
                                Position5.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position6 != null && checkclick == 6)
                            if (!Position6.innerHTML) {
                                Position6.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position7 != null && checkclick == 7)
                            if (!Position7.innerHTML) {
                                Position7.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position8 != null && checkclick == 8)
                            if (!Position8.innerHTML) {
                                Position8.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position9 != null && checkclick == 9)
                            if (!Position9.innerHTML) {
                                Position9.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        if (Position10 != null && checkclick == 10)
                            if (!Position10.innerHTML) {
                                Position10.innerHTML = suffledNames[rand]
                                if (checkbox.checked == true) {
                                    let index = participantNames.indexOf(suffledNames[rand])
                                    participantNames.splice(index, 1)
                                }
                                console.log(participantNames)
                                winnerAlert(suffledNames[rand])
                            }
                        checkclick = checkclick + 1;
                    }
                }, i/80)
            })(i * 100, i)
        }
    }
})

inputFile.addEventListener('change', function (event) {
    input.value = ''
    let files = inputFile.files

    if (files.length === 0) return;

    let file = files[0]
    let reader = new FileReader()

    reader.onload = (e) => {
        const file = e.target.result
        const name = file.split(',');
        input.value = name.join(',')
    }
    reader.onerror = (e) => alert(e.target.error.name)
    reader.readAsText(file)
})

function resetvalue() {
    if (Position1 != null) Position1.innerHTML = ''
    if (Position2 != null) Position2.innerHTML = ''
    if (Position3 != null) Position3.innerHTML = ''
    if (Position4 != null) Position4.innerHTML = ''
    if (Position5 != null) Position5.innerHTML = ''
    if (Position6 != null) Position6.innerHTML = ''
    if (Position7 != null) Position7.innerHTML = ''
    if (Position8 != null) Position8.innerHTML = ''
    if (Position9 != null) Position9.innerHTML = ''
    if (Position10 != null) Position10.innerHTML = ''
    checkclick = 1;
}

reset.addEventListener('click', function (event) {
    input.value = ''
    inputFile.value = ''
    display.innerHTML = 'Display'
    shuffle.removeAttribute("disabled");
    ready.removeAttribute('disabled')
    input.removeAttribute('disabled')
    checkbox.checked = false
    participantNames.length = 0
})

function shuffleArray(array) {
    let shuffeledArr = [...array]

    for (let i = shuffeledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffeledArr[rand]
        shuffeledArr[rand] = shuffeledArr[i]
        shuffeledArr[i] = temp
    }
    return shuffeledArr;
}

function winnerAlert(name) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `'${name}'`,
        text: 'Congratulations',
        showConfirmButton: false,
        timer: 1000
    })
}