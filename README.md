# MultiVision Report - Web Sitesi

MultiVision Report, yapay zeka destekli tıbbi görüntüleme raporlama platformu için tasarlanmış modern, responsive web sitesi.

## 🚀 Özellikler

- **Modern Tasarım**: React 18 + TypeScript + Vite ile geliştirilmiş
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile etkileyici geçişler
- **Form Yönetimi**: React Hook Form + Zod validasyon
- **SEO Optimizasyonu**: react-helmet-async ile meta tag yönetimi
- **Tailwind CSS**: Hızlı ve tutarlı stil geliştirme
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Dark/Light Mode**: Sistem tercihi ile otomatik ve manuel tema değişimi
- **Theme Persistence**: LocalStorage ile tema tercihini hatırlama

## 📋 Gereksinimler

- Node.js 18.0.0 veya üzeri
- npm veya yarn

## 🛠️ Kurulum

1. Projeyi klonlayın:

```bash
git clone [repository-url]
cd MultiVisionReport_UI
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 📜 Kullanılabilir Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Prodüksiyon build'i oluşturur
- `npm run preview` - Build'i önizler
- `npm run lint` - ESLint ile kod kontrolü yapar
- `npm run test` - Testleri çalıştırır

## 🏗️ Proje Yapısı

```
src/
├── components/
│   ├── ui/           # Yeniden kullanılabilir UI bileşenleri
│   ├── layout/       # Header, Footer gibi layout bileşenleri
│   └── sections/     # Ana sayfa bölümleri
├── styles/           # Global CSS dosyaları
├── test/            # Test konfigürasyonları
└── App.tsx          # Ana uygulama bileşeni
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary**: Indigo tonları (#6366f1)
- **Success**: Yeşil tonları (#22c55e)
- **Medical Blue**: #0ea5e9
- **Medical Green**: #10b981

### Tipografi

- **Ana Font**: Inter (sans-serif)
- **Başlık Font**: Poppins (display)

### Grid Sistemi

- 8px temel grid sistemi
- Maksimum genişlik: 1200px
- Responsive breakpoint'ler

### Tema Sistemi

- **Light Mode**: Açık tema (varsayılan)
- **Dark Mode**: Koyu tema
- **Otomatik Algılama**: Sistem teması tercihi ile başlatma
- **Manuel Değişim**: Header'daki toggle butonu ile tema değişimi
- **Persistence**: Kullanıcı tercihini localStorage'da saklama

## 📱 Responsive Tasarım

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Konfigürasyon

### Tailwind CSS

Özelleştirilmiş Tailwind konfigürasyonu `tailwind.config.js` dosyasında bulunur.

### TypeScript

Sıkı tip kontrolü için `tsconfig.json` konfigürasyonu mevcuttur.

### ESLint

Kod kalitesi için ESLint kuralları `.eslintrc.cjs` dosyasında tanımlanmıştır.

## 🧪 Test

Vitest + React Testing Library ile test edilmiştir:

```bash
npm run test
```

## 📦 Deployment

### Vercel

```bash
npm run build
```

Dist klasörünü Vercel'e deploy edin.

### Netlify

```bash
npm run build
```

Dist klasörünü Netlify'a upload edin.

## 📞 İletişim

**YAKAZA Bilişim Çözümleri ve Danışmanlık Ltd. Şti.**

- **Adres**: Üniversiteler Mah. 1606. Cd. Kapı No: 4/A, Cyberpark Cyberplaza A Blok, Zemin Kat No: Z05, Bilkent 06800 Çankaya/ANKARA
- **Telefon**: 0-312-295-6485
- **E-posta**: multivision@yakaza.com.tr
- **Web**: www.yakaza.com.tr

## 📄 Lisans

Bu proje YAKAZA Bilişim tarafından geliştirilmiştir. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📈 Versiyon Geçmişi

- **v1.1.0** - Dark Mode Güncellemesi

  - Dark/Light tema değişimi eklendi
  - Theme toggle button (Header'da)
  - Sistem teması otomatik algılama
  - LocalStorage ile tema persistence
  - Tüm bileşenlerde dark mode desteği

- **v1.0.0** - İlk sürüm
  - Hero section
  - Features section
  - Modules section
  - How it works section
  - Benefits section
  - Screenshots section
  - Testimonials section
  - Contact form
  - Responsive tasarım
  - SEO optimizasyonu
