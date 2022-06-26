
window.onload = function(){


    //IMPORTANTE: LEER "NOTA" DE LA CARPETA "API" QUE ACABAS DE DESCARGAR

// En caso de que el timer (hour,minute o seconds) tenga menos de 2 elementos (timer.length < 2), entonces se los agrego, de lo contrario
//Lo dejo tal como está. Todo esto con la funcion addZero();

    function addZero (n){

        if(n.toString().length < 2){
            return "0" + n;
        }
        else return n
    }

    //Cada 1 segundo se repite la "llamada" al reloj para que se actualice

    setInterval(()=>{

        //Obtengo los nodos del DOM

    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");

    //Reescribo los Nodos del DOM con la propiedad innerHTML y utilizando el objeto Date();

    hours.innerHTML = addZero(new Date().getHours()) + " Hrs"; //obtener Horas
    minutes.innerHTML = addZero(new Date().getMinutes()) + " Min";//obtener minutos
    seconds.innerHTML = addZero(new Date().getSeconds()) + " Sec";//obtener segundos
    },1000);
}


//IMPORTANTE: LEER "NOTA" DE LA CARPETA "API" QUE ACABAS DE DESCARGAR
