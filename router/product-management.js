const express = require('express');
const router = express.Router();
const fs = require('fs');

// Path ของไฟล์ JSON ที่เก็บข้อมูล
const dataPath = './data/products-data.json';

// อ่านข้อมูลจากไฟล์ JSON
const readData = () => JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// เขียนข้อมูลลงในไฟล์ JSON
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// 1. GET /products - ดึงข้อมูลสินค้าทั้งหมด
router.get('/products', (req, res) => {
    const products = readData();
    res.json(products);
});

// 2. POST /products - เพิ่มสินค้าใหม่
router.post('/products', (req, res) => {
    const products = readData();  //นำข้อมูลที่อ่านในไฟล์ json เก็บไว้ในตัวแปร Product
    const newProduct = { //สร้าง Object โดยใน object จะมีข้อมูล Product ID ใหม่ และข้อมูลที่ถูกส่งมาจาก Request
        id: products.length + 1,
        ...req.body
    };
    products.push(newProduct); //push object ใหม่ลงใน Array products
    writeData(products); // หลังจากเพิ่ม Object แล้วทำการเขียนไฟล์ json ทับลงไปใหม่
    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct
    });
});

// 3. PUT /products/:id - แก้ไขข้อมูลสินค้าโดยใช้ ID
router.put('/products/:id', (req, res) => {
    const products = readData();
    const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id)); // ค้นหาทำแหน่ง product id จากไฟล์ json แล้วเก็บลงในตัวแปร productIndex
    if (productIndex === -1) { // ตรวจสอบว่า มี Id อยู่หรือไม่
        return res.status(404).json({ message: 'Product not found' });
    }
    products[productIndex] = { // ทำการ assign ข้อมูลเดิมและข้อมูลใหม่ลงใน Array ตำแหน่งที่ตรงกับ ID ของ Product
        ...products[productIndex], 
        ...req.body
    };
    writeData(products);
    res.json({
        message: 'Product updated successfully',
        product: products[productIndex]
    });
});

// 4. DELETE /products/:id - ลบสินค้าโดยใช้ ID
router.delete('/products/:id', (req, res) => {
    const products = readData();
    const newProducts = products.filter((p) => p.id !== parseInt(req.params.id)); // ใช้ Filter สร้าง Array ใหม่สร้างโดยดู product id ว่า id ไหนไม่ตรงกับ id ที่ Request มาให้เก็บลงใน Array
    if (products.length === newProducts.length) { // เปรียบเทียบขนาดของ Array products (ก่อนกรอง) และ newProducts (หลังกรอง)
        return res.status(404).json({ message: 'Product not found' }); //หากขนาดเท่ากัน หมายความว่า ไม่มีสินค้าใน products ที่มี id ตรงกับ req.params.id
    }
    writeData(newProducts);
    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;
