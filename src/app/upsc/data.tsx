import { link } from "node:fs";
import { title } from "node:process";
import { describe } from "node:test";

interface Subjects {
    id: number;
    name: string;
    link: string;
    description: string;
    created_at: string;
    updated_at: string;
}

interface Apis{
    description:string;
    title:string;
    link:string;
}

export const English = [
    {
        description: "SSC CGL 2023 COMPLETE MATHS COMPILATION (ENGLISH)",
        title: 'SSC CGL 2023',
        link: "https://drive.google.com/file/d/13KwtRUwU7vV-4JbOTXtCXKkpbgxEde_I/view?usp=sharing"
    },
    {
        description: "ALGEBRA SSC CGL 2023 T-1 all 88 Questions",
        title: 'ALGEBRA',
        link: "https://drive.google.com/file/d/1WsGzdRA-cWcVbFCYG2pN88aELsnRr4_F/view?usp=sharing"
    },
    {
        description: "Average SSC CGL 2023 T-1",
        title: 'Average',
        link: "https://drive.google.com/file/d/1XWYiM_zY4fas-sLDbvp_VV3S-pXMzTgM/view?usp=sharing"
    }, {
        description: "Boat & Stream SSC CGL 2023 T-1",
        title: 'Boat & Stream',
        link: "https://drive.google.com/file/d/1XXNLkR7oouu6nyVrag7OZfkg0Q9sMVtV/view?usp=sharing"
    }, {
        description: "Computerengone liner SSC Delhi police constable 2023",
        title: 'SSC Delhi police',
        link: "https://drive.google.com/file/d/1Xtbyn5ijfbSWgu9n4Y7ngpAqfTgAEeVK/view?usp=sharing"
    }
    , {
        description: "Geometry(triangle) SSC CGL 2023 Tier-1 all quesitons",
        title: 'Geometry',
        link: "https://drive.google.com/file/d/1Wtd6OHvirmrfXwi69NL9EjQ7GPi2Qbl_/view?usp=sharing"
    },
    {
        description: "Mensuration 3D SSC CGL",
        title: 'Mens.',
        link: "https://drive.google.com/file/d/1WbZruvfo2k61i2LgxJgLKAZoY1k4vkBT/view?usp=sharing"
    }, {
        description: "Mixture & Alligation SSC CGL 2023",
        title: 'Mixture & Alligation',
        link: "https://drive.google.com/file/d/1XaCMJl-FiHipkIHrN2PHa9WAbGAe_rkN/view?usp=sharing"
    }, {
        description: "Number System SSC CGL 2023",
        title: 'Number System',
        link: "https://drive.google.com/file/d/1WsvQCC0cIf40EkzeMMDaK1dJDBbYV-pv/view?usp=sharing"
    },
    {
        description: "Police & Thief SSC CGL 2023 T-1",
        title: 'Police & Thief',
        link: "https://drive.google.com/file/d/1XfsmhJij4iwLnYb1nG-2-EngycN3t6lV/view?usp=sharing"
    }
    ,
    {
        description: "Profit Loss and Discount SSC CGL 2023",
        title: 'P & L & Discount',
        link: "https://drive.google.com/file/d/1XmFZB6eoMMPnuOWpEPHoG2e5tjYaeDQs/view?usp=sharing"
    }
    ,
    {
        description: "Race SSC CGL 2023 T-1",
        title: 'Race',
        link: "https://drive.google.com/file/d/1XW3KotqYnCrWVPcdJZsh5zB8QCNMdFWt/view?usp=sharing"
    }
    ,
    {
        description: "Ratio & Proportion SSC CGL 2023",
        title: 'Ratio & Proportion',
        link: "https://drive.google.com/file/d/1XR7d9sXWUJxVPNQB-cNd6VBUZhxK4lkX/view?usp=sharing"
    }
    ,
    {
        description: "SI AND CI (Eng) SSC CGL 2023",
        title: 'SI AND CI',
        link: "https://drive.google.com/file/d/1WfrkWTozQoR5yljMfEbuQ9oDsPpN_MsI/view?usp=sharing"
    }
    ,
    {
        description: "Time Speed & Distance SSC CGL 2023",
        title: 'Time Speed & Distance',
        link: "https://drive.google.com/file/d/1X2KQuaEvyFJ67xSeSTx3030EY-xCpb2G/view?usp=sharing"
    }]

export const GK_GS = [{
    description: 1,
    title: '2020',
    link: ""
},
{
    description: 2,
    title: '2021',
    link: ""
}, {
    description: 3,
    title: '2022',
    link: ""
}, {
    description: 4,
    title: '2023',
    link: ""
}]

export const Geography = [{
    description: "",
    title: 'INDIAN PHYSICAL GEOGRAPHY',
    link: "https://drive.google.com/file/d/1YfHT--2he71b2Sa8Z8sIsBatRxFXFrc1/view"
}]


export const Politydata:Apis[] = [
    {
        description: "Rapid-Revision-Book-Indian-Polity",
        title: "Rapid-Revision-Book-Indian-Polity",
        link: "https://www.dropbox.com/scl/fi/fffnwbgmezou5kx63sti8/Rapid-Revision-Book-Indian-Polity-1.pdf?rlkey=5qltvd11b45ajzbk8t9a7pm32&st=vm1krfhd&dl=0"
    }

]


export const CurrentAffairs:Apis[] = [{
    description: "RBE Revolutionary Current Affairs",
    title: 'RBE',
    link: "https://drive.google.com/file/d/1CZOCs6skQWiRwfgJTmVrxZ9UWCPW3mQd/view?usp=sharing"
},
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
    ,
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
]

export const EconomicsData:Apis[] = [
    {
        description: "Rapid-Revision-Book-Indian-Economy-UPSC-Prelims-2024",
        title: 'Indian-Economy-UPSC-Prelims',
        link: "https://www.dropbox.com/scl/fi/8df0tl8bphw3lv1h0grqs/Rapid-Revision-Book-Indian-Economy-UPSC-Prelims-2024.pdf?rlkey=k99h01grmsfee1e8xg3ag5iv9&st=3txj5ryg&dl=0"
    },
]


export const ArtandCulture:Apis[] = [
    {
        description:"Art And Culture By ",
        title: 'Art and Culture',
        link: "https://www.jiocloud.com/l/?u=F9ri3MfYyv0pqkJg_CKUMkaZg6nMOKngWUmHu_2Pg-M=8BX"
    }
]