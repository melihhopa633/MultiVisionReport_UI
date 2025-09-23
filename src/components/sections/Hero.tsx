import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Brain } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDemo = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-medical-blue/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-medical-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/20 to-medical-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <Badge variant="medical" size="lg">
              <Zap size={16} className="mr-2" />
              Yapay Zeka Destekli Tıbbi Görüntüleme
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">Tıbbi Raporlamada</span>
            <br />
            <span className="text-gradient">Devrim Yaratın</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            <strong>MultiVision Report</strong> ile konuşmanızı gerçek zamanlı
            olarak yapılandırılmış tıbbi raporlara dönüştürün. Radyoloji,
            kardiyoloji ve iç hastalıklarda{" "}
            <span className="text-primary-600 font-semibold">
              %90+ zaman tasarrufu
            </span>{" "}
            sağlayın.
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-gray-700"
          >
            <div className="flex items-center space-x-2">
              <Brain className="text-primary-600" size={20} />
              <span className="font-medium">%95+ Doğruluk</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-success-600" size={20} />
              <span className="font-medium">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="text-medical-blue" size={20} />
              <span className="font-medium">Gerçek Zamanlı</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={scrollToContact}>
              Ücretsiz Demo Talep Et
              <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToDemo}>
              <Play size={20} />
              Nasıl Çalışır?
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-medical"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                %90+
              </div>
              <div className="text-gray-600 font-medium">Zaman Tasarrufu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-green mb-2">
                %95+
              </div>
              <div className="text-gray-600 font-medium">Doğruluk Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-medical-blue mb-2">
                3
              </div>
              <div className="text-gray-600 font-medium">Ana Modül</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Destek</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
