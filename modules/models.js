const types = [
    "All Items",
    "Stylus Pen",
    "Drawing Tablet",
    "Keyboard and Sets",
    "Apple Pencil Cover",
    "Apple accessories",
    "Tablet accessories",
    "Phone accessories",
    "Stand",
    "Earphones and accessories"
]

const products = [{
    id: 1,
    name: 'Ipad Pouch',
    price: 500000,
    img: ['./asset/ipad-pouch.png', './asset/laptop-stand.png', './asset/aesthetic-girl.png'],
    type: 'Apple accessories',
    size: '20x20',
    demo: 'https://www.youtube.com',
    info: `đ§ June Giveaway Included đŤśđť âď¸
    <br>(áĄááŻáśá¸áá­ áááşááąá¸ááŤááąáŹáş đĽ°) 
    <br>đť ááŽ post áážáŹ áážá­áááťáž Instock ááŻááŻáááŻááąá¸áá˝áą áĄááŻááş áááşáˇááąá¸ááŹá¸ááźáŽá¸ááąáŹáˇ ááťáąá¸áá˝áąááąáŹ Specifications áá˛ ááąá¸ááąá¸ááŹá¸ááŤáááşáážááşáˇ âď¸
    <br>đ§áááşáááşáá­áŻáˇ ááášáááşá¸áá˝áąáá­áŻááą áááşááŻááş áážáŹáá˛ áá­áŻáˇááŹá¸ááŹáá­áŻáˇ ááášáááşá¸áááşá¸áááş ááŹáááşáá­áŻ áááşááŻááşáá˛ áĄáááşááźáąáá­áŻáˇááŤáážááşáˇá 
    <br>âď¸ Payment áĄááąáá˛áˇ áááşááŻááş ááášáááąá¸ áá­áŻ áĄá­ááşáĄááąáŹááşáá˝áąááťáąáá­áŻáˇáááŤáááşá Banking áá­áŻáááşááąáŹáˇ ááźá­áŻáážááşá¸áááŤáááşáážááşáˇá 
    <br>áááźáŹá¸ááźá­áŻáˇááťáŹá¸ áá˝áąááźá­áŻáá˝ážá˛áááŤáááşáážááşáˇá đ
    <br>đ§ áá­ááťááşááŹááąá¸ááťáŹá¸áážá­áááş Cb áážáŹ ááąá¸ááąá¸ááŤáážááşáˇá áĄáŹá¸ááŹáá˛áˇ ááźááş Reply ááąá¸áážáŹááŤááąáŹáş đĽ° 
    <br>đ¤ Surprise Gift ááąá¸ááťááşááŹááŹááŹáá­áŻáá˛ Post áááşááąá¸ááŤáááşááąáŹáş đ¤­
    <br>âď¸ Rainy Season GA áĄááąáá˛áˇ ááŽPost ááąá¸áá­áŻ Like, and share ááŹá¸ááŹááąá¸áá­áŻ Ment ááąá¸ááŤááąáŹáş đĽ°  
    <br>â 1st Prize - Tenmoons Drawing Tablet 
    <br>â2nd Prize- 10000 Gift Voucher 
    <br>â3rd Prize- 3k Ph Bill 
    <br>Customer áá˛á áááźáŹá¸ Like, Share  ááŹá¸áááşáá­áŻ ááŹáá˛áˇ áááşáá°áĄáŹá¸ááąá¸áááşáá­áŻ 
    <br>â ááášáááşá¸áážááşááťá­áŻá¸áá˛áˇ áĄáááş
    <br>â 40000 áá˛áˇ áĄáááş áá­áŻááŹáá˛áˇ 
    <br>Ygn - Deli Free
    <br>Others- 1500 off ááąá¸ááąá¸áážáŹááŤáážááşáˇá đĽ° 
    <br>(Shared Ss ááąá¸ááąáŹáˇ ááźááąá¸áá­áŻáˇáá­áŻááŤáááşááąáŹáşá) 
    <br>áĄááŻáśá¸áá­áááşááąá¸ááźáá­áŻáˇ áĄáŹááŤá¸ááťáŹ đ¤­đŤśđť`,
    instock: true,
    count: 10
}, {
    id: 2,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Stand',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'All Stands',
    instock: true,
    count: 25
}, {
    id: 3,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Stylus Pen',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 4,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Drawing Tablet',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 5,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Keyboard and Sets',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 6,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Apple Pencil Cover',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 7,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Tablet accessories',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 8,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Phone accessories',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}, {
    id: 9,
    name: 'Laptop Stand',
    price: 1000,
    img: ['./asset/laptop-stand.png'],
    type: 'Earphones and accessories',
    size: '20x22',
    demo: 'https://www.youtube.com',
    info: 'ipad info',
    instock: true,
    count: 25
}]

export {
    products,
    types
};