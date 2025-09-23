import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Users,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";

const benefits = [
  {
    icon: Clock,
    title: "%90+ Zaman Tasarrufu",
    description: "Rapor oluşturma süresini dakikalardan saniyelere indirin",
    metric: "90%",
    detail: "Daha fazla hasta bakımı",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Target,
    title: "%95+ Doğruluk Oranı",
    description: "İnsan hatalarını minimize ederek güvenilir raporlar",
    metric: "95%",
    detail: "Daha az hata",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: DollarSign,
    title: "Maliyet Tasarrufu",
    description: "Tıbbi sekreter maliyetlerinde önemli azalma",
    metric: "40%",
    detail: "Operasyonel tasarruf",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: BarChart3,
    title: "Veri Kalitesi Artışı",
    description: "Standardize format ile araştırmalarda kullanıma hazır",
    metric: "85%",
    detail: "Kalite iyileştirme",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: Users,
    title: "Hasta Memnuniyeti",
    description: "Daha hızlı rapor teslimatı ile hasta deneyimi artışı",
    metric: "92%",
    detail: "Memnuniyet oranı",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Shield,
    title: "Güvenlik Standardı",
    description: "KVKK ve GDPR uyumlu veri işleme güvencesi",
    metric: "100%",
    detail: "Yasal uyumluluk",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const detailedBenefits = [
  {
    title: "İnsan Hatalarının Azaltılması",
    description:
      "Manuel veri girişinden kaynaklanan hataları %95 oranında azaltır",
    icon: Shield,
  },
  {
    title: "Kritik Bilgi Kaybının Önlenmesi",
    description: "Önemli bulgular ve detaylar sistemde kaybolmaz",
    icon: Target,
  },
  {
    title: "Standardize Veri Formatı",
    description: "Araştırma ve analiz için uygun, tutarlı veri yapısı",
    icon: BarChart3,
  },
  {
    title: "Gelişmiş Hasta Yönetimi",
    description: "Tüm raporlara tek noktadan erişim ve geçmiş takibi",
    icon: Users,
  },
];

export default function Benefits() {
  return (
    <Section id="benefits" background="white" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Ölçülebilir <span className="text-gradient">Faydalar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MultiVision Report ile elde edeceğiniz somut faydalar ve performans
            iyileştirmeleri
          </p>
        </motion.div>
      </div>

      {/* Main Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full group hover:shadow-medical">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className={benefit.color} />
                </div>

                <div
                  className={`text-4xl md:text-5xl font-bold ${benefit.color} mb-2`}
                >
                  {benefit.metric}
                </div>

                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-4">{benefit.description}</p>

                <div
                  className={`inline-block px-3 py-1 rounded-full ${benefit.bgColor} ${benefit.color} text-sm font-medium`}
                >
                  {benefit.detail}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-gray-900 mb-12">
          Ek Faydalar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex items-start space-x-4 hover:shadow-soft transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ROI Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-primary-600 to-medical-blue text-white p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp size={48} className="text-white/90" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Yatırım Getirisi Hesaplayın
            </h3>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              MultiVision Report ile elde edeceğiniz tasarruf ve verimlilik
              artışını hesaplayarak ROI'nizi öğrenin
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6 Ay</div>
                <div className="text-sm opacity-80">Ortalama ROI Süresi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3x</div>
                <div className="text-sm opacity-80">Verimlilik Artışı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Kesintisiz Hizmet</div>
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Zap size={20} />
              ROI Hesaplama Talep Et
            </button>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full"></div>
        </Card>
      </motion.div>
    </Section>
  );
}
