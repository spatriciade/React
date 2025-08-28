import {
    faChampagneGlasses,
    faSquare,
    faBurger,
    faGlassWater,
    faArrowDownLong,
    faArrowUpLong,
    faBriefcase,
    faCommentDollar,
    faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

export  const itemsList = [
        {
            icons: [faSquare, faChampagneGlasses],
            data: {
                title: "Food and Drinks",
                date: new Date("2025-08-24").toLocaleDateString(),
            },
            money: {
                amount: 20,
                income: false,
            },
        },
    ];
