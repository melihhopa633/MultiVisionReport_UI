import { motion } from "framer-motion";
import { Quote, Star, Building2, User } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";

const testimonials = [
  {
    id: 1,
    name: "Dr. Mehmet Özkan",
    title: "Radyoloji Uzmanı",
    company: "Ankara Üniversitesi Hastanesi",
    avatar: "/avatars/dr-ozkan.jpg",
    rating: 5,
    text: "MultiVision Report sayesinde rapor yazma sürem %85 azaldı. Artık hastalarıma daha fazla zaman ayırabiliyorum. Ses tanıma teknolojisi gerçekten etkileyici, Türkçe tıbbi terimleri mükemmel anlıyor.",
    specialty: "Radyoloji",
  },
  {
    id: 2,
    name: "Dr. Ayşe Demir",
    title: "Kardiyoloji Uzmanı",
    company: "Acıbadem Hastanesi",
    avatar: "/avatars/dr-demir.jpg",
    rating: 5,
    text: "EKO modülü inanılmaz kullanışlı. Önceden 30 dakika süren raporları şimdi 5 dakikada tamamlıyorum. Sistem önceki tetkiklerle karşılaştırma yapıyor, bu gerçekten büyük avantaj.",
    specialty: "Kardiyoloji",
  },
  {
    id: 3,
    name: "Dr. Can Yılmaz",
    title: "İç Hastalıkları Uzmanı",
    company: "Memorial Hastanesi",
    avatar: "/avatars/dr-yilmaz.jpg",
    rating: 5,
    text: "Ultrason sırasında konuşarak rapor yazabilmek harika. Hasta ile göz teması kurmaya devam ederken aynı anda raporumu tamamlıyorum. KVKK uyumluluğu da tam not veriyor.",
    specialty: "İç Hastalıkları",
  },
  {
    id: 4,
    name: "İsmail Korkmaz",
    title: "Bilgi İşlem Müdürü",
    company: "Hacettepe Üniversitesi Hastanesi",
    avatar: "/avatars/ismail-korkmaz.jpg",
    rating: 5,
    text: "PACS sistemimizle entegrasyonu çok kolaydı. Teknik ekipleri her adımda yanımızdaydı. Performans ve güvenlik standartları mükemmel. Kesinlikle tavsiye ederim.",
    specialty: "Teknoloji",
  },
  {
    id: 5,
    name: "Dr. Fatma Şahin",
    title: "Başhekim Yardımcısı",
    company: "Gazi Üniversitesi Hastanesi",
    avatar: "/avatars/dr-sahin.jpg",
    rating: 5,
    text: "Hastane genelinde verimlilik %40 arttı. Doktorlarımız artık daha az vakit harcıyor raporlama için. ROI'miz 6 ayda kendini amorti etti. Yatırımımızdan çok memnunuz.",
    specialty: "Yönetim",
  },
  {
    id: 6,
    name: "Dr. Emre Kaya",
    title: "Radyoloji Teknisyeni",
    company: "Liv Hastanesi",
    avatar: "/avatars/emre-kaya.jpg",
    rating: 5,
    text: "Öğrenmesi çok kolay, kullanımı çok pratik. BT çekimleri sırasında doktorlarımız rahatlıkla sistemi kullanıyor. Hata oranımız minimize oldu, kalite arttı.",
    specialty: "Teknisyen",
  },
];

const stats = [
  { number: "150+", label: "Hastane", icon: Building2 },
  { number: "2000+", label: "Doktor", icon: User },
  { number: "%98", label: "Memnuniyet", icon: Star },
  { number: "4.8", label: "Ortalama Puan", icon: Star },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" background="white" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Müşteri <span className="text-gradient">Referansları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin önde gelen sağlık kurumları MultiVision Report ile
            verimliliğini artırdı
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 hover:shadow-soft transition-shadow duration-300">
                <Icon className="text-primary-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 group hover:shadow-medical">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote
                  className="text-primary-200 group-hover:text-primary-300 transition-colors"
                  size={32}
                />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="text-primary-600" size={20} />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-primary-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>

                {/* Specialty Badge */}
                <div className="text-right">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">
                    {testimonial.specialty}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Card className="bg-gradient-to-r from-primary-50 to-white p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Siz de Başarı Hikayemize Katılın
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Türkiye'nin önde gelen sağlık kurumları gibi siz de MultiVision
            Report ile verimliliğinizi artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary px-8 py-3"
            >
              Ücretsiz Demo Alın
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary px-8 py-3"
            >
              Referans Listesi İsteyin
            </button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
