let container = document.querySelector('.container')
let aside = document.querySelector('.aside')

let btnAsideOn = document.querySelector('#asideOn') 
let btnAsideOff = document.querySelector('#AsideOff')

function asideOn(){
    if (aside.style.display = 'none'){
        aside.style.display = 'flex'
    }

    container.style.gridTemplateAreas = '"header header" "section aside" "footer footer"'

    btnAsideOn.style.display = 'none'

}

function asideOff(){
    if (aside.style.display = 'flex'){
        aside.style.display = 'none'
    }

    container.style.gridTemplateAreas = '"header header" "section section" "footer footer"'

    btnAsideOn.style.display = 'block'
    btnAsideOff.style.display = 'none'
}