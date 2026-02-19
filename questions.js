// questions.js — Python Bootcamp Placement Test (Optimallashtirilgan)
// 20 ta savol | Mavzular: Python Basics & OOP

const questions = [
    // ─── PYTHON BASICS (1-12) ─────────────────────────────────────────
    {
        q: `Quyidagi kod natijasi nima bo'ladi?\n<pre>x = 15\ny = 4\nprint(x // y)</pre>`,
        v: ["A) 3.75", "B) 3", "C) 4", "D) 15"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>s = "Python"\nprint(s[1:4])</pre>`,
        v: ["A) Pyt", "B) ytho", "C) yth", "D) ythn"],
        a: 2
    },
    {
        q: `Python-da o'zgarmas (immutable) ma'lumot turini ko'rsating:`,
        v: ["A) List", "B) Dictionary", "C) Set", "D) Tuple"],
        a: 3
    },
    {
        q: `Ushbu kodning natijasi nima?\n<pre>a = [1, 2]\nb = a\nb.append(3)\nprint(a)</pre>`,
        v: ["A) [1, 2]", "B) [1, 2, 3]", "C) [3]", "D) Xatolik"],
        a: 1
    },
    {
        q: `Mavjud bo'lmagan kalit bilan lug'atga (dict) murojaat qilganda xatolik chiqmasligi uchun qaysi metoddan foydalaniladi?`,
        v: ["A) dict.pop()", "B) dict.get()", "C) dict.find()", "D) dict.keys()"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>print(2 ** 3 + 5 // 2)</pre>`,
        v: ["A) 10", "B) 6", "C) 10.5", "D) 8"],
        a: 0
    },
    {
        q: `List comprehension yordamida yaratilgan ushbu kod natijasi:\n<pre>[x for x in range(5) if x % 2 != 0]</pre>`,
        v: ["A) [1, 3]", "B) [0, 2, 4]", "C) [1, 2, 3]", "D) [1, 3, 5]"],
        a: 0
    },
    {
        q: `Funksiyada ixtiyoriy miqdordagi argumentlarni (positional arguments) qabul qilish uchun nima ishlatiladi?`,
        v: ["A) **kwargs", "B) *args", "C) &args", "D) list[]"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>x = "10"\ny = 5\nprint(int(x) + y)</pre>`,
        v: ["A) 105", "B) 15", "C) Xatolik", "D) '15'"],
        a: 1
    },
    {
        q: `Global o'zgaruvchini funksiya ichida o'zgartirish uchun qaysi kalit so'z ishlatiladi?`,
        v: ["A) static", "B) nonlocal", "C) global", "D) def"],
        a: 2
    },
    {
        q: `Set (to'plam) ma'lumot turining asosiy xususiyati nima?`,
        v: ["A) Elementlar tartiblangan bo'ladi", "B) Faqat raqamlarni saqlaydi", "C) Dublikat (bir xil) elementlarni saqlamaydi", "D) Elementlarni o'zgartirib bo'lmaydi"],
        a: 2
    },
    {
        q: `Quyidagi kod natijasi:\n<pre>f = lambda x: x * 2\nprint(f(f(3)))</pre>`,
        v: ["A) 6", "B) 9", "C) 12", "D) 3"],
        a: 2
    },

    // ─── OBJECT ORIENTED PROGRAMMING (13-20) ──────────────────────────
    {
        q: `Klass ichidagi metodning birinchi argumenti odatda nima deb nomlanadi?`,
        v: ["A) cls", "B) self", "C) this", "D) object"],
        a: 1
    },
    {
        q: `Klassdan obyekt olinganda birinchi bo'lib qaysi metod ishga tushadi?`,
        v: ["A) __str__", "B) __call__", "C) __init__", "D) __new__"],
        a: 2
    },
    {
        q: `Voroslik (Inheritance) nima?`,
        v: ["A) Ma'lumotlarni yashirish", "B) Bir klass xususiyatlarini ikkinchisiga o'tkazish", "C) Kodni tezroq ishlashi", "D) Xatolarni ushlash"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>class A:\n  def show(self):\n    return "A"\nclass B(A):\n  def show(self):\n    return "B"\nobj = B()\nprint(obj.show())</pre>`,
        v: ["A) A", "B) B", "C) AB", "D) Xatolik"],
        a: 1
    },
    {
        q: `Inkapsulyatsiya (Encapsulation) nima uchun kerak?`,
        v: ["A) Obyekt holatini tashqi ta'sirdan himoya qilish", "B) Klasslarni bir-biriga qo'shish", "C) Xotirani tejash", "D) Funksiyalarni ko'paytirish"],
        a: 0
    },
    {
        q: `Qaysi dekorator metodni klassga tegishli (obyektga emas) lekin 'self' talab qilmaydigan qiladi?`,
        v: ["A) @classmethod", "B) @property", "C) @staticmethod", "D) @abstractmethod"],
        a: 2
    },
    {
        q: `Super() funksiyasining vazifasi nima?`,
        v: ["A) Global o'zgaruvchiga murojaat", "B) Ota klass metodlarini chaqirish", "C) Klassni o'chirish", "D) Kodni optimallashtirish"],
        a: 1
    },
    {
        q: `Polimorfizm tushunchasining asosi nima?`,
        v: ["A) Bir xil nomli metodlarning har xil klasslarda turlicha ishlashi", "B) Klass ichida ko'p o'zgaruvchilar bo'lishi", "C) Ma'lumotlarni faqat bitta klassda saqlash", "D) Faqat bitta klassdan voris olish"],
        a: 0
    }
];
