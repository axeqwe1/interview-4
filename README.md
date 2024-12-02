### วิธีการTest ยิง API ที่ผมทำ
1.มีโปรแกรมสำหรับการ Test Api ของผมคือ Postman
![image](https://github.com/user-attachments/assets/2f0e6071-a922-4240-9abf-68ec3012f322)

2.สร้าง Endpoint Api โดยจะมี เพิ่ม ลบ แก้ไข
![image](https://github.com/user-attachments/assets/2c9bf740-1d77-4113-ad0a-7e6e84b75258)

-- การเพิ่มข้อมูลจะต้องใช้ post สำหรับการส่ง Request เข้าสู่ Api
![image](https://github.com/user-attachments/assets/f05226ea-8159-4c28-8821-d81ff0d24646)
หลังจาก ยิง Api แล้วจะมีการ Response กลับมาตามที่เรากำหนดไว้

-- การแก้ไขข้อมูลจะต้องใช้ put สำหรับการส่ง request เข้าสู่ Api
![image](https://github.com/user-attachments/assets/1f1483e5-0887-4392-9f2a-10789c719bb0)
โดยตัว Endpoint จะมีการให้ส่ง id ไปด้วยเพื่อสำหรับการแก้ไขข้อมูลเฉพาะ id นั้นๆ ตัวอย่าง

![image](https://github.com/user-attachments/assets/9b1d0f44-3f76-403b-866f-323200547d67)
หลังจากส่ง request ไปตัวserver กะจะ response ตามที่เรากำหนดไว้

-- การลบข้อมูลจะต้องใช้ delete แล้วส่งค่า id ตามมาด้วย
![image](https://github.com/user-attachments/assets/cd0f2a80-bcff-4c9c-81a2-441a122c4bac)
โดยการ request จะทำการส่งค่า ID ไปอย่างเดียวไม่จำเป็นต้องมีรายละเอียด request เพิ่มเติมเพราะลบข้อมูลตาม ID ของข้อมูล




