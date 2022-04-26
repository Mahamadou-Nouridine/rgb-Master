
    let block1 = document.getElementById("block1")
    let theRgb = document.getElementById("theRgb");
    let newColor = document.getElementById("btn1");
    let easy = document.getElementById("btn2");
    let hard = document.getElementById("btn3");
    let case1 = document.getElementById("case1")
    let case2 = document.getElementById("case2")
    let case3 = document.getElementById("case3")
    let case4 = document.getElementById("case4");
    let case5 = document.getElementById("case5")
    let case6 = document.getElementById("case6")
    let caseHasard = document.querySelector(".btn")
    var listeDesCouleur = []
    let hasard;
    let resultat = document.getElementById("resultat")
    var mode = true;



    // function couleurHasard(){
    //     let hasard = Math.floor(Math.random()*7);
    //     let caseChoisie = caseHasard[hasard].style.backgroundColor
    //     return caseChoisie
    // }


    function active() {
        listeDesCouleur.length = 0
        case1.style.backgroundColor = `${couleurAleatoire()}`
        case2.style.backgroundColor = `${couleurAleatoire()}`
        case3.style.backgroundColor = `${couleurAleatoire()}`
        case4.style.backgroundColor = `${couleurAleatoire()}`
        case5.style.backgroundColor = `${couleurAleatoire()}`
        case6.style.backgroundColor = couleurAleatoire();



        case1.style.display = 'block'
        case1.style.visibility = 'visible'
        case1.style.animation = ''

        case2.style.display = 'block'
        case2.style.visibility = 'visible'
        case2.style.animation = ''

        case3.style.display = 'block'
        case3.style.visibility = 'visible'
        case3.style.animation = ''

        case4.style.display = 'block'
        case4.style.visibility = 'visible'
        case4.style.animation = ''

        case5.style.display = 'block'
        case5.style.visibility = 'visible'
        case5.style.animation = ''

        case6.style.display = 'block'
        case6.style.visibility = 'visible'
        case6.style.animation = ''



        listeDesCouleur.push(case1.style.backgroundColor)
        listeDesCouleur.push(case2.style.backgroundColor)
        listeDesCouleur.push(case3.style.backgroundColor)
        listeDesCouleur.push(case4.style.backgroundColor)
        listeDesCouleur.push(case5.style.backgroundColor)
        listeDesCouleur.push(case6.style.backgroundColor)
        hasard = Math.floor(Math.random() * 6);
        theRgb.innerHTML = `${listeDesCouleur[hasard]}`
        mode = true;
    }
    function activeEasy() {
        listeDesCouleur.length = 0
        case1.style.backgroundColor = `${couleurAleatoire()}`
        case2.style.backgroundColor = `${couleurAleatoire()}`
        case3.style.backgroundColor = `${couleurAleatoire()}`

        case1.style.display = 'block'
        case1.style.visibility = 'visible'
        case1.style.animation = ''

        case2.style.display = 'block'
        case2.style.visibility = 'visible'
        case2.style.animation = ''

        case3.style.display = 'block'
        case3.style.visibility = 'visible'
        case3.style.animation = ''

        case4.style.display = 'none'
        case4.style.visibility = 'hidden'
        case4.style.animation = 'fade 1s'

        case5.style.display = 'none'
        case5.style.visibility = 'hidden'
        case5.style.animation = 'fade 1s'

        case6.style.display = 'none'
        case6.style.visibility = 'hidden'
        case6.style.animation = 'fade 1s'




        listeDesCouleur.push(case1.style.backgroundColor)
        listeDesCouleur.push(case2.style.backgroundColor)
        listeDesCouleur.push(case3.style.backgroundColor)
        hasard = Math.floor(Math.random() * 3);
        theRgb.innerHTML = `${listeDesCouleur[hasard]}`
        mode = false;
    }







    easy.addEventListener("click", () => {
        activeEasy()
        easy.classList.add("disabled")
        hard.classList.remove("disabled")
    })
    hard.addEventListener("click", () => {
        hard.classList.add("disabled")
        easy.classList.remove("disabled")
        active()
    })




    newColor.addEventListener("click", () => {
        if (mode) {
            active()
        } else {
            activeEasy()
        }
    })



    case1.addEventListener("click", () => {
        if (case1.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case2.style.backgroundColor = theRgb.textContent;
            case3.style.backgroundColor = theRgb.textContent;
            case4.style.backgroundColor = theRgb.textContent;
            case5.style.backgroundColor = theRgb.textContent;
            case6.style.backgroundColor = theRgb.textContent;

            case2.style.visibility = 'visible';
            case3.style.visibility = 'visible';
            case4.style.visibility = 'visible';
            case5.style.visibility = 'visible';
            case6.style.visibility = 'visible';

            case2.style.animation = ''
            case3.style.animation = ''
            case4.style.animation = ''
            case5.style.animation = ''
            case6.style.animation = ''
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case1.style.animation = 'fade 2s'
            case1.style.visibility = 'hidden'

            resultat.innerHTML = "Try again"

        }
    })
    case2.addEventListener("click", () => {
        if (case2.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case1.style.backgroundColor = theRgb.textContent;
            case3.style.backgroundColor = theRgb.textContent;
            case4.style.backgroundColor = theRgb.textContent;
            case5.style.backgroundColor = theRgb.textContent;
            case6.style.backgroundColor = theRgb.textContent;

            case1.style.visibility = 'visible';
            case3.style.visibility = 'visible';
            case4.style.visibility = 'visible';
            case5.style.visibility = 'visible';
            case6.style.visibility = 'visible';

            case1.style.animation = '';
            case3.style.animation = '';
            case4.style.animation = '';
            case5.style.animation = '';
            case6.style.animation = '';
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case2.style.animation = 'fade 2s'
            case2.style.visibility = 'hidden'
            resultat.innerHTML = "Try again"
        }
    })
    case3.addEventListener("click", () => {
        if (case3.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case2.style.backgroundColor = theRgb.textContent;
            case1.style.backgroundColor = theRgb.textContent;
            case4.style.backgroundColor = theRgb.textContent;
            case5.style.backgroundColor = theRgb.textContent;
            case6.style.backgroundColor = theRgb.textContent;

            case2.style.visibility = 'visible';
            case1.style.visibility = 'visible';
            case4.style.visibility = 'visible';
            case5.style.visibility = 'visible';
            case6.style.visibility = 'visible';

            case2.style.animation = '';
            case1.style.animation = '';
            case4.style.animation = '';
            case5.style.animation = '';
            case6.style.animation = '';
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case3.style.animation = 'fade 2s'
            case3.style.visibility = 'hidden'
            resultat.innerHTML = "Try again"
        }
    })
    case4.addEventListener("click", () => {
        if (case4.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case2.style.backgroundColor = theRgb.textContent;
            case3.style.backgroundColor = theRgb.textContent;
            case1.style.backgroundColor = theRgb.textContent;
            case5.style.backgroundColor = theRgb.textContent;
            case6.style.backgroundColor = theRgb.textContent;

            case2.style.visibility = 'visible';
            case3.style.visibility = 'visible';
            case1.style.visibility = 'visible';
            case5.style.visibility = 'visible';
            case6.style.visibility = 'visible';

            case2.style.animation = '';
            case3.style.animation = '';
            case1.style.animation = '';
            case5.style.animation = '';
            case6.style.animation = '';
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case4.style.animation = 'fade 2s'
            case4.style.visibility = 'hidden'
            resultat.innerHTML = "Try again"
        }
    })
    case5.addEventListener("click", () => {
        if (case5.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case2.style.backgroundColor = theRgb.textContent;
            case3.style.backgroundColor = theRgb.textContent;
            case4.style.backgroundColor = theRgb.textContent;
            case1.style.backgroundColor = theRgb.textContent;
            case6.style.backgroundColor = theRgb.textContent;

            case2.style.visibility = 'visible';
            case3.style.visibility = 'visible';
            case4.style.visibility = 'visible';
            case1.style.visibility = 'visible';
            case6.style.visibility = 'visible';

            case2.style.animation = '';
            case3.style.animation = '';
            case4.style.animation = '';
            case1.style.animation = '';
            case6.style.animation = '';
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case5.style.animation = 'fade 2s'
            case5.style.visibility = 'hidden'
            resultat.innerHTML = "Try again"
        }
    })
    case6.addEventListener("click", () => {
        if (case6.style.backgroundColor == theRgb.textContent) {
            resultat.innerHTML = "Correct!"
            case2.style.backgroundColor = theRgb.textContent;
            case3.style.backgroundColor = theRgb.textContent;
            case4.style.backgroundColor = theRgb.textContent;
            case5.style.backgroundColor = theRgb.textContent;
            case1.style.backgroundColor = theRgb.textContent;

            case2.style.visibility = 'visible';
            case3.style.visibility = 'visible';
            case4.style.visibility = 'visible';
            case5.style.visibility = 'visible';
            case1.style.visibility = 'visible';

            case2.style.animation = '';
            case3.style.animation = '';
            case4.style.animation = '';
            case5.style.animation = '';
            case1.style.animation = '';
            block1.style.backgroundColor = theRgb.textContent;
        } else {
            case6.style.animation = 'fade 2s'
            case6.style.visibility = 'hidden'
            resultat.innerHTML = "Try again"
        }
    })



    if (mode) {
        active()
    } else {
        activeEasy()
    }





    function couleurAleatoire() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`
    }