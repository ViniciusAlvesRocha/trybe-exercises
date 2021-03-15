

    function changeBackground(element) {
        document.body.style.backgroundColor = element.target.value;
    }
    
    function changeTextColor(element) {
        document.body.style.color = element.target.value;
    }
    
    function changeFontSize(element) {
        document.body.style.fontSize = `${element.target.value}px`;
    }
    
    function changeLineHeight(element) {
        ps = document.getElementsByTagName('p');
        for (let p of ps) {
            p.style.lineHeight = `${element.target.value}px`
        }
    }

    function changeFontFamily() {
       /*  alert('oi')
        let select = document.getElementById('font-family');
        let value = select.options[select.selectedIndex].value;
        console.log(value); // pt */
    }

let inputBackgroundColor = document.getElementById('background-color');
let inputTextColor = document.getElementById('text-color');
let inputFontSize = document.getElementById('font-size');
let inputLineHeight = document.getElementById('line-height');
let selectFontFamily = document.getElementById('font-family')

//para mudança de cor de background:
inputBackgroundColor.addEventListener('change', changeBackground);

inputTextColor.addEventListener('change', changeTextColor);

inputFontSize.addEventListener('change', changeFontSize);

inputLineHeight.addEventListener('change', changeLineHeight)

//selectFontFamily.addEventListener('change', changeFontFamily)

selectFontFamily



