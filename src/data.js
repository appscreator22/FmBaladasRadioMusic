import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Baladas del Recuerdo",
            artist: "BaladasdelRecuerdo",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://hoth.alonhosting.com:3085/stream",
            active: true,
        },
        {
            name:"Baladas en linea",
            artist: "Baladasenlinea",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://stream20.usastreams.com/8104/stream",
            active: false,
        },
        {
            name:"Suave FM",
            artist: "SuaveFM",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://sp.totalstreaming.net:8156/;stream.nsv",
            active: false,
        },
        {
            name:"Palpitar Stereo",
            artist: "PalpitarStereo",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://cast1.asurahosting.com/proxy/oxigenof/stream",
            active: false,
        },
        {
            name:"Romantica 90 FM",
            artist: "Romantica90FM",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://puertoplataradio.com/8016/stream",
            active: false,
        },
        {
            name:"Rádio Mil",
            artist: "RádioMil",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://radio4.domint.net:8066/stream",
            active: false,
        },
        {
            name:"Rádio Love Hits",
            artist: "RádioLoveHits",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://ssl.ahtvox.com.br:7028/;",
            active: false,
        },
        {
            name:"FIERAMIXLAROMÁNTICA",
            artist: "FIERAMIXLAROMÁNTICA",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://c15.radioboss.fm:18222/stream",
            active: false,
        },   
    ];
}

export default chillHop;


