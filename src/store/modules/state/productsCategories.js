import { v4 as uuidv4 } from "uuid";

export default [{
        id: uuidv4(),
        name: "Urządzenia akumulatorowe",
        src: require("../../../assets/img/urządzenia-akumulatorowe.jpg"),
        link: "/urządzenia-akumulatorowe",
        bg_image: require("../../../assets/img/nożyce-akumulatorowe-tnące-żywopłot.jpg"),
        products: [{
            id: uuidv4(),
            name: "Nożyce HSA 45",
            short_desc: "Lekkie nożyce do żywopłotu ze zintegrowanym akumulatorem",
            long_desc: `Bardzo lekkie akumulatorowe nożyce do żywopłotów o dobrej wydajności cięcia, przeznaczone do trymowania gałęzi na terenach przydomowych. Posiadają listwę tnącą z jednostronnie szlifowanymi zębami oraz zintegrowaną ochronę antyprzecięciową, przykręcaną osłonę listwy tnącej jak również zintegrowany akumulator ze wskaźnikiem naładowania. `,
            link: "/nożyce-hsa-45",
            src: require("../../../assets/img/produkty/nożyce_hsa45.png"),
            alt: "Nożyce STIHL HSA 45 na białym tle",
            technical_data: {
                dlugosc_ciecia: 50,
                napiecie_znamionowe: 18,
                cieżar_z_akumulatorem: 2.3,
                poziom_cisnienia_akustycznego: 54,
                poziom_mocy_akustycznej: 77,
                wartosc_drgan_uchwyt: "1,4/1,5",
                dlugosc_calkowita: 91
            },
            producer: "Stihl"
        }]
    },
    {
        id: uuidv4(),
        name: "Urządzenia koszące",
        src: require("../../../assets/img/urządzenia-koszące.jpg"),
        link: "/urządzenia-koszące",
        products: []
    },
    {
        id: uuidv4(),
        name: "Pilarki łańcuchowe",
        src: require("../../../assets/img/pilarki-łańcuchowe.jpg"),
        link: "/pilarki-łańcuchowe",
        products: []
    },
    {
        id: uuidv4(),
        name: "Kosy mechaniczne",
        src: require("../../../assets/img/kosy-mechaniczne.jpg"),
        link: "/kosy-mechaniczne",
        products: []
    },
]