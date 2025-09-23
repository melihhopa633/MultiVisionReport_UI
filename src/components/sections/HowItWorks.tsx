import { motion } from "framer-motion";
import { Link, Brain, FileText, ArrowRight, Play } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const steps = [
  {
    number: "01",
    title: "Bağlan",
    subtitle: "Sistem Entegrasyonu",
    description:
      "MultiVision Report'u mevcut PACS/HIS sisteminize veya cihazlarınıza kolayca entegre edin. Tek tıkla bağlantı kurarak çalışmaya başlayın.",
    icon: Link,
    details: [
      "PACS/HIS sistemleri ile API entegrasyonu",
      "Tüm görüntüleme cihazları ile uyumluluk",
      "Plug-and-play kurulum",
      "Güvenli veri transferi protokolleri",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "02",
    title: "Analiz",
    subtitle: "AI Destekli İşleme",
    description:
      "Konuşmanızı gerçek zamanlı olarak dinleyen yapay zeka, tıbbi terminolojiyi tanır ve %95+ doğrulukla analiz eder.",
    icon: Brain,
    details: [
      "Gerçek zamanlı ses tanıma teknolojisi",
      "Türkçe tıbbi terminoloji desteği",
      "NLP ile akıllı içerik analizi",
      "Otomatik hata düzeltme algoritmaları",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    number: "03",
    title: "Raporla",
    subtitle: "Otomatik Rapor Oluşturma",
    description:
      "Analiz edilen veriler yapılandırılmış, standart format raporlara dönüştürülür. Anında kullanıma hazır, profesyonel raporlar.",
    icon: FileText,
    details: [
      "Standart format rapor şablonları",
      "Özelleştirilebilir rapor yapıları",
      "Otomatik kalite kontrolü",
      "Çoklu format dışa aktarım (PDF, Word, HL7)",
    ],
    color: "from-green-500 to-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="gradient" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" size="lg" className="mb-6">
            <Play size={16} className="mr-2" />
            Nasıl Çalışır?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Sadece <span className="text-gradient">3 Adım</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MultiVision Report ile tıbbi raporlamada devrim yaşayın. Basit,
            hızlı ve güvenilir süreç.
          </p>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="space-y-12 lg:space-y-20">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-px h-20 bg-gradient-to-b from-primary-300 to-transparent transform -translate-x-1/2 z-0"></div>
              )}

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl relative`}
                    >
                      {step.number}
                      <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + detailIndex * 0.1,
                        }}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
                        ></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`${
                    isEven ? "" : "lg:col-start-1"
                  } flex justify-center`}
                >
                  <Card className="w-full max-w-sm bg-white shadow-soft">
                    <div
                      className={`h-48 rounded-t-lg bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <Icon size={64} className="text-white/90 z-10" />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h4>
                        <span className="text-sm text-gray-500">
                          Adım {step.number}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.subtitle}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Demo CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-20"
      >
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-12 border-2 border-white/50 dark:border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Canlı Demo ile Deneyimleyin
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            MultiVision Report'un tüm özelliklerini canlı demo ile test edin.
            Uzmanlarımız size özel bir sunum hazırlayarak, sistemi detaylıca
            gösterecek.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-lg px-8 py-4"
          >
            Ücretsiz Demo Talep Et
            <ArrowRight size={20} />
          </button>
        </Card>
      </motion.div>
    </Section>
  );
}
