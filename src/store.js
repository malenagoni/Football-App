import { createStore } from 'redux'

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Messi",
            foto: "https://www.eluniverso.com/resizer/M-hXl1-0d_uNRxedkK548GPhPas=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/JAMLXHF3SRBETC646C7EDENRYY.jpg"
        },
        {
            id: 2,
            nombre: "Acuña",
            foto: "https://pbs.twimg.com/media/C9ybo-IXcAIdmgs.jpg:large"
        },
        {
            id: 3,
            nombre: "Agüero",
            foto: "https://i.pinimg.com/originals/75/67/1b/75671bd4c59b9745573dbad5ef4f0784.jpg"
        },
        {
            id: 4,
            nombre: "Andrada",
            foto: "https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MI2GKZJSG5QTCNZSGMZWIOJWMI.jpg"
        },
        {
            id: 5,
            nombre: "Armani",
            foto: "https://lapaginamillonaria.com/__export/1602025638282/sites/lpm/img/2020/10/06/franco_armani_seleccixn_argentina_1_crop1602025636967.jpg_423682103.jpg"
        },
        {
            id: 6,
            nombre: "Casco",
            foto: "https://bolavip.com/__export/1560455672336/sites/bolavip/img/2019/06/13/14x_casco.jpg_276321039.jpg"
        },
        {
            id: 7,
            nombre: "De Paul",
            foto: "https://i.pinimg.com/originals/82/a8/cf/82a8cfe32a6e9b183b76e30ddd79debc.png"
        },
        {
            id: 8,
            nombre: "Di María",
            foto: "https://i.pinimg.com/originals/ca/82/c1/ca82c111621a80d8c3044a87f8883f86.jpg"
        },
        {
            id: 9,
            nombre: "Dybala",
            foto: "https://i.pinimg.com/originals/db/12/8a/db128a11eef26c7184ce3b84d9ede2a3.jpg"
        },
        {
            id: 10,
            nombre: "Foyth",
            foto: "https://lh3.googleusercontent.com/proxy/HLsUwRqu8WxI-ZGi1hH1hH3yyxxPy0zv_xuSFzZVFl_NZEEQFcmZ_q9R-1wLM3isqTR0Vu7lpgkk1RAVcrCzDFciX2159P24AzcLJkBHgFuYIkvPI0sWTitSodusdRCp_lFTBPl74I6XY3VKOg8LHDv8RlW95GoIODh8hg"
        },
        {
            id: 11,
            nombre: "Funes Mori",
            foto: "http://as01.epimg.net/argentina/imagenes/2018/04/25/futbol/1524678627_282985_1524678836_noticia_normal.jpg"
        },
        {
            id: 12,
            nombre: "Lo Celso",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoO_DluH1yi99AmRAU76Za_Fas_CPOguUNRIU0Z8bD-lsTRGJAAj9AzsfEoOYYEko2O4A&usqp=CAU"
        },
        {
            id: 13,
            nombre: "Martínez",
            foto: "https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/03/20/15530914008576.jpg"
        },
        {
            id: 14,
            nombre: "Otamendi",
            foto: "https://s.yimg.com/xe/i/us/sp/v/soccer/wc/players/379692.5.png"
        },
        {
            id: 15,
            nombre: "Palacios",
            foto: "https://media.tycsports.com/files/2020/10/14/126704/exequiel-palacios_862x485.jpg?v=1"
        },
        {
            id: 16,
            nombre: "Paredes",
            foto: "https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/06/26/15615569497817.jpg"
        },
        {
            id: 17,
            nombre: "Pereyra",
            foto: "https://i.pinimg.com/originals/ad/90/dd/ad90dd84f8c284112d8eddbb65542f9d.jpg"
        },
        {
            id: 18,
            nombre: "Pezzella",
            foto: "https://cadenaser00.epimg.net/ser/imagenes/2020/05/26/radio_valencia/1590505342_522996_1590505529_noticia_normal.jpg"
        },
        {
            id: 19,
            nombre: "Suarez",
            foto: "https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/F3KJK5Q775FXTOFG6NONQDF3AE.jpg"
        },
        {
            id: 20,
            nombre: "Tagliafico",
            foto: "https://locoxelrojo.com/independiente/wp-content/uploads/2018/09/Nicolas-Tagliafico-Seleccion-Argentina.jpg"
        },
        {
            id: 21,
            nombre: "Saravia",
            foto: "https://images.daznservices.com/di/library/GOAL/e8/34/renzo-saravia-argentina-nicaragua-amistoso-07062019_1cm19yjysqxww18ni7tey8vs1v.jpg?t=963575403&quality=100"
        }
    ],
    titulares: [],
    suplentes: []
}


const reducerEntrenador = (state = initialState, action) => {

    switch(action.type) {
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => {
                    if (j.id!==action.jugador.id){
                        return j;
                    }
                })
                }
        case 'AGREGAR_SUPLENTE':
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id!==action.jugador.id)
            }
        case 'QUITAR_TITULAR':
            return{
                ...state,
                titulares: state.titulares.filter(j => j.id!==action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        case 'QUITAR_SUPLENTE':
            return{
                ...state,
                suplentes: state.suplentes.filter(j => j.id!==action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
            default:
            return state;
    }

}



export default createStore(reducerEntrenador)
