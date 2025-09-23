import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  FileText,
  Globe,
  Shield,
  Zap,
  MessageSquare,
  Database,
  Clock,
} from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";

const features = [
  {
    icon: Mic,
    title: "Gerçek Zamanlı Konuşma Tanıma",
    description:
      "%95+ doğruluk oranıyla doktor ifadelerini anında metne dönüştürür. Türkçe tıbbi terminoloji desteği ile mükemmel performans.",
    color: "text-primary-600",
  },
  {
    icon: Brain,
    title: "Yapay Zeka Destekli Analiz",
    description:
      "Gelişmiş NLP algoritmaları ile konuşmaları yapılandırılmış, standart format raporlara otomatik olarak dönüştürür.",
    color: "text-medical-blue",
  },
  {
    icon: FileText,
    title: "Yapılandırılmış Raporlama",
    description:
      "Hastalık seyrinin sistematik kaydını sağlar. Önceki tetkiklerle karşılaştırmalı analiz ve takip imkanı.",
    color: "text-medical-green",
  },
  {
    icon: Globe,
    title: "Çoklu Dil Desteği",
    description:
      "Türkçe, İngilizce ve Latince tıbbi terminoloji desteği. Uluslararası standartlara uygun raporlama.",
    color: "text-purple-600",
  },
  {
    icon: Shield,
    title: "KVKK ve GDPR Uyumluluğu",
    description:
      "Hasta verilerinde en üst düzey güvenlik ve gizlilik garantisi. Yasal gerekliliklere tam uyum.",
    color: "text-green-600",
  },
  {
    icon: Zap,
    title: "Bulut ve Lokal Kurulum",
    description:
      "Kurumsal ihtiyaçlara göre esnek deployment seçenekleri. Hem bulut hem de yerel sunucu desteği.",
    color: "text-yellow-600",
  },
  {
    icon: MessageSquare,
    title: "Entegrasyon Desteği",
    description:
      "Mevcut PACS ve HIS sistemleriyle sorunsuz entegrasyon. API desteği ile kolay bağlantı.",
    color: "text-indigo-600",
  },
  {
    icon: Database,
    title: "Veri Kalitesi Artışı",
    description:
      "Standardize edilmiş veri formatı ile veri kalitesinde önemli artış. Araştırmalarda kullanıma hazır veriler.",
    color: "text-cyan-600",
  },
  {
    icon: Clock,
    title: "%90+ Zaman Tasarrufu",
    description:
      "Rapor oluşturma süresinde dramatik azalma. Doktorların hasta bakımına daha fazla zaman ayırması.",
    color: "text-red-600",
  },
];

export default function Features() {
  return (
    <Section id="features" background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Güçlü <span className="text-gradient">Özellikler</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MultiVision Report, tıbbi görüntüleme raporlamasını
            devrimselleştiren çok sayıda gelişmiş özellik sunar
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon size={32} className={feature.color} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary-600 to-medical-blue rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Özellikleri Yakından İnceleyin
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            MultiVision Report'un tüm özelliklerini canlı demo ile deneyimleyin.
            Uzmanlarımızdan detaylı bilgi alın.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Detaylı Demo İsteyin
          </button>
        </div>
      </motion.div>
    </Section>
  );
}
