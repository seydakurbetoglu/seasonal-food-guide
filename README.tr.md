# Mevsimsel Gıda Rehberi (Seasonal Food Guide)

Seçilen aya göre Türkiye'de hangi sebze, meyve ve balıkların mevsiminde olduğunu gösteren, mobil uyumlu bir rehber uygulaması. Mevsiminde yemek daha ucuz, daha taze ve daha sürdürülebilir, ama bilgi dağınık. Bu uygulama hepsini tek yerde topluyor.

Bitlis Eren Üniversitesi Mobil Programlama dersi final projesi olarak geliştirildi.

## Özellikler

- Aya göre mevsimsel ürün listesi
- Kategori filtresi (sebze, meyve, balık)
- Ürün arama
- Ürün detayları (faydaları, saklama önerileri, tüketim fikirleri)
- Favoriler ve alışveriş listesi, `localStorage` ile saklanıyor
- Açık / koyu tema
- Mobil ekranlara uyumlu arayüz
- İnternetsiz çalışır: veri seti uygulamanın içinde

## Kullanılan Teknolojiler

| Katman | Teknoloji |
| --- | --- |
| Android kabuğu | Android Studio, Java, WebView |
| Arayüz | HTML5, CSS3 |
| İş mantığı | JavaScript |
| Depolama | localStorage |
| Varlıklar | SVG, web app manifest |

Web uygulaması Android `WebView` içinde çalışır ve `app/src/main/assets/www/index.html` dosyasını yükler.

## Proje Yapısı

```
├── index.html            # Web sürümü
├── styles.css
├── app.js
├── manifest.webmanifest
├── assets/               # Görseller ve ikonlar
└── android-studio/       # Android Studio projesi
    └── app/src/main/assets/www/   # WebView'in yüklediği web dosyaları
```

## Nasıl Çalıştırılır

**Web sürümü:** `index.html` dosyasını tarayıcıda aç.

**Android sürümü:**
1. Android Studio'yu aç ve **Open**'ı seç.
2. `android-studio` klasörünü seç.
3. Gradle Sync'in bitmesini bekle.
4. Emülatör ya da bağlı telefon seçip **Run**'a bas.

## Yol Haritası

- Konuma göre pazar ve bölgesel ürün önerileri
- Gerçek zamanlı pazar fiyatları
- Kamera ile barkod okuma
- Kullanıcı hesabı ve bulut senkronizasyonu

## Notlar

Geliştirme sırasında kod iskeleti, rapor düzenleme ve hata kontrolü için yapay zekâ destekli araçlardan yararlanıldı. Proje kapsamı, tasarım kararları ve son kontrol bana aittir.
