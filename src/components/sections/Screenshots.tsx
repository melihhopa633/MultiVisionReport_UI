import { motion } from "framer-motion";
import { Monitor, Smartphone, Eye } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";

const screenshots = [
  {
    title: "Ana Dashboard",
    description: "Tüm modüllere erişim ve genel istatistikler",
    image: "/screenshots/dashboard.jpg",
    category: "Desktop",
  },
  {
    title: "Radyoloji Modülü",
    description: "BT/MR görüntüleme sırasında gerçek zamanlı rapor oluşturma",
    image: "/screenshots/radiology.jpg",
    category: "Desktop",
  },
  {
    title: "Konuşma Tanıma",
    description: "Canlı ses tanıma ve otomatik metin dönüşümü",
    image: "/screenshots/voice-recognition.jpg",
    category: "Desktop",
  },
  {
    title: "Rapor Oluşturma",
    description: "AI destekli yapılandırılmış rapor çıktıları",
    image: "/screenshots/report-generation.jpg",
    category: "Desktop",
  },
  {
    title: "Mobil Arayüz",
    description: "Tablet ve mobil cihazlar için optimize edilmiş deneyim",
    image: "/screenshots/mobile.jpg",
    category: "Mobile",
  },
  {
    title: "Entegrasyon Paneli",
    description: "PACS/HIS sistemleri ile kolay entegrasyon",
    image: "/screenshots/integration.jpg",
    category: "Desktop",
  },
];

const categories = [
  { name: "Tümü", icon: Monitor, count: screenshots.length },
  {
    name: "Desktop",
    icon: Monitor,
    count: screenshots.filter((s) => s.category === "Desktop").length,
  },
  {
    name: "Mobile",
    icon: Smartphone,
    count: screenshots.filter((s) => s.category === "Mobile").length,
  },
];

export default function Screenshots() {
  return (
    <Section id="screenshots" background="gradient" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Ekran <span className="text-gradient">Görüntüleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MultiVision Report'un kullanıcı dostu arayüzü ve güçlü özelliklerini
            keşfedin
          </p>
        </motion.div>
      </div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/90 transition-all duration-200"
            >
              <Icon size={20} className="text-primary-600" />
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group hover:shadow-medical">
              {/* Placeholder Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20"></div>
                <div className="relative z-10 text-center text-primary-700">
                  <Eye size={48} className="mx-auto mb-2 opacity-60" />
                  <p className="text-sm font-medium">Demo Görüntüsü</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-primary-600 text-xs px-2 py-1 rounded-full font-medium">
                    {screenshot.category}
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Büyüt
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Card className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-2 border-white/50">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Canlı Demo İle Tüm Özellikleri Keşfedin
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ekran görüntüleri sadece başlangıç! Gerçek deneyimi yaşamak için
            canlı demo talebinde bulunun.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-lg px-8 py-4"
          >
            <Eye size={20} />
            Canlı Demo Talep Et
          </button>
        </Card>
      </motion.div>
    </Section>
  );
}
