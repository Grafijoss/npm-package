const messages = [
    'Alicia',
    'July',
    'Juan',
    'Jose',
    'Jorge'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {
    randomMsg
}