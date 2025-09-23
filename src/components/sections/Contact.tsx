import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
} from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Telefon numarası en az 10 karakter olmalıdır"),
  company: z.string().min(2, "Kurum adı en az 2 karakter olmalıdır"),
  department: z.enum([
    "radyoloji",
    "kardiyoloji",
    "ic-hastaliklari",
    "yonetim",
    "bilgi-islem",
    "diger",
  ]),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
  demo: z.boolean().default(false),
  newsletter: z.boolean().default(false),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id="contact" background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Hemen <span className="text-gradient">Başlayın</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MultiVision Report ile tıbbi raporlamanızı dönüştürün.
            Uzmanlarımızdan ücretsiz demo ve detaylı bilgi alın.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Demo Talep Formu
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-green-800 font-medium">
                    Talebiniz başarıyla gönderildi!
                  </p>
                  <p className="text-green-600 text-sm">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ad Soyad"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="0555 123 45 67"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kurum/Hastane *
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Kurum Adı"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departman *
                </label>
                <select
                  {...register("department")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Departman Seçiniz</option>
                  <option value="radyoloji">Radyoloji</option>
                  <option value="kardiyoloji">Kardiyoloji</option>
                  <option value="ic-hastaliklari">İç Hastalıkları</option>
                  <option value="yonetim">Yönetim</option>
                  <option value="bilgi-islem">Bilgi İşlem</option>
                  <option value="diger">Diğer</option>
                </select>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.department.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj *
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Lütfen ihtiyaçlarınızı ve demo için özel gereksinimlerinizi belirtiniz..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    {...register("demo")}
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">
                    Canlı demo seansı talep ediyorum
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    {...register("newsletter")}
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">
                    Ürün güncellemeleri ve sektör haberlerini e-posta ile almak
                    istiyorum
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                loading={isSubmitting}
              >
                <Send size={20} />
                Gönder
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Company Info */}
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              İletişim Bilgileri
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Üniversiteler Mah. 1606. Cd.
                    <br />
                    Kapı No: 4/A, Cyberpark
                    <br />
                    Cyberplaza A Blok, Zemin Kat No: Z05
                    <br />
                    Bilkent 06800 Çankaya/ANKARA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">0-312-295-6485</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <p className="text-gray-600">multivision@yakaza.com.tr</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-white">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
              Neden MultiVision?
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-primary-600" size={20} />
                <span className="text-gray-700">
                  24 saat içinde demo randevusu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-green-600" size={20} />
                <span className="text-gray-700">Uzman teknik ekip desteği</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-blue-600" size={20} />
                <span className="text-gray-700">
                  KVKK uyumlu güvenli sistem
                </span>
              </div>
            </div>
          </Card>

          {/* Company */}
          <Card className="p-8 text-center bg-gray-900 text-white">
            <h3 className="text-xl font-display font-bold mb-4">
              YAKAZA Bilişim Çözümleri
            </h3>
            <p className="text-gray-300 text-sm mb-4">Danışmanlık Ltd. Şti.</p>
            <p className="text-gray-400 text-xs">
              Sağlık teknolojilerinde uzman ekibimizle yenilikçi çözümler
              sunuyoruz.
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
