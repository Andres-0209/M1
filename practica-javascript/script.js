console.log("Javascrip conectado correctamente")

//Ejercicio 1 · Variables

const Nombredeusuario ="Julian Rodriguez"
console.log("Nombre de usuario registrado es", Nombredeusuario )
let Contadormensajes = 0
console.log("Cantidad de mensajes recibidos en la badeja es", Contadormensajes)
const Preciodeproducto = 29.99
console.log("Precio del producto seleccionado es: $", Preciodeproducto)
let Puntajedejuego = 350
console.log("Puntaje del jugador es " + Puntajedejuego + " puntos")

//Ejercicio 2 · Funciones

//Parte 1

function Saludar(Nombre){
    return "Hola " + Nombre
}

console.log(Saludar("Freddy"))
console.log(Saludar("Aron"))
console.log(Saludar("Rodri"))

//Parte 2

function CalcularDoble(Numero){
return (Numero * 2)
}

console.log(CalcularDoble(13))
console.log(CalcularDoble(92.34))
console.log(CalcularDoble(-45.5))

//Ejercicio 3 · Arrays

let Tareas = ["Estudiar", "Entrenar",  "Trabajar"];
console.log(Tareas.length)
console.log(Tareas[0])
console.log(Tareas[1])
console.log(Tareas[2])

//.push(.push llamara y agregara el dato nuevo y lo agregara a la varible let enteriromente creada)

Tareas.push("Cocinar")
console.log(Tareas.length)
console.log(Tareas)

//Ejercicio 4 · Estructuras de control

function ClasificarNota(Nota){
    if (Nota>=60)
    return ("Aprobado")

// Con else no se nesecita volver a preguntar si es menor, else realiza el cambio atumatico si la condición de if no se cumple.

    else 
    return ("Desaprobado")
}

console.log(ClasificarNota(70))
console.log(ClasificarNota(40))
console.log(ClasificarNota(67))
console.log(ClasificarNota(59.9))

//Ejercicio 5 · Iteraciones

for(let i =0; i < Tareas.length; i++ ){
console.log(Tareas[i]);
}

(Tareas.forEach(Tareas => 
    console.log("Tareas")
))

//Invertigar que hace la función flecha

//Ejercicio 6 · Math.random y Math.floor
let  IndiceAleatorio = Math.floor(Math.random()* Tareas.length)
console.log(IndiceAleatorio)
console.log (Tareas[IndiceAleatorio])
//Preguntar en la clase sobre el math.ramdom y math.florr no los entendio del todo