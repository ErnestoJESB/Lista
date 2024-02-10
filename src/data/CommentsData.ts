import type { IComment } from "@/interfaces/IComment";

const Comments: IComment[] = [
    {
        id: 1,
        nombre: "Hugo Sánchez",
        descripcion: "Hugo Sánchez Márquez es un exfutbolista y entrenador mexicano. Es considerado uno de los mejores futbolistas mexicanos de la historia.",
        fechaNac: new Date(1958, 7, 11),
        equipo: "Real Madrid",
        nacionalidad: "Mexicana"
    },
    {
        id: 2,
        nombre: "Javier Hernández",
        descripcion: "Javier Hernández Balcázar, conocido como Chicharito, es un futbolista mexicano que juega como delantero en el LA Galaxy de la Major League Soccer de Estados Unidos.",
        fechaNac: new Date(1988, 6, 1),
        equipo: "Chivas",
        nacionalidad: "Mexicana"
    },
    {
        id: 3,
        nombre: "Cuauhtémoc Blanco",
        descripcion: "Cuauhtémoc Blanco Bravo es un exfutbolista y político mexicano. Es considerado uno de los mejores futbolistas mexicanos de la historia.",
        fechaNac: new Date(1973, 1, 17),
        equipo: "América",
        nacionalidad: "Mexicana"
    },
    {
        id: 4,
        nombre: "Rafael Márquez",
        descripcion: "Rafael Márquez Álvarez es un exfutbolista y entrenador mexicano. Es considerado uno de los mejores futbolistas mexicanos de la historia.",
        fechaNac: new Date(1979, 2, 13),
        equipo: "Barcelona",
        nacionalidad: "Mexicana"
    },
    {
        id: 5,
        nombre: "Luis Hernández",
        descripcion: "Luis Hernández es un exfutbolista mexicano. Es considerado uno de los mejores futbolistas mexicanos de la historia.",
        fechaNac: new Date(1968, 12, 22),
        equipo: "América",
        nacionalidad: "Mexicana"
    }
];

export default Comments;