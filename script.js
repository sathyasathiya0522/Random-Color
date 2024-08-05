function getRandomColor() 
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
        {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function updateColor() 
{
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('colorCode').innerText = newColor;
}
document.getElementById('generateBtn').addEventListener('click', updateColor);