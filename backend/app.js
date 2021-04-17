const express = require('express');

const app = express();
const PORT = 3330;


// http://localhost:3330/assets/images/categories/77/171/1/full.jpg

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.send(`App is working`);
});

app.get('/products', (req, res) => {
    res.json(
        [
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
                id: "787328",
                label: "Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver",
                price: 6574,
                description : "",
                desc_img_url : "",
                thumbnail_url: "",
                category_id: "34",
                sub_category_id: "43",
                in_stock: true
            },
            {
                id: "2",
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
        ]
    );
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
