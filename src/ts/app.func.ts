const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

const closeBtn = document.querySelector<HTMLElement>('.content__header--tab__icon#close')
const minBtn = document.querySelector<HTMLElement>('.content__header--tab__icon#minimize')
const maxresBtn = document.querySelector<HTMLElement>('.content__header--tab__icon#reduce')

//Close App
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        ipc.send('closeApp')
    })
}

//Minimize App
if (minBtn) {
    minBtn.addEventListener('click', () => {
        ipc.send('minApp')
    })
}

//Maximize Restore App
if (maxresBtn) {
    const maxBtn = maxresBtn.querySelector('.maximize') as SVGSVGElement
    const resBtn = maxresBtn.querySelector('.restore') as SVGSVGElement
    maxresBtn.addEventListener('click', () => {
        ipc.send('maxresApp')
        if (resBtn.style.display === "none") {
            resBtn.style.display = "block"
            maxBtn.style.display = "none"
        } else {
            resBtn.style.display = "none"
            maxBtn.style.display = "block"
        }
    })
}

/*const editor_closeBtn = document.querySelector<HTMLElement>('.header--tab__icon#close')
const editor_minBtn = document.querySelector<HTMLElement>('.header--tab__icon#minimize')
const editor_maxresBtn = document.querySelector<HTMLElement>('.header--tab__icon#reduce')

//Close App
if (editor_closeBtn) {
    editor_closeBtn.addEventListener('click', () => {
        ipc.send('closeApp')
    })
}

//Minimize App
if (editor_minBtn) {
    editor_minBtn.addEventListener('click', () => {
        ipc.send('minApp')
    })
}

//Maximize Restore App
if (editor_maxresBtn) {
    const editor_maxBtn = editor_maxresBtn.querySelector('.maximize') as SVGSVGElement
    const editor_resBtn = editor_maxresBtn.querySelector('.restore') as SVGSVGElement
    editor_maxresBtn.addEventListener('click', () => {
        ipc.send('maxresApp')
        if (editor_resBtn.style.display === "none") {
            editor_resBtn.style.display = "block"
            editor_maxBtn.style.display = "none"
        } else {
            editor_resBtn.style.display = "none"
            editor_maxBtn.style.display = "block"
        }
    })
}*/