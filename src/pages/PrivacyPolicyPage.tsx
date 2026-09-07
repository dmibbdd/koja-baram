import { useApp } from '../context/AppContext';
import TopoHero from '../components/TopoHero';

const CONTENT = {
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: September 2026',
    sections: [
      {
        heading: '1. Introduction',
        body: `KAJA BERAM ("we", "us", "our") operates this website to help travelers discover destinations, cities and attractions around the world. This Privacy Policy explains what information we collect, how we use it, and the choices you have.`,
      },
      {
        heading: '2. Information We Collect',
        body: `We may collect information you provide directly (such as an account email, saved trips, or search preferences) and information collected automatically when you use the site, such as pages visited, device/browser type, approximate location, and cookies.`,
      },
      {
        heading: '3. Cookies and Advertising',
        body: `This site uses cookies and similar technologies, including third-party advertising cookies served by Google. We use Google AdSense to display ads. Google and its partners may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings at adssettings.google.com.`,
      },
      {
        heading: '4. How We Use Information',
        body: `We use collected information to operate and improve the site, personalize content and recommendations, respond to inquiries, and display relevant advertising.`,
      },
      {
        heading: '5. Third-Party Services',
        body: `We may use third-party services (such as Google AdSense and analytics providers) that collect, monitor and analyze data to improve our service. These third parties have their own privacy policies governing their use of your information.`,
      },
      {
        heading: '6. Your Choices',
        body: `You can control cookies through your browser settings and manage ad personalization through Google's Ads Settings. Disabling cookies may affect some site functionality.`,
      },
      {
        heading: '7. Children\'s Privacy',
        body: `This site is not directed at children under 13, and we do not knowingly collect personal information from children.`,
      },
      {
        heading: '8. Changes to This Policy',
        body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.`,
      },
      {
        heading: '9. Contact Us',
        body: `If you have questions about this Privacy Policy, please reach out via the contact information provided on this site.`,
      },
    ],
  },
  fa: {
    eyebrow: 'حقوقی',
    title: 'حریم خصوصی',
    updated: 'آخرین به‌روزرسانی: شهریور ۱۴۰۵',
    sections: [
      {
        heading: '۱. مقدمه',
        body: `«کجا برم» («ما») این وب‌سایت را برای کمک به مسافران در کشف مقصدها، شهرها و جاذبه‌های گردشگری در سراسر جهان اداره می‌کند. این سند توضیح می‌دهد چه اطلاعاتی جمع‌آوری می‌شود، چگونه استفاده می‌شود و چه اختیاراتی در اختیار شما قرار دارد.`,
      },
      {
        heading: '۲. اطلاعاتی که جمع‌آوری می‌کنیم',
        body: `ممکن است اطلاعاتی که مستقیماً ارائه می‌دهید (مانند ایمیل حساب کاربری، سفرهای ذخیره‌شده یا ترجیحات جست‌وجو) و اطلاعاتی که به‌صورت خودکار هنگام استفاده از سایت جمع‌آوری می‌شود (مانند صفحات بازدیدشده، نوع دستگاه/مرورگر، موقعیت مکانی تقریبی و کوکی‌ها) را جمع‌آوری کنیم.`,
      },
      {
        heading: '۳. کوکی‌ها و تبلیغات',
        body: `این سایت از کوکی‌ها و فناوری‌های مشابه، از جمله کوکی‌های تبلیغاتی شخص‌ثالث ارائه‌شده توسط گوگل، استفاده می‌کند. ما از Google AdSense برای نمایش تبلیغات استفاده می‌کنیم. گوگل و شرکای آن ممکن است از کوکی‌ها برای نمایش تبلیغات بر اساس بازدیدهای قبلی شما از این یا سایر وب‌سایت‌ها استفاده کنند. می‌توانید از طریق تنظیمات تبلیغات گوگل به آدرس adssettings.google.com تبلیغات شخصی‌سازی‌شده را غیرفعال کنید.`,
      },
      {
        heading: '۴. نحوه‌ی استفاده از اطلاعات',
        body: `از اطلاعات جمع‌آوری‌شده برای اداره و بهبود سایت، شخصی‌سازی محتوا و پیشنهادها، پاسخ به درخواست‌ها و نمایش تبلیغات مرتبط استفاده می‌کنیم.`,
      },
      {
        heading: '۵. خدمات شخص‌ثالث',
        body: `ممکن است از خدمات شخص‌ثالث (مانند Google AdSense و ابزارهای تحلیل ترافیک) استفاده کنیم که داده‌ها را برای بهبود خدمات جمع‌آوری، پایش و تحلیل می‌کنند. این شرکای شخص‌ثالث سیاست‌های حریم خصوصی مستقل خود را برای استفاده از اطلاعات شما دارند.`,
      },
      {
        heading: '۶. اختیارات شما',
        body: `می‌توانید کوکی‌ها را از طریق تنظیمات مرورگر خود کنترل کنید و شخصی‌سازی تبلیغات را از طریق تنظیمات تبلیغات گوگل مدیریت کنید. غیرفعال کردن کوکی‌ها ممکن است بر برخی از عملکردهای سایت تأثیر بگذارد.`,
      },
      {
        heading: '۷. حریم خصوصی کودکان',
        body: `این سایت برای کودکان زیر ۱۳ سال طراحی نشده و ما آگاهانه اطلاعات شخصی از کودکان جمع‌آوری نمی‌کنیم.`,
      },
      {
        heading: '۸. تغییرات در این سند',
        body: `ممکن است این سیاست حریم خصوصی را از زمانی به زمان دیگر به‌روزرسانی کنیم. تغییرات با تاریخ به‌روزرسانی جدید در همین صفحه منتشر خواهد شد.`,
      },
      {
        heading: '۹. تماس با ما',
        body: `اگر درباره‌ی این سیاست حریم خصوصی پرسشی دارید، از طریق اطلاعات تماس ارائه‌شده در سایت با ما در ارتباط باشید.`,
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  const { lang } = useApp();
  const c = CONTENT[lang];

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">{c.eyebrow}</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{c.title}</h1>
          <p className="font-mono text-[#9BAEC4] text-xs">{c.updated}</p>
        </div>
      </TopoHero>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {c.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-3">{s.heading}</h2>
              <p className="text-[#3A3A38] text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
