const agePart = document.querySelector(".age")
const birthDate = new Date(1174518000000)
let age = document.cookie.split("=")[1]
agePart.innerText = age + " "

const alwaysUpdateAge = async () => {
    while (true) {
        const today = Date.now()

        age = new Date(today - birthDate).getUTCFullYear() - 1970
        const text = `${age} years old`
        document.cookie = `age=${text}`
        agePart.innerText = text + " "

        await sleep(1000)
    }
}