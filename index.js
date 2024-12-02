const express = require('express');
const productsRouter = require('./router/product-management');
const app = express();

// Middleware สำหรับแปลง JSON
app.use(express.json());

// ตั้งค่าเส้นทางหลักสำหรับ RESTful API
app.use('/api', productsRouter);

// ตั้งค่าพอร์ต
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
