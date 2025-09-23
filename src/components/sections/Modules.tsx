import { motion } from "framer-motion";
import {
  Monitor,
  Stethoscope,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

const modules = [
  {
    icon: Monitor,
    title: "Radyolojik Görüntüleme",
    subtitle: "BT & MR Modülü",
    description:
      "Bilgisayarlı tomografi ve manyetik rezonans görüntüleme sırasında gerçek zamanlı konuşma tanıma ve yapılandırılmış rapor oluşturma.",
    features: [
      "BT/MR sırasında gerçek zamanlı konuşma tanıma",
      "Yapılandırılmış veri analizi",
      "Yapay zeka destekli rapor oluşturma",
      "Anatomik terminoloji desteği",
      "Önce/sonra karşılaştırma",
    ],
    color: "primary",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    icon: Stethoscope,
    title: "Ultrasonografi ve Doppler",
    subtitle: "İç Hastalıklar Modülü",
    description:
      "Ultrason ve Doppler incelemelerinde doktor ifadelerinin anında rapora dönüşmesi ve kritik bilgilerin sistematik kaydı.",
    features: [
      "Ultrason sırasında anında rapor oluşturma",
      "İç hastalıklarında kritik bilgi kaydı",
      "NLP tabanlı tıbbi terminoloji",
      "Doppler ölçüm entegrasyonu",
      "Hasta geçmişi analizi",
    ],
    color: "medical-green",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "Kardiyoloji (EKO)",
    subtitle: "Ekokardiyografi Modülü",
    description:
      "Standart kardiyak yapı değerlendirmesi, önceki tetkiklerle karşılaştırmalı analiz ve kardiyolojiye özel ölçüm standardizasyonu.",
    features: [
      "Standart kardiyak yapı değerlendirmesi",
      "Önceki tetkiklerle karşılaştırma",
      "Kardiyolojiye özel terminoloji",
      "EF ve diğer ölçüm entegrasyonu",
      "Risk skorlama sistemi",
    ],
    color: "medical-blue",
    gradient: "from-blue-500 to-cyan-600",
  },
];

export default function Modules() {
  return (
    <Section id="modules" background="white" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Özelleşmiş <span className="text-gradient">Modüller</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her uzmanlık alanı için özel olarak tasarlanmış modüllerle maksimum
            verimlilik ve doğruluk
          </p>
        </motion.div>
      </div>

      <div className="space-y-12">
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={`p-8 ${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center`}
                      >
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {module.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + featureIndex * 0.1,
                          }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle
                            size={20}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      variant="secondary"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Detaylı Bilgi Al
                      <ArrowRight size={18} />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div
                    className={`p-8 ${
                      isEven ? "" : "lg:col-start-1"
                    } flex items-center justify-center`}
                  >
                    <div
                      className={`w-full max-w-md h-64 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 text-center text-white">
                        <Icon size={80} className="mx-auto mb-4 opacity-90" />
                        <h4 className="text-xl font-semibold">
                          {module.title}
                        </h4>
                        <p className="text-sm opacity-80 mt-2">
                          {module.subtitle}
                        </p>
                      </div>
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Integration Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <Card className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Ortak Özellikler
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Tüm modüller ortak altyapı ve özellikleri paylaşarak tutarlı,
            güvenli ve entegre bir deneyim sunar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                PACS/HIS
              </div>
              <p className="text-sm text-gray-600">
                Mevcut sistemlerle sorunsuz entegrasyon
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">KVKK</div>
              <p className="text-sm text-gray-600">
                Hasta verilerinde güvenlik
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">3 Dil</div>
              <p className="text-sm text-gray-600">TR, EN, Latin terminoloji</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                Esnek
              </div>
              <p className="text-sm text-gray-600">Bulut veya lokal kurulum</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
