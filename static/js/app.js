window.onload = bannerSlide

window.onscroll = function () {
    let flotante = document.getElementById('navBar')
    let static = document.getElementById('navBarStatic')
    let altura = 200
    if (window.scrollY >= altura){
        // console.log('mayor')
        flotante.classList.add('noVisualizar')
        static.classList.add('visualizar')
        
        
    } else {
        // console.log('menor')
        flotante.classList.remove('noVisualizar')
        static.classList.remove('visualizar')
    }
}

// ******************************** BANNER ******************************** //
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

var texto = [
    'El algodón es hipoalergénico y resistente a los ácaros del polvo. Las prendas elaboradas al menos en 60% algodón son menos probables que causen picazón o irritación, por eso también el algodón es ideal para niños pequeños y personas con piel sensible.',

    'El color rosa empezó a ser asociado con el genero a finales del siglo XIX y principios del XX. En 1914 un diario aconcejaba a las madres a vestir a los niños color rosa porque este reflejaba decision y fortaleza, y a las niñas de color celeste ya que era más delicado y refinado',

    'Algunos de los beneficios de utilizar prendas de lana en los bebes son el ABRIGO por sus fibras que cuentan con una capacidad de aislamiento térmico, la COMODIDAD por su suavidad que son dificilmente alcazables por cualquier otro tejido, a demás, es COMPLETAMENTE NATURAL.  ',

    'El bebé se siente atraído por los colores vivos por que los estimulos visuales que generan enriquecen sus conexiones neuronales. Desde que nace, tu bebé o bebita ya dispone de todas sus neuronas, pero aún tienen que conectarlas entre sí',

    'La tela conocida como flannel es un textil semi-térmico, grueso y peludo. Es muy útil a la hora de abrigar al bebe ya que es suave y mantendra su temperatura, por lo general se usa en climas fríos. Es muy duradera y no pierde su color y su desgaste es minimo.'
]

var counter = 0

function selector(sel) {
    let quitar = sel-1
    quitar == -1 ? quitar = 4 : quitar=quitar
    document.getElementById('data'+quitar).classList.remove('btnDown_select')
    document.getElementById('data'+sel).classList.add('btnDown_select')
}

function bannerSlide() {
    document.getElementById('pictureSlide').src='./static/images/information/'+images[counter]
    document.getElementById('textInfo').textContent=texto[counter]
    selector(counter)
    counter++
}

setInterval(() => {
    bannerSlide()
    if (counter==5){
        counter=0
    }
}, 6000);

function slideSel (data){
    document.getElementById('pictureSlide').src='./static/images/information/'+data+'.jpg'
    document.getElementById('textInfo').textContent=texto[data-1]
    document.getElementById('data'+counter).classList.remove('btnDown_select')
    counter = data-1
    selector(counter)
}

// ******************************** GALLERY STILE ******************************** //

var position1 = document.getElementById('position1')

var gallery = ['1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
var sex = ['girls','boys']

setInterval(() => {
    carouselGallery()
}, 1000);

// './static/images/clotes/'+gen+'/'+gallery[galleryCounter]

function carouselGallery() {
    
}

function randomNumber() {
    return Math.floor(Math.random()*(0, 10))
}

position1 = addEventListener('click', function() {
    document.getElementById('imageP').src='./static/images/clotes/girls/1.jpg'
    document.getElementById('imgPosition1').src='./static/images/clotes/girls/5.jpg'
})
