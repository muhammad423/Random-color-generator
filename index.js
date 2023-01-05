const colorEl = document.querySelector('.color');
const generatorEl = document.querySelector('.generator')


const generateColor = () => {
    const colorRandom = Math.random().toString(16).substring(2, 8)
    colorEl.innerHTML = `#${colorRandom}`
    document.body.style.backgroundColor  = `#${colorRandom}`
}

generatorEl.addEventListener('click', generateColor);
