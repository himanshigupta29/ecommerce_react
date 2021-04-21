const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3330;

// 71 home decor
// 71 - 12 - bedsheets
// 71 - 14 - artificial plants
// 72 accessories - 11 - watches  


const products = [

    [ // page 1 tv
        {
            id: "1",
            label: "OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)",
            price: 6574,
            description: "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "2",
            label: "AmazonBasics 127cm (50 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "3",
            label: "OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "4",
            label: "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "5",
            label: "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "6",
            label: "eAirtec 61 cms (24 inches) HD Ready LED TV 24DJ (Black) (2020 Model)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },
        {
            id: "7",
            label: "MI TV 4A Horizon Edition 80cm (32 inches) HD Ready Android LED TV (Grey)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        },                
        {
            id: "8",
            label: "Samsung 80 cm (32 Inches) HD Ready LED TV UA32T4010ARXXL (Black) (2020 model)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "34",
            sub_category_id: "43",
            in_stock: true
        }
    ],
    [ // page 2 bedsheets
        {
            id: "1",
            label: "Bella Casa Melody 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Printed, Gold, MEL341",
            price: 674,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "2",
            label: "Dream Weavers 200 TC 100% Cotton Rajasthani Jaipuri Queen Size Geometric Double Bed Bedsheet with 2 Pillow Covers - Multi",
            price: 799,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "3",
            label: "SPACES BONICA Bedsheets Large 210 TC 100% Cotton",
            price: 800,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "4",
            label: "Exopick 120 TC Microfiber Double Bedsheet (Pack of 1, Brown)",
            price: 700,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "5",
            label: "Tauhid Carpet Modern Area Rug (Grey Ivory, Microfiber, 3 X 5 Feet)",
            price: 2000,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "6",
            label: "Xtore Cotton 300 TC Bedsheet (King_Yellow)",
            price: 1200,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "7",
            label: "linenaffairs Bubble Design Bedsheet, 100% Cotton Single Bedsheet with 2 Pillow Covers, 186 TC (Grey)",
            price: 1100,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "8",
            label: "Spaces Skyrise Beige 210 Tc Cotton Single Bed Sheet with Pillow Cover",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "9",
            label: "Maspar Cotsmere Melange Hemstitch 300 TC 3 Piece Egyptian Cotton Double Bedsheet with 2 Pillow Covers",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "10",
            label: "INSTA CRAFT Cotton 220 TC King Size Bedsheets with Pillow Covers (RED)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        }
    ],
    [  //page 3 bedsheets
        {
            id: "11",
            label: "Loreto – A Quality Linen Brand 144 TC 100% Cotton King Bedsheet with 2 Pillow Covers, Yellow and Grey, Polka",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "12",
            label: "Bella Casa Melody 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Printed, Gold, MEL341",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "13",
            label: "Spaces Skyrise Beige 210 Tc Cotton Single Bed Sheet with Pillow Cover",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "14",
            label: "SPACES BONICA Bedsheets Large 210 TC 100% Cotton",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "15",
            label: "Loreto – A Quality Linen Brand 144 TC 100% Cotton King Bedsheet with 2 Pillow Covers, Yellow and Grey, Polka",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "16",
            label: "linenaffairs Bubble Design Bedsheet, 100% Cotton Single Bedsheet with 2 Pillow Covers, 186 TC (Grey)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "17",
            label: "Spaces Skyrise Beige 210 Tc Cotton Single Bed Sheet with Pillow Cover",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "18",
            label: "Loreto – A Quality Linen Brand 144 TC 100% Cotton King Bedsheet with 2 Pillow Covers, Yellow and Grey, Polka",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "19",
            label: "Divine Casa 100% Pure Cotton 144 TC Combo Set of 2 Single Bedsheet Cotton with Pillow Cover - Yellow, Floral",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
        {
            id: "20",
            label: "Trance Home Linen Cotton 400 TC Elasticated Fitted Bedsheet with 2 Pillow Coves,",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "12",
            in_stock: true
        },
    ],
    [ // page 4 artificial plants
      
        {
            id: "1",
            label: "TDas Artificial Ivy Garlands Leaves Greenery Hanging Vine Creeper Plants for Home Decor Door Wall Balcony Decoration Party Festival Craft, Contains 80 Leaves -Each String 6.7 ft ( Pack of 6 Strings)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "2",
            label: "CAAJIB Decor's Imported Artificial Long White Slim Leaves with Purple Pot | Fire Retardant Plant for Home, Washroom and Office Decor",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "3",
            label: "UPKOCH Artificial Plants Hanging Ferns Fake Ivy Garland Greenery Branches Hanging Plants Wedding Deocration for Table Runner Wedding Holiday Fireplace Mantel Green 2pcs",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "4",
            label: "CAAJIB Decor's Imported Artificial Long Yellow & White Slim Leaves with Pink Pot | Fire Retardant & UV Protected Plant for Home, Washroom and Office Decor",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "5",
            label: "Dekorly Set of 4 Mini Decorative, Home Office or Gift Bonsai Wild Artificial Plant with Pot (RED Flower Bonsai, Maroon Wild Bonsai, Sunflower Yellow Plant,Green Bushy Bonsai)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "6",
            label: "Set of 4 -Cute Small Artificial Plants Bonsai Potted |04 Multi Designs Plastic Grass for Home Office Decor-15 cm (6 Inches | Multicolour | 4 Piece)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "7",
            label: "Heart Home Artificial Vine Plant Small Potted in Black Pot Plastic Fake Green Vine for Office Home Decor Faux Plant for Hanging Baskets, Green-HEARTXY11603",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "8",
            label: "Synaty Artificial Succulent Faux Plant (Multiple Colors, 8 Pieces) (Spring Green, 8)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "9",
            label: "Nurturing Green Lucky Bamboo (Small:2 Layer Bamboo,Glass Pot)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "10",
            label: "Fancy Mart Plastic & Wood Artificial Bamboo Leaves Plant with Wood Hexagon Pot (20 cm, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

    ],
    [ // page 5 artificial plants
        {
            id: "11",
            label: "Fancy Mart Artificial Bamboo in Wood Comb Pot (30 cm, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "12",
            label: "DecoreBugs Artificial Bamboo Leaves in Apple Pot (Height : 40 cm)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "13",
            label: "Fourwalls Beautiful Artificial Areca Palm Plant Without Vase (21 Leaves, 75 cm Tall, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "14",
            label: "DecoratingLives Artificial Plant with Plastic Pot (Green, 2 Piece)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "15",
            label: "Fancy Mart Plastic & Wood Artificial Bamboo Leaves Plant with Wood Hexagon Pot (20 cm, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "16",
            label: "DecoratingLives Artificial Plant with Plastic Pot (Green, 1 Piece)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "17",
            label: "Fancy Mart Artificial Bamboo in Wood Comb Pot (30 cm, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "18",
            label: "Fancy Mart Plastic & Wood Artificial Bamboo Leaves Plant with Wood Hexagon Pot (20 cm, Green)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },

        {
            id: "19",
            label: "Nurturing Green Lucky Bamboo (Small:2 Layer Bamboo,Glass Pot)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
        {
            id: "20",
            label: "Synaty Artificial Succulent Faux Plant (Multiple Colors, 8 Pieces) (Spring Green, 8)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "71",
            sub_category_id: "14",
            in_stock: true
        },
    ],
    [ // page 6 - watches

        {
            id: "1",
            label: "Bfit Gen 1 (Color : Black) Touchscreen Unisex smartwatch with HRM, Smartphone notifications and upto 15 days active battery life",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "2",
            label: "NIBOSI Chronograph Men's Watch ( Black Dial & Strap )",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "3",
            label: "TIMEX Analog Brown Men Watch TW000U936",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "4",
            label: "NIBOSI Analog Men's Watch (Black Dial, Black Colored Strap)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "5",
            label: "Noise ColorFit Pro 3 Smart Watch with 1.55 HD Color Touch Screen, SpO2, Sleep, & Stress Monitor, Personalised Watch Faces, 5 ATM Waterproof (Jet Black)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "6",
            label: "Fastrack reflex 2.0 Uni-sex activity tracker - Calorie counter, Call and message notifications and up to 10 Day battery Life - SWD90059PP05 / SWD90059PP05",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "7",
            label: "realme Fashion Watch 1.4 Large HD Color Display, Full Touch Screen, SpO2, Continuous Heart Rate Monitor, Black, Free Size (RMA161)",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "8",
            label: "Fastrack reflex 2.0 Uni-sex activity tracker - Calorie counter, Call and message notifications and up to 10 Day battery Life - SWD90059PP06 / SWD90059PP06",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "9",
            label: "Fossil Chronograph Black Men Watch CH2882",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        },
        {
            id: "10",
            label: "EDDY HAGER Time Teacher - Analogue Men's Watch EH-226",
            price: 6574,
            description : "",
            desc_img_url : "",
            thumbnail_url: "",
            category_id: "72",
            sub_category_id: "11",
            in_stock: true
        }

    ]

];


const MAX_PAGES = products.length;


// http://localhost:3330/assets/images/categories/77/171/1/full.jpg

app.use('/assets', express.static(__dirname + '/assets'));
app.use(cors());

app.get('/', (req, res) => {
    res.send(`App is working`);
});


app.get('/products', (req, res) => {

    const qpage = req.query.page;

    let page;

    
    console.log(page);
    
    if( qpage >= MAX_PAGES || qpage < 0) {
        res.json([]);
        return;
    } else if(qpage === undefined) {
        page = 0;
    } else {
        page = parseInt(qpage);
    }
    
    console.log(page);

    res.json(products[page]);

});



app.get('/categories', () => {

    // lang query param

    res.json([
        {
            id: 77,
            label: 'Electronics'
        },
        {
            id: 78,
            label: 'Fashion'
        },
        {
            id: 71,
            label: 'Home Decor'
        },
        {
            id: 72,
            label: 'Books'
        },

    ])
});


app.get('/subcategories', () => {

    // lang query param
    // get cstegory id
    res.json([
        {
            id: 177,
            label: 'TV'
        },
        {
            id: 178,
            label: 'Washing Machine'
        },
        {
            id: 171,
            label: 'Refrigerators'
        },
        {
            id: 712,
            label: 'Camera'
        },

    ])
});


app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
