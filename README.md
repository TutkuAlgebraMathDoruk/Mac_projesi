# 🏀 Basketbol Maç Özeti Simülatörü

İki takım arasında oynanan 4 periyotluk bir basketbol karşılaşmasını dinamik skorlarla simüle eden ve detaylı periyot özetleri ile maç sonucunu bir dizi (array) halinde dönen JavaScript fonksiyonu.

---

## 📌 Özellikler

* **4 Periyot Simülasyonu:** Karşılaşma 4 çeyrek üzerinden döngüyle modellenir.
* **Dinamik Skor Üretimi:** Her periyot için her iki takıma da `12` ile `26` arasında rastgele basket sayısı atanır.
* **Kümülatif Skor Takibi:** Her periyotta atılan sayılar toplam skora eklenerek güncellenir.
* **Sonuç Belirleme:**
  * Ev sahibi takımın kazanma durumu
  * Ev sahibi takımın kaybetme durumu
  * Eşitlik halinde maçın uzatmalara gitme durumu

---

## 💻 Kullanım

```javascript
const macOzeti = require('./macOzeti.js');

const sonuc = macOzeti("Fenerbahçe Beko", "Anadolu Efes");
console.log(sonuc);
