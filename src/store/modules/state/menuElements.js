import { v4 as uuidv4 } from "uuid";

export default [{
        id: uuidv4(),
        href: "/",
        textValue: "Start",
    },
    {
        id: uuidv4(),
        href: "/produkty",
        textValue: "Produkty",
    },
    {
        id: uuidv4(),
        href: "/serwis-naprawczy",
        textValue: "Serwis Naprawczy",
    },
    {
        id: uuidv4(),
        href: "/kontakt",
        textValue: "Kontakt",
        classes: "phone-menu__element phone-menu__element--last"
    },
]