//********* Definición de clases

// Definición de clase campeón
class Campeon {

    constructor(nombre, vida, ataque, mana, habilidades, tipo, esFuerteContra1, esFuerteContra2) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque * 1.24;
        this.mana = mana;
        this.habilidades = habilidades;
        this.tipo = tipo;
        this.esFuerteContra1 = esFuerteContra1;
        this.esFuerteContra2 = esFuerteContra2;
    }

    presentarse() {
        var habilidades = '';
        this.habilidades.forEach(habilidad => {
            habilidades += `\n\t${habilidad}`;
        });
        console.log(`Mi nombre es ${this.nombre}, soy un campeón de League of Legends`);
        console.log(`Mis grandiosas características son: Vida: ${this.vida}, Maná: ${this.mana}, Ataque: ${this.ataque}`);
        console.log(`Esta es la lista de mis habilidades: ${habilidades}`);
    }

    comparar(compararContra) {
        // this.esFuerteContra1 == compararContra
        if (this.esFuerteContra1 == compararContra.tipo)
            console.log(`Tu personaje, ${this.nombre}, tiene las de ganar`);
        else if (this.esFuerteContra2 == compararContra.tipo)
            console.log(`Tu personaje, ${this.nombre}, tiene las de ganar`);
        else if (compararContra.esFuerteContra1 == this.tipo)
            console.log(`Tu personaje, ${this.nombre}, tiene las de perder`);
        else if (compararContra.esFuerteContra1 == this.tipo)
            console.log(`Tu personaje, ${this.nombre}, tiene las de perder`);
        else
            console.log(`No hay ventaja de tipo, suerte`);
    }
}

// Definición de clase Tirador
class Tirador extends Campeon {
    constructor(nombre, vida, ataque, mana, habilidades, distancia) {
        super(nombre, vida, ataque * 1.24, mana, habilidades, Tirador, Tanque, Luchador);
        this.distancia = distancia;
    }
}

// Definición de clase Asesino
class Asesino extends Campeon {
    constructor(nombre, vida, ataque, mana, habilidades) {
        super(nombre, vida - (vida * 0.05), ataque * 1.30, mana, habilidades, Asesino, Mago, Tirador);
    }
}

// Definición de clase Mago
class Mago extends Campeon {
    constructor(nombre, vida, ataque, mana, habilidades, distancia) {
        super(nombre, vida, ataque, mana * 1.24, habilidades, Mago, Tirador, Luchador);
        this.distancia = distancia;
    }
}

// Definición de clase Tanque
class Tanque extends Campeon {
    constructor(nombre, vida, ataque, mana, habilidades, armadura) {
        super(nombre, vida * 1.24, ataque, mana, habilidades, Tanque, Mago, Asesino);
        this.armadura = armadura;
    }
    presentarse() {
        super.presentarse();
        console.log(`${this.armadura}`)
    }
}

// Definición de clase Luchador
class Luchador extends Campeon {
    constructor(nombre, vida, ataque, mana, habilidades, movilidad) {
        super(nombre, vida * 1.15, ataque * 1.15, mana, habilidades, Luchador, Asesino, Tanque);
        this.movilidad = movilidad;
    }
}

//function inicializar() {

var Lee = new Tirador("Lee", 93, 100, 88, ["grito sónico", "visión nocturna", "precognición", "metamorfosis"]);

var Isis = new Asesino("Isis", 124, 66, 95, ["factor de curación", "cambio de tamaño", "hipnoquinesis", "duplicación física"]);

var Jayce = new Mago("Jayce", 85, 112, 91, ["ecolocación", "rayos x", "teletransportación", "elasticidad"]);

var Morgana = new Tanque("Morgana", 127, 58, 74, ["volar", "leer mentes", "telepatía", "fuerza"]);

var Jinx = new Luchador("Jinx", 100, 80, 95, ["velocidad", "invisibilidad", "control mental", "desintegración"]);

//     return {
//         Morgana,
//         Lee,
//         Ana,
//         Jayce,
//         Jinx
//     }

// }

// function main() {
//     var campeones = inicializar();

//     campeones.Morgana.comparar(campeones.Lee);

// }

// main();