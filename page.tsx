import DrinkCard, { Drink } from "../../components/DrinkCard";

export default function DrinksPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </main>
  );
}

const drinks: Drink[] = [
  {
    id: 1,
    name: "ลาเต้เย็น",
    category: "กาแฟ",
    description: "เอสเปรสโซเข้มข้นผสมนมสด หอมมัน ดื่มง่าย",
    imageUrl:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    components: ["เอสเปรสโซ", "นมสด", "น้ำแข็ง"],
    ingredients: ["เมล็ดกาแฟ", "นมสด", "น้ำเชื่อม"],
  },
  {
    id: 2,
    name: "มัทฉะลาเต้",
    category: "ชา",
    description: "มัทฉะหอมละมุนผสมนมสด ดื่มได้ทั้งวัน",
    imageUrl:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
    components: ["มัทฉะ", "นมสด", "น้ำแข็ง"],
    ingredients: ["ผงมัทฉะ", "นมสด", "น้ำผึ้ง"],
  },
  {
    id: 3,
    name: "อเมริกาโนส้ม",
    category: "กาแฟ",
    description: "กาแฟหอมสดชื่น ผสมน้ำส้มรสเปรี้ยวหวาน",
    imageUrl:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
    components: ["เอสเปรสโซ", "น้ำส้ม", "น้ำแข็ง"],
    ingredients: ["เมล็ดกาแฟ", "น้ำส้ม", "ส้มสด"],
  },
  {
    id: 4,
    name: "ชาพีช",
    category: "ชา",
    description: "ชาหอมกลิ่นพีช เสิร์ฟเย็นพร้อมเนื้อพีช",
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
    components: ["ชาดำ", "พีช", "น้ำแข็ง"],
    ingredients: ["ใบชา", "พีช", "เลมอน"],
  },
  {
    id: 5,
    name: "โกโก้เย็น",
    category: "โกโก้",
    description: "โกโก้เข้มข้นผสมนมสด หวานมันกำลังดี",
    imageUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
    components: ["โกโก้", "นมสด", "น้ำแข็ง"],
    ingredients: ["ผงโกโก้", "นมสด", "น้ำตาล"],
  },
  {
    id: 6,
    name: "เลมอนโซดา",
    category: "โซดา",
    description: "เลมอนรสเปรี้ยวซ่าผสมโซดา สดชื่น",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.OtrBsYt1qLGm3NF9z1UKBgHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    components: ["เลมอน", "โซดา", "น้ำแข็ง"],
    ingredients: ["เลมอน", "โซดา", "น้ำผึ้ง"],
  },
  {
    id: 7,
    name: "สตรอว์เบอร์รีโยเกิร์ต",
    category: "สมูทตี้",
    description: "สตรอว์เบอร์รีปั่นกับโยเกิร์ต เนื้อเนียนนุ่ม",
    imageUrl:
      "data:image/webp;base64,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",
    components: ["สตรอว์เบอร์รี", "โยเกิร์ต", "น้ำแข็ง"],
    ingredients: ["สตรอว์เบอร์รี", "โยเกิร์ต", "นมสด"],
  },
  {
    id: 8,
    name: "ชามะนาวน้ำผึ้ง",
    category: "ชา",
    description: "ชาหอมสดชื่น ผสมมะนาวและน้ำผึ้ง",
    imageUrl:
      "https://img.wongnai.com/p/1920x0/2023/09/15/5f260d0cdc22477cba359c3cf27be660.jpg",
    components: ["ชาดำ", "มะนาว", "น้ำแข็ง"],
    ingredients: ["ใบชา", "มะนาว", "น้ำผึ้ง"],
  },
];
