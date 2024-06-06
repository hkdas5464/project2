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

export const EnglishRules = [
    {
        description: "Complete English Grammar ebook",
        title: 'Complete English Grammar',
        link: "https://drive.google.com/file/d/1OHoPAfhB5jFgjEDdqCJ2qj-UCYZ9rP4Y/view?usp=sharing"
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

export const GkData = [{
    description: "RAILWAY GS 7100(2nd edition)ENGLISH MEDIUM @ebook…",
    title: 'RAILWAY GS 7100',
    link: "https://drive.google.com/file/d/1Tfz5XhyzqVbBBGQBfmp-8FuPveNU87Ie/view?usp=sharing"
},
{
    description: "Pinnacle GS 6th edition (Hindi Medium)",
    title: 'Pinnacle GS 6th edition (Hindi Medium',
    link: "https://drive.google.com/file/d/1VBnLUtdFixFRVbpfGgGYHh2ma3I18FQl/view?usp=sharing"
},
{
    description: "GS 6500 6th Edition Book (English Medium)@ebookst…",
    title: 'Pinnacle GS 6500 6th Edition',
    link: "https://drive.google.com/file/d/1UExRvV9s8LSvAkoLZbo0FVh8W8bdSQFx/view?usp=sharing"
}
]

export const ReasoningData = [
    {
        description: "REASONING 6TH EDITION ( ENGLISH) PINNACLE @ebook…",
        title: 'PINNACLE REASONING 6TH EDITION ( ENGLISH)',
        link: "https://drive.google.com/file/d/1UPRVIn8Rs8nt5jvyarPY0b3wNbQPK-J_/view?usp=sharing"
    },
    {
    description: "Reasoning DSSSB JJA Mar 2024 compilation_RBE_compressed",
    title: 'Reasoning DSSSB',
    link: "https://drive.google.com/file/d/1_eUfR5yibFDQewnCtx0-KDwd_FqFfMuP/view?usp=sharing"
},
{
    description: "SSC_CGL2021_REASONING(English)_topic-wise_RBE (optimized)",
    title: 'SSC_CGL2021_REASONING',
    link: "https://drive.google.com/file/d/1ABULsUPqnlGKGGtazjGafycufBzAz-TV/view?usp=sharing"
},
{
    description: "IB ACIO 2023 Compilation ENGLISH--30--1---24 FINAL-1.pdf",
    title: 'IB ACIO 2023 Compilation ENGLISH',
    link: "https://drive.google.com/file/d/14FBLuwt6PS7kJ_fYkQqDlGRJFxhEzi4N/view?usp=sharing"
},
{
    description: "IB ACIO II Exe. 2024 English 8 sets by RG Vikramjeet sir",
    title: 'IB ACIO II Exe. 2024 English 8 ',
    link: "https://drive.google.com/file/d/14KHrvLgN5WAWFRSNb8GZXnRjGDu3pJc1/view?usp=sharing"
},
{
    description: "JSA_DSSSB_Reasoning_(in English)_RBE_April 2022_RBE.pdf ",
    title: 'JSA_DSSSB_Reasoning_(in English)',
    link: "https://drive.google.com/file/d/14KOu731lzTiLLuiahGTnvsHkQ_U-vdIh/view?usp=sharing"
},
{
    description: "Reasoning (eng) CPO 2023 T-1 topic-wise-img_RBE_compress",
    title: 'Reasoning (eng) CPO 2023 T-1 top',
    link: "https://drive.google.com/file/d/14OMHmFDcVEekX529xtCG5KoQf1EQF5mf/view?usp=sharing"
},
{
    description: "Reasoning (eng) mock SSC Steno 2023 T-1_RBE_compressed.p",
    title: 'Reasoning (eng) mock SSC Steno 2',
    link: "https://drive.google.com/file/d/14Rv4WKKRQqcpRSiLNAY_7ST5CS0vXad8/view?usp=sharing"
},
{
    description: "Reasoning (eng) SSC CPO 2023 T-1_RBE_compressed.pdf PDF ",
    title: 'Reasoning (eng) SSC CPO 2023 T-1',
    link: "https://drive.google.com/file/d/14VaQgBSj0PLEB7ar9R7suKPq7k63NRmm/view?usp=sharing"
},
{
    description: "Reasoning_eng_Mock_form_SSC_CHSL_2023_T_1_jpg_RBE_compre",
    title: 'Reasoning_eng_Mock_form_SSC_CHSL',
    link: "https://drive.google.com/file/d/14pC7zAD0nMoMeOK-1X1j2Ea1BWx3Y9Tg/view?usp=sharing"
},
{

    description: "Reasoning_eng_SSC_GD_2024_Tier_1_53_shits_compilaiton_RB",
    title: 'Reasoning_eng_SSC_GD_2024_Tier_1',
    link: "https://drive.google.com/file/d/14qDYl0DulpfVKHabBdpnU6Ssku17SsRJ/view?usp=sharing"
},
{
    description: "SET_1_to_100_REASONING_PRACTICE_SETS_BY_PIYUSH_VARSHNEY_",
    title: 'SET_1_to_100_REASONING',
    link: "https://drive.google.com/file/d/1x2zK9sCf70vQ1Xpwi_zbEIudZR1IJ11T/view?usp=sharing"
}]


export const Englishrule = [
    {
        description: "PINNACLE ENGLISH 7600 6th Edition Book (English Medium)",
        title: "PINNACLE ENGLISH 7600 6th",
        link: "https://drive.google.com/file/d/1Tuz3tXI9eWSnSH_YPj-MdaOS-wZ4hTnD/view?usp=sharing"
    },
    {
        description: "English 20000+ vocab book final@ebookstore01.pdf",
        title: "PINNACLE English 20000+ vocab book",
        link: "https://drive.google.com/file/d/1UCGwyJ21_7CG5zR9mkfMtEKnR8e0rqZO/view?usp=sharing"
    },
    {
        description: "Complete English Grammar ebook ",
        title: "Complete English Grammar",
        link: "https://drive.google.com/file/d/1OHoPAfhB5jFgjEDdqCJ2qj-UCYZ9rP4Y/view?usp=sharing"
    },
    {
        description: "Phrasal Verbs eBook",
        title: "Phrasal Verbs eBook.pdf",
        link: "https://drive.google.com/file/d/1OUlefQuiv2d4cF6WVn-lJ49tFuTYn955/view?usp=sharing"
    },
    {
        description: "Narration e-book - Copy",
        title: "Narration e-book - Copy",
        link: "https://drive.google.com/file/d/1OZz_MujEOqmc13N8EhpTyF88oLGKq8di/view?usp=sharing"
    },
    {
        description: "Parajumbles ebook",
        title: "Parajumbles ebook",
        link: "https://drive.google.com/file/d/1ObegaeRKfTDZGk6ww867szL95OyPl-QR/view?usp=sharing"
    },

    {
        description: "Antonyms_and_Synonyms_A_to_Z_bilingual_with_100",
        title: "Antonyms_and_Synonyms",
        link: "https://drive.google.com/file/d/1OjeEuWElZtJb4wArxfPithkDYlDzNGvZ/view?usp=sharing"
    },

    {
        description: "Idioms and Phrases ebook",
        title: "Idioms and Phrases",
        link: "https://drive.google.com/file/d/1P-M7liyAXdgM0xcqJt3yKCz3dUh3wSig/view?usp=sharing"
    },

    {
        description: "Active Passive Voice 1000 MCQ ebook",
        title: "Active Passive Voice",
        link: "https://drive.google.com/file/d/1OlRBJBS89fk2JTZ31xgqa6iG7nQnzmH4/view?usp=sharing"
    },
    {
        description: "English Comprehension 250 Passages ebook",
        title: "English Comprehension",
        link: "https://drive.google.com/file/d/1P1UpZkYx0Ok5w7Hy9QbeuFEL4-CeNTl3/view?usp=sharing"
    },
    {
        description: "English 250 Cloze Test ebook",
        title: "English 250 Cloze Test ebook",
        link: "https://drive.google.com/file/d/1P4tgSsaPaKiAt6cKBxwuGwxephgIFHZf/view?usp=sharing"
    },
    {
        description: "Sentence Improvement ebook",
        title: 'Sentence Improvement',
        link: "https://drive.google.com/file/d/1PBWZr0g9j031MdUy5UH5yN38BR9bQOjq/view?usp=sharing"
    },
    {
        description: "Spot the error ebook Neeru Madam",
        title: 'Spot the error',
        link: "https://drive.google.com/file/d/1PCgTAZqZFdYTODLepn4IG6hx35jFdJTi/view?usp=sharing"
    }, {
        description: "SSC_CGL_Tier_1_English_100_practice_sets_TCS",
        title: 'SSC_CGL_Tier_1_English_100_practice_sets_TCS',
        link: "https://drive.google.com/file/d/1PDlOoNLfTD_QPRpzF9lFWXt9js79zzoN/view?usp=sharing"
    }, {
        description: "One word substitution ebook",
        title: 'One word substitution',
        link: "https://drive.google.com/file/d/1PIOfIr57uYVOLn1a4dSUmC86kahjABRz/view?usp=sharing"
    }
    , {
        description: "SSC_CGL_Tier_2_Math_40_practice_sets_ebook",
        title: 'SSC_CGL_Tier_2_Math_40_practice_sets_ebook',
        link: "https://drive.google.com/file/d/1PKxdpGZVruTaNETYL-F6I1Do9zfus2hb/view?usp=sharing"
    }
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

export const MathsData = [
    {
        description: "MATH_6800_6th_Edition_Book_English_Medium_2024",
        title: 'PINNACLE MATH_6800',
        link: "https://drive.google.com/file/d/1UL-X6carWlPiVrCEFj1BtJDZ5_ROrmL6/view?usp=sharing"  
    },
    {
        description: "Maths Concept King Book",
        title: 'Maths Concept King Book',
        link: "https://drive.google.com/file/d/1R8acU7ymFVApIH9hOs5lW35E87zByvBv/view?usp=sharing"
    },
    {
        description: "Inspector_chalisa",
        title: 'Inspector_chalisa',
        link: "https://drive.google.com/file/d/1Qqjc_RoLcTvLtxGCBvuQEDD_gQhNk2gq/view?usp=sharing"
    },
    {
        description: "Maths Formula Book By Aditya Ranjan",
        title: 'Maths Formula Book',
        link: "https://drive.google.com/file/d/1RCN1H-ftPsHvQMvnJ_5fqcarRHR3lg4e/view?usp=sharing"
    }
]