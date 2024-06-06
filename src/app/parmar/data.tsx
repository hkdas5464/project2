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

export const English = [
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

export const Reasoning = [{
    description: "Reasoning DSSSB JJA Mar 2024 compilation_RBE_compressed",
    title: 'Reasoning DSSSB',
    link: "https://drive.google.com/file/d/1_eUfR5yibFDQewnCtx0-KDwd_FqFfMuP/view?usp=sharing"
},
{
    description: "SSC_CGL2021_REASONING(English)_topic-wise_RBE (optimized)",
    title: 'SSC_CGL2021_REASONING',
    link: "https://drive.google.com/file/d/1ABULsUPqnlGKGGtazjGafycufBzAz-TV/view?usp=sharing"
}]


export const Mathsdata = [
    {
        description: "Selection_Post_Phase_viii_,ix,_x,_xi_All_Maths_Questions",
        title: "Selection_Post_Phase",
        link: "https://drive.google.com/file/d/1DnY39Id7mh3Jw5rgXvL6bxFhhQNzXeTM/view?usp=sharing"
    },
    {
        description: "RPF SI ALL Maths QUESTIONS 2019",
        title: "RPF SI ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1DsYcjvTYLylRHAMk9DpH6421Tp5l6JXA/view?usp=sharing"
    },
    {
        description: "RRB NTPC ALL Maths QUESTIONS 2019",
        title: "RRB NTPC ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1E93sraZ256YZVjoMgHyjAl2n-x6uGqn3/view?usp=sharing"
    },
    {
        description: "Railway ALP ALL Maths QUESTIONS (Bilingual)",
        title: "Railway ALP ALL Maths",
        link: "https://drive.google.com/file/d/1E8xLSCxCRqoO_2-QVg1K0EzF3wxLdKmW/view?usp=sharing"
    },

    {
        description: "Railway Group D ALL Maths QUESTIONS (Bilingual)",
        title: "Railway Group D ALL Maths",
        link: "https://drive.google.com/file/d/1ENX1UQQQP4udKsyixZEiA6Qv85JcX1or/view?usp=sharing"
    },

    {
        description: "CPO 2023 All Shift Ques + Solution",
        title: "CPO 2023 All Shift Ques + Sol",
        link: "https://drive.google.com/file/d/1ERiKoOU_wHRvM1og7nUZeqF7DCnZZavw/view?usp=sharing"
    },

    {
        description: "CDS-1 (2024) All Maths Questions With Answer Key",
        title: "CDS-1 (2024) All Maths Questions With Answer Key",
        link: "https://drive.google.com/file/d/1EQx9BU5jh9MqbWMn67WDNWc_XRKPY_XN/view?usp=sharing"
    },
    {
        description: "RPF CONSTABLE ALL Maths QUESTIONS 2019",
        title: "RPF CONSTABLE ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1EE3yBEKep4s3pt-jhUCGUc4kTA5CvBOe/view?usp=sharing"
    },
    {
        description: "Selection_Post_Phase_viii_,ix,_x,_xi_All_Maths_Questions",
        title: "Selection_Post_Phase",
        link: "https://drive.google.com/file/d/1DnY39Id7mh3Jw5rgXvL6bxFhhQNzXeTM/view?usp=sharing"
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
    },
    {
        description: "Trigonometry SSC CGL 2023",
        title: 'Trigono',
        link: "https://drive.google.com/file/d/1KtCI9Ceg8P8KnCEH6ZSNm5TXjR8Pnyo5/view?usp=sharing"

    }
    ,
    {
        description: "TIME AND WORK CGL 2023 TIER 1",
        title: 'TIME AND WORK',
        link: "https://drive.google.com/file/d/1TxjqpAebROdzLbOPwJMbtMftJMQxvk8z/view?usp=sharing"
    },
    {
        description: "Circle SSC CGL 2023",
        title: 'Circle',
        link: "https://drive.google.com/file/d/1XjC10dQoLH8IU7TQH9PT1jRK-jIgAbJ6/view?usp=sharing"
    },

]


export const CurrentAffairs = [{
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

export const EnglishData1 = [
    {
        description: "Idioms_Book_for_SSC_CPO,_CHSL,_CGL",
        title: 'Idioms_Book_for_SSC',
        link: "https://drive.google.com/file/d/1BmztFAtnQOvNFWJXp9Q7rwBJEVwSGKv-/view?usp=sharing"
    },
    {
    description: "English topic-wise SSC CPO 2023 T-1_img_RBE_compressed",
    title: 'English All',
    link: "https://drive.google.com/file/d/10zHzVqk9XqnR8Q7FPp0SAZX2AX6-Qcfb/view?usp=sharing"
},
{
    description: "Last 5 Years IDIOMS",
    title: 'IDIOMS',
    link: "https://drive.google.com/file/d/15dYP18h4MFoJ5J0HF1rQRud_hvLocyV5/view?usp=sharing"
}
    ,
{
    description: "IB ACIO 2024 complete solution eBook",
    title: 'IB ACIO 2024',
    link: "https://drive.google.com/file/d/14mq4sP2RDc781MMpHX2eEkCz5lamJg-A/view?usp=sharing"
}
    ,
{
    description: "IB ACIO 2024 Complete Vocab eBook",
    title: 'IB ACIO VOCAB',
    link: "https://drive.google.com/file/d/1vV2vfbqjDja5gI2twErSretHrPeeVRlV/view?usp=sharing"
}
]

export const Parmarpyq = [
    {
        description: "LECTURE - 10 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1IAgVnRB1W-rS94b7wtRcMYiaSdiNB3KZ/view?usp=sharing"
    },
    {
        description: "LECTURE - 12 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1IBf2k42nNk5NZEHlcBbzBWkVoOa-dsLE/view?usp=sharing"
    },
    {
        description: "LECTURE - 13 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1II_6WglV9prKcEPgCSV-UvFvX57E1Vo0/view?usp=sharing"
    },

    {
        description: "LECTURE - 14 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1IJ60n8cK76r0awElYRxqMp9VLEsVQHel/view?usp=sharing"
    },

    {
        description: "LECTURE - 14 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1IKLi0KGUFRLbbd4Z2vzJ78EsjzcRtkau/view?usp=sharing"
    },

    {
        description: "LECTURE - 15 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1IKnBouZyZeyRLYW7vHSiHdvleLJylbyJ/view?usp=sharing"
    },

    {
        description: "LECTURE - 15 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1IKvrh8SnALhQSikjGdL51eusk5Xoz50w/view?usp=sharing"
    },

    {
        description: "LECTURE - 16 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1IMW47qp9Wcu6yS5OI3r9u8ldWUOKf2X1/view?usp=sharing"
    },

    {
        description: "LECTURE - 20 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1IOT-bc__flkdHRYbU2DEuEaudHLvTMcY/view?usp=sharing"
    },

    {
        description: "LECTURE - 27   a-list-item",
        title: '',
        link: "https://drive.google.com/file/d/1IOmhbKtOMFFwUzWvL3nGIOP4hfF5K5Ce/view?usp=sharing"
    },

    {
        description: "LECTURE - 28   a-list-item",
        title: '',
        link: "https://drive.google.com/file/d/1IOn_8eVhE3B6WIXXZHRSgmU9PblpjT-i/view?usp=sharing"
    },

    {
        description: "LECTURE - 32   a-list-item",
        title: '',
        link: "https://drive.google.com/file/d/1IQV7Kosohjjod8s1gIdOsjgeeM6oimHv/view?usp=sharing"
    },

    {
        description: "LECTURE - 33   a-list-item",
        title: '',
        link: "https://drive.google.com/file/d/1IeFWD2Bs7GxKn0zU60oaHSZ3oqzTsoLy/view?usp=sharing"
    },

    {
        description: "LECTURE -1 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1IglCDbibwxp41TdJz0IYQC6kBydRB8ge/view?usp=sharing"
    },

    {
        description: "LECTURE -2 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1InrIsnPOmFSFHGhUlVdLZxHHusO35zZw/view?usp=sharing"
    },

    {
        description: "LECTURE -3 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1Is9bzdzzKbmHWPlJ4vcZDjgDQSfpuH5C/view?usp=sharing"
    },

    {
        description: "LECTURE -4 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1It77aRjeKWi6ZdB4tJsabqcnkkQZXLBF/view?usp=sharing"
    },

    {
        description: "LECTURE -5 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1IunlzNrNxRtnbEnNMmIme6FFgHVKPUod/view?usp=sharing"
    },

    {
        description: "LECTURE -6 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1IwSZbKM2ZKdwEK_sdpbRrzhteNNG1I23/view?usp=sharing"
    },

    {
        description: "LECTURE -7 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1Izsq-N4-TlFXpiO0Jm0oIQuPKlIlLDP5/view?usp=sharing"
    },

    {
        description: "LECTURE -8 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1J02IIgExrVUTYRoTVtLRzC7cI8eL9-m2/view?usp=sharing"
    },

    {
        description: "LECTURE -9 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1J8uBtiMLERPN-JKKAGq0Dz5SWq4UCLW-/view?usp=sharing"
    },

    {
        description: "LECTURE -16 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JS2b-z2l0OeaE8gHh5zQfR6qPyf7SF02/view?usp=sharing"
    },

    {
        description: "LECTURE -18 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JXx1mny-bjj50Fq-_4ZUmLOAU0uMNW2u/view?usp=sharing"
    },

    {
        description: "LECTURE -19 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JfCKMd7fE8Gicmt44SLeeZcx4Vipi3-R/view?usp=sharing"
    },

    {
        description: "LECTURE -21 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JiX4Ljy-h49W_rIXzxuQSsL76PDgT7sU/view?usp=sharing"
    },

    {
        description: "LECTURE -22 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JnlmvLEHVxkkhHU8QU5sDIi5bMIZgCSq/view?usp=sharing"
    },

    {
        description: "LECTURE -23 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JtA-z7DzR4dBqRTaEYLBAahmTQpTPR-3/view?usp=sharing"
    },

    {
        description: "LECTURE -24 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1Ju0A3hp1jxvcQfsiquC8_8DR6kQ5XwKr/view?usp=sharing"
    },

    {
        description: "LECTURE -25 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1JwqzYSSnIjN20J90Wc9aMkfxdLUck1Pc/view?usp=sharing"
    },

    {
        description: "LECTURE -26 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1K3WsynxaScl8DwdT0UwmFtaBYK_LIRzj/view?usp=sharing"
    },

    {
        description: "LECTURE -2",
        title: '',
        link: "https://drive.google.com/file/d/1K4X5q-TlYXnDfyD5gYUG6q74n8tzs3zQ/view?usp=sharing"
    },

    {
        description: "LECTURE -2",
        title: '',
        link: "https://drive.google.com/file/d/1K9kZWytg6J_ujhh7Dq9lhaPnS2UgCjVf/view?usp=sharing"
    },

    {
        description: "LECTURE -2",
        title: '',
        link: "https://drive.google.com/file/d/1K9zd_RBPjIPzgeXSNPQ_RBFPDPqEX57H/view?usp=sharing"
    },

    {
        description: "LECTURE -3",
        title: '',
        link: "https://drive.google.com/file/d/1KBZ8NhMYf7yHAuKcwWEORIewv9KvQ-TI/view?usp=sharing"
    },

    {
        description: "LECTURE -3",
        title: '',
        link: "https://drive.google.com/file/d/1KDuuvFbPPpXiuQt_q_u0RrQdL7ICC6gY/view?usp=sharing"
    },

    {
        description: "LECTURE -3",
        title: '',
        link: "https://drive.google.com/file/d/1KM9_eGT0QM8ewQAtxkj9A_GB_jZsdb15/view?usp=sharing"
    },

    {
        description: "LECTURE -3",
        title: '',
        link: "https://drive.google.com/file/d/1KMRl7yRodsgy-5qSfFJnw1zQoE06zyzg/view?usp=sharing"
    },

    {
        description: "LECTURE- 21 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KOaeImjT8ffIJus_IBbsb0NDlDdrqjGz/view?usp=sharing"
    },

    {
        description: "LECTURE-1 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KOePuJRRPJ64S6CD7lpDBAXUq0XKPDuR/view?usp=sharing"
    },

    {
        description: "LECTURE-2 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KRLc8XtisMP7mLSk3Cg_G0MWRupMLY2u/view?usp=sharing"
    },

    {
        description: "LECTURE-3 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KRQeIjQcomUuMDgsWpi2enw5Bi6Vvl8r/view?usp=sharing"
    },

    {
        description: "LECTURE-4 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1Kb936yWDY1JX0EhmiEsAby6suxrH3csh/view?usp=sharing"
    },

    {
        description: "LECTURE-5 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KfyB22PkwQNlPxprHLvCicWnrijJf8bx/view?usp=sharing"
    },

    {
        description: "LECTURE-6 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KhGDRB9t6vr6b8ekds63_F6n1-XvpPnq/view?usp=sharing"
    },

    {
        description: "LECTURE-7 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KlURUaTuyzmXQvSKTpJVg0n8Lj7kMuV0/view?usp=sharing"
    },

    {
        description: "LECTURE-8 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KllJZC431-PHwp5LNbWNNjJwFBvXebug/view?usp=sharing"
    },

    {
        description: "LECTURE-9 (Notes in Hindi)",
        title: '',
        link: "https://drive.google.com/file/d/1KoCmCVv-qKrEystne62UJ0LVuJukmAe0/view?usp=sharing"
    },

    {
        description: "LECTURE-10 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1Kp6HIQoIaPDYSRtk8Y8D72uI-u1-noTt/view?usp=sharing"
    },

    {
        description: "LECTURE-11 (Notes in English)",
        title: '',
        link: "https://drive.google.com/file/d/1KsnUlD19_ELzm-KaJAvXMAwGHfeegtZ9/view?usp=sharing"
    },

    {
        description: "LECTURE-11 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1KvFtElpG7il8aHrwSCyWKd3j6BN85M79/view?usp=sharing"
    },

    {
        description: "LECTURE-12 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1KwGA2W5_W02jbFyDktaa5VPpUcvRHd2B/view?usp=sharing"
    },

    {
        description: "LECTURE-13 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1LHk-HgHMUUiO8H3LAD0sOaEz6R-F-YDY/view?usp=sharing"
    },

    {
        description: "lecture-17 (Notes in English",
        title: '',
        link: "https://drive.google.com/file/d/1LKP-0LASdyFBY3XyZKms1kSFtugDmrNb/view?usp=sharing"
    },

    {
        description: "LECTURE-17 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1LZeAlLOF3gNAxfDDRfTSDMkCNyLDyXNC/view?usp=sharing"
    },

    {
        description: "LECTURE-18 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1LfFHFCSDAfkRmSiAA2XDLYEu_nseRnwB/view?usp=sharing"
    },

    {
        description: "LECTURE-19 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1LkEtG6pAE97Pdv5NVYXe34s1LHqFJwfh/view?usp=sharing"
    },

    {
        description: "LECTURE-20 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1LzeOPqCKdu24RVlKXn_xZIzF2-Q49zBj/view?usp=sharing"
    },

    {
        description: "LECTURE-22 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1M4rsZ5EVqju7PAyLMpYRDWNfIM9iV_Oz/view?usp=sharing"
    },

    {
        description: "LECTURE-23 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1M70XWpcFSy42DhKP0KcZ9DbrsRaOZG40/view?usp=sharing"
    },

    {
        description: "LECTURE-24 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1M80FtztMOWmgP4BTJXYxwyT-LaGLalR-/view?usp=sharing"
    },

    {
        description: "LECTURE-25 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1M93_Ed1c2SCE3THXbnrFMG85h3cHVxHF/view?usp=sharing"
    },

    {
        description: "LECTURE-26 (Notes in Hindi",
        title: '',
        link: "https://drive.google.com/file/d/1M9WMw2YJK1biWfHqBBBcMzbs-JMwdNYn/view?usp=sharing"
    },

    {
        description: "LECTURE-",
        title: '',
        link: "https://drive.google.com/file/d/1MMsCFEKGSWy6CDmYuW8xo-MzC2S_-WAG/view?usp=sharing"
    },

    {
        description: "LECTURE-",
        title: '',
        link: "https://drive.google.com/file/d/1MNlrbjU4EXzk81v8TTtEvFwFG_WZFKE5/view?usp=sharing"
    },

    {
        description: "LECTURE-",
        title: '',
        link: "https://drive.google.com/file/d/1MTqfxan7or3xsHgAWuatSdet-gRkdcsb/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1MUXEnWeuNkv2o2Rke8WK2LlzhzFDdZxR/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1MVhgA3Dav0gwGUYbxyNog7xXeMEBx-PJ/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1MWME6XaN0KdZJ8LY6KTbfOSSBMN_QOmt/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1MX4WHq3hFVDeLw-qoy_XJ2Z2aKJJK69A/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE ",
        title: '',
        link: "https://drive.google.com/file/d/1MaQzbeTQet074LJK_08diJDg3KZjZNB-/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE ",
        title: '',
        link: "https://drive.google.com/file/d/1Mc0-JdAAD42pKPUEILooNbGs082YfQQe/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE ",
        title: '',
        link: "https://drive.google.com/file/d/1McT9gpDRyN_KwcHuDneIe6R7sJH_4ljQ/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1MlHptzT2UZxrnKR9cfEv7AxekMXQCBes/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1Musp522KaxUlSLSV3y7kc4AD6mEqqbKf/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1Mw0VUdCEdHJvNyoh_AiPceq1pmuNEm8T/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1Mx30dniERO8sxcEJdj7BntKpieDNZqpR/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1N-KNbn09cpKocpquCMlQbDGZgFJWnwXP/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1N8Au9JeCP-9WJd8OlDVgwLlVUwQdtl38/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in English - LECTURE -",
        title: '',
        link: "https://drive.google.com/file/d/1N9sZqnCtS_YBlNpRsg6kauHGCAL8OVMx/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1NMZOvnX1Mhjv67nRvyvuv6v73eEtmKpB/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1NQVXgCh7-ZGhIPqzkR93dG1nqTwcO1wR/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE - ",
        title: '',
        link: "https://drive.google.com/file/d/1Nt3HG9JHNLXExXxMVPB6OitmIlwtFSE8/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-3",
        title: '',
        link: "https://drive.google.com/file/d/1NuCYtLriwdpLME4M6lEzBh2dF6b5dTSP/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-3",
        title: '',
        link: "https://drive.google.com/file/d/1NuNUvDY_KmOcOTK3ijO6yBmb3cjnJ9TP/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-3",
        title: '',
        link: "https://drive.google.com/file/d/1NumCggjEVXV54vHyZ9Ie-cFkKMWy_7db/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-3",
        title: '',
        link: "https://drive.google.com/file/d/1NvVWyc03SJkghvI-pwG6Z4SnfykdpZNW/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1O-Y80HtxoFiRiho4U-24yWvQvrkiLm54/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1O-ceDTPCFKns1q6qhAqkMCUwMydchM2x/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1O5E7rFZTDnZkFwX8E-a7TeDyPQTKEzRa/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1O7LdPOhHrt0rWogQwUu9VreWkycOA8nz/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1OHxZm4GwgcFbL5Z7YtzbdIGSSF_gTGyT/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1OJ-TaX4jfpXUSibvDgqH89f7KECeZUZX/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1OK4nQa4D8sYyvfThosdX1zEcxMQMp5JH/view?usp=sharing"
    },

    {
        description: "SSC GK PYQ NOTES -3 - Notes in Hindi - LECTURE-4",
        title: '',
        link: "https://drive.google.com/file/d/1OL2BAgBYEP7sYFn8a5QRImYd37thGbUG/view?usp=sharing"
    },

    {
        description: "SSC_GK_PYQ_NOTES_3_Notes_in_Hindi_Notes_in_Engl",
        title: '',
        link: "https://drive.google.com/file/d/1OQPWYARqYCpD_im0614xeLvMou5o5oey/view?usp=sharing"
    },



]