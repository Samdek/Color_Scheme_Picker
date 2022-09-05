const colorContainer = document.getElementById('colors-container')
const colorId = document.getElementById('color-id').value.slice(1)
const colorMode = document.getElementById('color-mode').value
const generateBtn = document.getElementById('btn')

generateBtn.addEventListener('click', event => {
    fetch(`https://www.thecolorapi.com/scheme?format=json&hex=${colorId}&mode=${colorMode}`)
    .then(res => res.json())
    .then(data => {
        data.colors.map(color => {
            let htmlColor = color.name.closest_named_hex
            colorContainer.innerHTML += `<div style="background-color: ${htmlColor}" class="color">${htmlColor}</div>`
        }).join('')
    })
    event.preventDefault() 
})