// questions.js — Python Bootcamp Placement Test
// 30 ta savol | Aralash qiyinlik | Kodli savollar mavjud
// Mavzular: Basics, Data Structures, Functions, OOP, Algorithms

const questions = [

    // ─── PYTHON BASICS ───────────────────────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>x = 10\ny = 3\nprint(x // y)</pre>`,
        v: ["A) 3.33", "B) 3", "C) 4", "D) 1"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>print(10 % 3)</pre>`,
        v: ["A) 3", "B) 1", "C) 0", "D) 3.33"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>x = "5"\ny = 3\nprint(x * y)</pre>`,
        v: ["A) 15", "B) Xatolik", "C) 555", "D) '15'"],
        a: 2
    },
    {
        q: `Quyidagi ifodaning natijasi nima?\n<pre>bool(0), bool(""), bool([1])</pre>`,
        v: ["A) True, True, True", "B) False, False, True", "C) False, True, False", "D) True, False, True"],
        a: 1
    },
    {
        q: "Python'da o'zgaruvchi nomida qaysi belgilardan foydalanish mumkin?",
        v: ["A) Faqat harflar", "B) Harflar, raqamlar, pastki chiziq (_)", "C) Barcha belgilar", "D) Harflar va defis (-)"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)</pre>`,
        v: ["A) [1, 2, 3]", "B) [1, 2, 3, 4]", "C) Xatolik", "D) [4]"],
        a: 1
    },

    // ─── STRING ──────────────────────────────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>s = "Python"\nprint(s[-1])</pre>`,
        v: ["A) P", "B) n", "C) y", "D) Xatolik"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>s = "Hello, World!"\nprint(s[7:12])</pre>`,
        v: ["A) World", "B) World!", "C) orld!", "D) Hello"],
        a: 0
    },
    {
        q: "String metodlaridan qaysi biri bo'sh joylarni olib tashlaydi?",
        v: ["A) strip()", "B) remove()", "C) clear()", "D) trim()"],
        a: 0
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>print("ha" in "mahalla")</pre>`,
        v: ["A) False", "B) True", "C) Xatolik", "D) None"],
        a: 1
    },

    // ─── LIST, TUPLE, SET, DICT ───────────────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>lst = [3, 1, 4, 1, 5, 9]\nlst.sort()\nprint(lst[0])</pre>`,
        v: ["A) 3", "B) 9", "C) 1", "D) 5"],
        a: 2
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>t = (1, 2, 3)\nt[0] = 99\nprint(t)</pre>`,
        v: ["A) (99, 2, 3)", "B) (1, 2, 3)", "C) TypeError", "D) None"],
        a: 2
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>s = {1, 2, 2, 3, 3, 3}\nprint(len(s))</pre>`,
        v: ["A) 6", "B) 3", "C) 2", "D) 1"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>d = {"a": 1, "b": 2}\nd["a"] = 99\nprint(d)</pre>`,
        v: ["A) {'a': 1, 'b': 2}", "B) {'a': 99, 'b': 2}", "C) Xatolik", "D) {'a': [1, 99], 'b': 2}"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>lst = [1, 2, 3, 4, 5]\nprint(lst[::2])</pre>`,
        v: ["A) [2, 4]", "B) [1, 3, 5]", "C) [1, 2, 3]", "D) [5, 4, 3, 2, 1]"],
        a: 1
    },
    {
        q: "Dictionary'dan mavjud bo'lmagan kalit uchun xatolik bermay standart qiymat qaytaruvchi metod qaysi?",
        v: ["A) d[key]", "B) d.find(key)", "C) d.get(key, default)", "D) d.fetch(key)"],
        a: 2
    },

    // ─── FUNCTIONS ───────────────────────────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>def f(x, y=10):\n    return x + y\n\nprint(f(5))</pre>`,
        v: ["A) 5", "B) 10", "C) 15", "D) Xatolik"],
        a: 2
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>def counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\n\nc = counter()\nprint(c(), c())</pre>`,
        v: ["A) 0 0", "B) 1 1", "C) 1 2", "D) Xatolik"],
        a: 2
    },
    {
        q: `Quyidagi lambda ifoda nima qaytaradi?\n<pre>f = lambda x, y: x ** y\nprint(f(2, 8))</pre>`,
        v: ["A) 16", "B) 64", "C) 256", "D) 10"],
        a: 2
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>def greet(*args):\n    return " ".join(args)\n\nprint(greet("Salom", "Dunyo", "!"))</pre>`,
        v: ["A) Xatolik", "B) ['Salom', 'Dunyo', '!']", "C) Salom Dunyo !", "D) SalomDunyo!"],
        a: 2
    },

    // ─── LIST COMPREHENSION & ITERATORS ──────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>result = [x**2 for x in range(5) if x % 2 == 0]\nprint(result)</pre>`,
        v: ["A) [0, 4, 16]", "B) [1, 9, 25]", "C) [0, 1, 4, 9, 16]", "D) [4, 16]"],
        a: 0
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>pairs = [(1,"a"), (3,"c"), (2,"b")]\npairs.sort(key=lambda x: x[0])\nprint(pairs)</pre>`,
        v: ["A) [(1,'a'), (2,'b'), (3,'c')]", "B) [(3,'c'), (2,'b'), (1,'a')]", "C) Xatolik", "D) [(1,'a'), (3,'c'), (2,'b')]"],
        a: 0
    },

    // ─── OOP ─────────────────────────────────────────────────────────

    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nd = Dog("Rex")\nprint(d.speak())</pre>`,
        v: ["A) ...", "B) Rex says Woof!", "C) Xatolik", "D) Dog says Woof!"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\na = Counter()\nb = Counter()\nc = Counter()\nprint(Counter.count)</pre>`,
        v: ["A) 0", "B) 1", "C) 2", "D) 3"],
        a: 3
    },
    {
        q: "@staticmethod dekoratori bilan yaratilgan metodning farqi nima?",
        v: ["A) Faqat obyektdan chaqiriladi", "B) self yoki cls parametrini olmaydi", "C) Faqat meros orqali ishlaydi", "D) Avtomatik qaytaradi"],
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>class MyClass:\n    def __str__(self):\n        return "Men MyClass obyektiman"\n\nobj = MyClass()\nprint(obj)</pre>`,
        v: ["A) &lt;__main__.MyClass object&gt;", "B) MyClass", "C) Men MyClass obyektiman", "D) Xatolik"],
        a: 2
    },
    {
        q: "Encapsulation (inkapsulatsiya) maqsadi nima?",
        v: ["A) Kodni tezlashtirish", "B) Ma'lumotni yashirish va himoya qilish", "C) Ko'p meros olish", "D) Funksiyalarni birlashtirish"],
        a: 1
    },

    // ─── ERROR HANDLING ───────────────────────────────────────────────

    {
        q: `Quyidagi kodda xatolik turi qaysi?\n<pre>lst = [1, 2, 3]\nprint(lst[10])</pre>`,
        v: ["A) ValueError", "B) KeyError", "C) IndexError", "D) TypeError"],
        a: 2
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>try:\n    x = int("abc")\nexcept ValueError:\n    print("Xato!")\nfinally:\n    print("Tugadi")</pre>`,
        v: ["A) Faqat 'Xato!'", "B) Faqat 'Tugadi'", "C) 'Xato!' keyin 'Tugadi'", "D) Hech narsa"],
        a: 2
    },

    // ─── ADVANCED / ALGORITHMS ───────────────────────────────────────

    {
        q: `Quyidagi rekursiv funksiya nima qaytaradi?\n<pre>def mystery(n):\n    if n <= 1:\n        return n\n    return mystery(n-1) + mystery(n-2)\n\nprint(mystery(7))</pre>`,
        v: ["A) 7", "B) 13", "C) 21", "D) 8"],
        b: 1,
        a: 1
    },
    {
        q: `Quyidagi kod nima chiqaradi?\n<pre>data = {"a": 3, "b": 1, "c": 2}\nsorted_data = sorted(data, key=lambda k: data[k])\nprint(sorted_data)</pre>`,
        v: ["A) ['a', 'b', 'c']", "B) ['b', 'c', 'a']", "C) {'b':1,'c':2,'a':3}", "D) [1, 2, 3]"],
        a: 1
    }
];
