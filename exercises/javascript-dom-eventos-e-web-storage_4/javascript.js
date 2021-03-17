let styleObj = {
};
let p = document.getElementsByTagName('p')[0];
let inputBackgroundColor = document.getElementById('background-color');
let inputTextColor = document.getElementById('text-color');
let inputFontSize = document.getElementById('font-size');
let inputLineHeight = document.getElementById('line-height');
let selectFontFamily = document.getElementById('font-family')
let selectMargin = document.getElementById('margin-left-right');
let divParagraph = document.getElementById('divParagraph');

function changeBackgroundStorage(value) {
  document.body.style.backgroundColor = value; 
}
function changeTextColorStorage(value) {
  document.body.style.color = value; 
}
function changeFontSizeStorage(value) {
  p.style.fontSize = value; 
}
function changeLineHeightStorage(value) {
  p.style.lineHeight = value; 
}

function changeFontFamilyStorage(value) {
  p.style.fontFamily = value; 
}

function changeMarginStorage(value) {
  p.style.marginLeft = "auto";
  p.style.marginRight = "auto";
  p.style.width = value
}
if (localStorage.getItem('changeBackground')) {
  changeBackgroundStorage(localStorage.getItem('changeBackground'));
  inputBackgroundColor.value = localStorage.getItem('changeBackground')
}
if (localStorage.getItem('changeTextColor')) {
  changeTextColorStorage(localStorage.getItem('changeTextColor'));
  inputTextColor.value = localStorage.getItem('changeTextColor')
}
if (localStorage.getItem('changeFontSize')) {
  changeFontSizeStorage(localStorage.getItem('changeFontSize'));
  inputFontSize.value = parseInt(localStorage.getItem('changeFontSize'), 10)
}
if (localStorage.getItem('changeLineHeight')) {
  changeLineHeightStorage(localStorage.getItem('changeLineHeight'));
  inputLineHeight.value = parseInt(localStorage.getItem('changeLineHeight'), 10)
}

if (localStorage.getItem('changeFonteFamily')) {
  changeFontFamilyStorage(localStorage.getItem('changeFonteFamily'));
  selectFontFamily.value = localStorage.getItem('changeFonteFamily');
}

if (localStorage.getItem('changeMarginLeftRight')) {
  changeMarginStorage(localStorage.getItem('changeMarginLeftRight'));
  selectMargin.value = 100 - parseInt(localStorage.getItem('changeMarginLeftRight'), 10);
  divParagraph.style.marginLeft = 'auto';
  divParagraph.style.marginRight = 'auto';
}

function changeBackground(element) {
    document.body.style.backgroundColor = element.target.value;
    localStorage.setItem('changeBackground',element.target.value);
}

function changeTextColor(element) {
    document.body.style.color = element.target.value;
    localStorage.setItem('changeTextColor',element.target.value);
}

function changeFontSize(element) {
  p.style.fontSize = `${element.target.value}px`;
  localStorage.setItem('changeFontSize',`${element.target.value}px`);
}

function changeLineHeight(element) {
  p.style.lineHeight = `${element.target.value}px`
  localStorage.setItem('changeLineHeight', `${element.target.value}px`)
}

function changeFontFamily() {
  let select = document.getElementById('font-family');
  let fontFamily = select.options[select.selectedIndex].value;
  p.style.fontFamily = fontFamily;
  localStorage.setItem('changeFonteFamily', fontFamily)
}

function changeMargin(element) {
  console.log(element.target.value)
  p.style.marginLeft = "auto";
  p.style.marginRight = "auto";
  p.style.width = (100 - parseInt(element.target.value, 10))+'%'
  localStorage.setItem("changeMarginLeftRight", (100 - parseInt(element.target.value, 10))+'%');
}

//para mudança de cor de background:
inputBackgroundColor.addEventListener('change', changeBackground);

inputTextColor.addEventListener('change', changeTextColor);

inputFontSize.addEventListener('change', changeFontSize);

inputLineHeight.addEventListener('change', changeLineHeight)

selectFontFamily.addEventListener('change', changeFontFamily)

selectMargin.addEventListener('change', changeMargin)






