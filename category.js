//URL: https://www.shoppersstop.com/men-clothing-t-shirts-polos/c-A101010

//Product database to store in local storage:
​
const tshirts = [
    {   
        id: "1",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.1",
        sizes: ["MEDIUM", "X-LARGE", "XX-LARGE"],
        color: "White",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h5f/h81/16536303632414/S21T-01BA-040WH_WHITE.jpg_230Wx334H", "https://sslimages.shoppersstop.com/sys-master/images/h8f/h7a/16536303435806/S21T-01BA-040WH_WHITE.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h9b/h52/16536416387102/S21T-01BA-040WH_WHITE_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h11/h67/16536890966046/S21T-01BA-040WH_WHITE_alt2.jpg_1088Wx1632H"]
    },
    {
        id: "2",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.5",
        sizes: ["LARGE", "MEDIUM", "X-LARGE", "XX-LARGE"],
        color: "Ink Blue",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/hd2/h7e/16536835227678/S21T-01BA-039IN_INK_BLUE.jpg_230Wx334H", "https://sslimages.shoppersstop.com/sys-master/images/h8f/h85/16536835031070/S21T-01BA-039IN_INK_BLUE.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h6e/hb4/16536546541598/S21T-01BA-039IN_INK_BLUE_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h36/h89/16537036095518/S21T-01BA-039IN_INK_BLUE_alt2.jpg_1088Wx1632H"]

    },
    {
        id: "3",
        name: "ALTLIFE",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "599",
        discount: "50",
        brand: "ALTLIFE",
        rating: "4.3",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE", "XXX-LARGE"],
        color: "Black",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h62/hf5/16911277588510/S21183GPT472B_BLACK.jpg_230Wx334H", "https://sslimages.shoppersstop.com/sys-master/images/h10/hfd/16911277195294/S21183GPT472B_BLACK.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h45/h86/16911242428446/S21183GPT472B_BLACK_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h52/h28/16911172763678/S21183GPT472B_BLACK_alt2.jpg_1088Wx1632H"]
    },
    {
        id: "4",
        name: "LIFE",
        description: "Printed Cotton Blend Regular Fit Mens T-Shirt",
        price: "599",
        discount: "50",
        brand: "LIFE",
        rating: "4.6",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
        color: "Oatmeal",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h30/h09/16383076991006/S21183RNP461OT_OATMEAL.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h00/h10/16383076794398/S21183RNP461OT_OATMEAL.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/ha5/h65/16383098814494/S21183RNP461OT_OATMEAL_alt1.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/h69/hf5/16383113560094/S21183RNP461OT_OATMEAL_alt2.jpg_1088Wx1632H"]

    },
    {
        id: "5",
        name: "INDIAN TERRAIN",
        description: "Printed Cotton Stretch Regular Fit Mens T-Shirt",
        price: "1599",
        discount: "40",
        brand: "INDIAN TERRAIN",
        rating: "4.9",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "XX-LARGE"],
        color: "Blue",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h74/hbe/16732900982814/S21123TS00927IN_BLUE.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/hf6/hb6/16732900720670/S21123TS00927IN_BLUE.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/he4/hb3/16732838723614/S21123TS00927IN_BLUE_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/hc2/h2b/16732534767646/S21123TS00927IN_BLUE_alt2.jpg_1088Wx1632H"]
    },
    {
        id: "6",
        name: "LEE COOPER",
        description: "Printed Cotton Regular Fit Mens T-Shirt",
        price: "799",
        discount: "50",
        brand: "LEE COOPER",
        rating: "4.2",
        sizes: ["MEDIUM", "SMALL", "X-LARGE", "XX-LARGE"],
        color: "Grey",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h8e/h6d/16978380324894/S21T44GRE_GREY.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/hbe/h66/16978380128286/S21T44GRE_GREY.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/hcc/h05/16978355093534/S21T44GRE_GREY_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/hf4/h0c/16978460213278/S21T44GRE_GREY_alt2.jpg_1088Wx1632H"]

    },
    {
        id: "7",
        name: "ALLEN SOLLY",
        description: "Solid Cotton Lycra Regular Fit Mens T-Shirt",
        price: "1799",
        discount: "45",
        brand: "ALLEN SOLLY",
        rating: "3.7",
        sizes: ["LARGE", "MEDIUM", "SMALL"],
        color: "Mid Blue",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h1b/hb8/16313389482014/206890662_MID_BLUE.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/heb/hbe/16313389285406/206890662_MID_BLUE.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/he5/h51/16439285579806/206890662_MID_BLUE_alt1.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/h57/h8e/16408189796382/206890662_MID_BLUE_alt2.jpg_1088Wx1632H"]
    },
    {
        id: "8",
        name: "JACK AND JONES",
        description: "Mens Slim Fit Printed Round Neck T-Shirt",
        price: "999",
        discount: "50",
        brand: "JACK AND JONES",
        rating: "3.2",
        sizes: ["LARGE", "SMALL", "XX-LARGE"],
        color: "Yellow",
        images: ["https://sslimages.shoppersstop.com/sys-master/images/h2a/h02/16054335799326/206690104_YELLOW.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h66/h10/16054335340574/206690104_YELLOW.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/hc2/h8f/16054452060190/206690104_YELLOW_alt1.jpg_1088Wx1632H","https://sslimages.shoppersstop.com/sys-master/images/h6c/hce/16055388700702/206690104_YELLOW_alt2.jpg_1088Wx1632H"]

    },
    {
        id: "9",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.2",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
        color: "Coral",
        images: ["","",""]
    },
    {
        id: "10",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.2",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
        color: "Coral",
        images: ["","",""]

    },
    {
        id: "11",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.2",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
        color: "Coral",
        images: ["","",""]
    },
    {
        id: "12",
        name: "SPYKAR",
        description: "Solid Cotton Slim Fit Mens T-Shirt",
        price: "999",
        discount: "30",
        brand: "SPYKAR",
        rating: "4.2",
        sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
        color: "Coral",
        images: ["","",""]

    }
]