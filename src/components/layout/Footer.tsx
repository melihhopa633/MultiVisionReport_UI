import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-medical-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MV</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">
                  MultiVision Report
                </div>
                <div className="text-sm text-gray-400">
                  AI Destekli Tıbbi Görüntüleme
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Yapay zeka destekli tıbbi görüntüleme raporlaması ile sağlık
              sektöründe verimliliği artırıyor, insan hatalarını azaltıyoruz.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">
                YAKAZA Bilişim Çözümleri ve Danışmanlık Ltd. Şti.
              </p>
              <p>© 2024 Tüm hakları saklıdır.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-primary-400" />
                <div>
                  <p>Üniversiteler Mah. 1606. Cd.</p>
                  <p>Kapı No: 4/A, Cyberpark</p>
                  <p>Cyberplaza A Blok, Z05</p>
                  <p>Bilkent 06800 Çankaya/ANKARA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span>0-312-295-6485</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <a
                  href="mailto:multivision@yakaza.com.tr"
                  className="hover:text-primary-400 transition-colors"
                >
                  multivision@yakaza.com.tr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-primary-400" />
                <a
                  href="https://www.yakaza.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  www.yakaza.com.tr
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Erişim</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#features"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Özellikler
              </a>
              <a
                href="#modules"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Modüller
              </a>
              <a
                href="#benefits"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Faydalar
              </a>
              <a
                href="#screenshots"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Görseller
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Referanslar
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            KVKK ve GDPR uyumlu veri işleme • Hasta verilerinde güvenlik
            garantisi
          </p>
        </div>
      </div>
    </footer>
  );
}
