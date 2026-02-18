// questions.js
const questions = [
    { q: "Python'da o'zgaruvchiga qiymat berish qanday amalga oshiriladi?", v: ["A) int x = 5", "B) x = 5", "C) var x = 5", "D) x := 5"], a: 1 },
    { q: "Quyidagilardan qaysi biri o'zgartirib bo'lmaydigan (immutable) ma'lumot turi?", v: ["A) List", "B) Dictionary", "C) Tuple", "D) Set"], a: 2 },
    { q: "if sharti blokini qanday belgilashimiz kerak?", v: ["A) {}", "B) ()", "C) Indentatsiya (bo'shliq)", "D) []"], a: 2 },
    { q: "range(5) funksiyasi qanday sonlarni generatsiya qiladi?", v: ["A) 1, 2, 3, 4, 5", "B) 0, 1, 2, 3, 4", "C) 0, 1, 2, 3, 4, 5", "D) 1, 2, 3, 4"], a: 1 },
    { q: "Siklni to'xtatish uchun qaysi kalit so'z ishlatiladi?", v: ["A) stop", "B) exit", "C) break", "D) end"], a: 2 },
    { q: "Funksiyani aniqlash uchun qaysi kalit so'z ishlatiladi?", v: ["A) function", "B) func", "C) def", "D) define"], a: 2 },
    { q: "*args parametri nima uchun ishlatiladi?", v: ["A) Kalit-so'zli argumentlar uchun", "B) Cheksiz miqdordagi pozitsiyali argumentlar uchun", "C) Global o'zgaruvchi uchun", "D) Qiymat qaytarish uchun"], a: 1 },
    { q: "Listga yangi element qo'shuvchi metod?", v: ["A) add()", "B) push()", "C) append()", "D) insert()"], a: 2 },
    { q: "Listni kesish (slicing) bo'yicha my_list[1:4] natijasi nimani qaytaradi (agar elementlar ko'p bo'lsa)?", v: ["A) 1, 2, 3, 4 indeksdagi elementlar", "B) 1, 2, 3 indeksdagi elementlar", "C) 0, 1, 2, 3 indeksdagi elementlar", "D) 2, 3, 4 indeksdagi elementlar"], a: 1 },
    { q: "Dictionary (lug'at) ma'lumotlariga kalit orqali qanday murojaat qilamiz?", v: ["A) myDict[key]", "B) myDict(key)", "C) myDict.get(key)", "D) A va C to'g'ri"], a: 3 },
    { q: "Set (to'plam)ning asosiy xususiyati nima?", v: ["A) Elementlari takrorlanishi mumkin", "B) Elementlari tartiblangan bo'ladi", "C) Elementlari o'zgaruvchan (mutable)", "D) Elementlari takrorlanmaydi va tartibsiz"], a: 3 },
    { q: "OOPda Class (sinf) nima?", v: ["A) Obyekt", "B) Obyektlar yaratish uchun shablon (blueprint)", "C) Funksiya", "D) O'zgaruvchi"], a: 1 },
    { q: "Class ichidagi konstruktor funksiya nomi?", v: ["A) __init__", "B) __start__", "C) __new__", "D) __constructor__"], a: 0 },
    { q: "Obyektning o'ziga murojaat qiluvchi parametri nomi?", v: ["A) this", "B) self", "C) me", "D) object"], a: 1 },
    { q: "Meros olish (Inheritance) sintaksisi?", v: ["A) class Child(Parent):", "B) class Child extends Parent:", "C) class Child inherits Parent:", "D) class Child -> Parent:"], a: 0 },
    { q: "Super() funksiyasi qanday ishlaydi?", v: ["A) Ota klassni o'chiradi", "B) Ota klass metodlariga murojaat qiladi", "C) Yangi klass yaratadi", "D) Xatolik beradi"], a: 1 },
    { q: "Inkapsulatsiya (Encapsulation) nima?", v: ["A) Ma'lumotlarni himoya qilish va yashirish", "B) Ma'lumotlarni o'chirish", "C) Ma'lumotlarni ko'paytirish", "D) Ma'lumotlarni tashqariga chiqarish"], a: 0 },
    { q: "__str__ metodi qanday vazifani bajaradi?", v: ["A) Obyekt yaratilganda ishlaydi", "B) Obyekt matn ko'rinishida so'ralganda ishlaydi", "C) Obyekt o'chirilganda ishlaydi", "D) Hisoblash amalini bajaradi"], a: 1 },
    { q: "Polimorfizm nimani anglatadi?", v: ["A) Bir nechta shaklga ega bo'lish", "B) Faqat bitta klass bo'lish", "C) Kodni yashirish", "D) Ma'lumotlarni bazaga saqlash"], a: 0 },
    { q: "Quyidagi kod natijasi nima? print(type([1, 2, 3]))", v: ["A) <class 'tuple'>", "B) <class 'list'>", "C) <class 'array'>", "D) <class 'set'>"], a: 1 }
];