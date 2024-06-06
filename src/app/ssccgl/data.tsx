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
        link: "https://drive.google.com/file/d/1E8xLSCxCRqoO_2-QVg1K0EzF3wxLdKmW/view?usp=sharing",
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

export const EnglishData = [
    {
        description: "TARUN_GROVER_PAID_ENGLISH_HAND_WRITTEN_NOTES_PDF",
        title: 'TARUN_GROVER_PAID_ENGLISH',
        link: "https://drive.google.com/file/d/19u77aVf6idfJch-JBbbJU303yNMJPbFM/view?usp=sharing"
    },
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