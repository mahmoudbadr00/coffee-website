import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// تعريف الترجمات
const resources = {
  en: {
    translation: {
      home:{
        "home": "Home",
      "menu": "Menu",
      "about": "About",
      "darkMode": "Dark Mode",
      "lightMode": "Light Mode",
      "moreAboutUs": "More About Us",
      "welcomeTo": "Welcome To",
      "footerText": "copyright @ made by Mahmoud Badr 2024 | +201159603177",
      "aboutUsHeading": "About Us",
      "fullMenu":"Our Full Menu"
      },
      "imgGallery":"Image Gallery",
      "menu":"Menu",
      about:{
        "firstAbout":'"Break coffee: More than just a cup of coffee"',
        "secondAbout": "In the heart of Mansoura, where the breaths of dreamy youth and the dreams of adults meet, 'Break coffee' café sits as an oasis of comfort, relaxation and creativity.",
        "thirdAbout": "It is more than just a place to have coffee, it is a destination that combines a warm atmosphere with modern design, to provide a unique experience for every visitor.",
        "fourthAbout": "When you enter 'Break coffee', you will be immersed in a world of bright colors and innovative decorations that reflect the spirit of youth and vitality. The walls decorated with contemporary paintings and shining stars create an atmosphere that inspires creativity, while the comfortable furniture and dim lighting invite you to relax and enjoy your time.",
        "fifthAbout": "What distinguishes Break coffee?",
        "sixthAbout": "Specialty coffee: The café is distinguished by offering a wide variety of specialty coffees, which are carefully prepared by expert baristas, to ensure that you get the best cup of coffee.",
        "seventhAbout": "Comfortable atmosphere: Whether you are looking for a quiet place to study or work, or want to spend a fun time with your friends, 'Break coffee' provides you with everything you need in a comfortable and relaxing atmosphere.",
        "eightAbout": "Diverse events: The café constantly seeks to offer diverse events that meet the interests of all visitors, such as poetry evenings, creative workshops, and live music performances.",
        "nineAbout": "Delicious food: In addition to delicious coffee, the café offers a diverse menu of light foods and main meals, which are prepared from fresh and high-quality ingredients.",
        "tenAbout": "Distinctive service: The 'Break coffee' team is distinguished by its permanent smile and good reception of customers, as they strive to provide the best possible service.",
        "elevenAbout": "Why should you visit Break coffee?",
        "twelveAbout": "If you are looking for a place to relax, get inspired, or just have a good time, 'Break coffee' is the perfect place for you. It is more than just a café, it is a unique experience that will leave beautiful memories in your mind.",
        "location":"Our location"
      },
      contact:{
        "find":"Where To Find Us",
        "address":"University District, Al-Sabahy street, Mansoura, Dakahlia",
        "opening":"Opening Hours",
        "hours":"Sat - Fri: 12:00 PM - 2:00 AM",
        "cont":"Contact Us",
      }
      
    }
  },
  ar: {
    translation: {
      home:{
        "home": "الرئيسية",
        "menu": "القائمة",
        "about": "عنّا",
        "darkMode": "الوضع الداكن",
        "lightMode": "الوضع الفاتح",
        "moreAboutUs": "المزيد عنّا",
        "welcomeTo": "مرحبًا بكم في",
        "footerText": "حقوق النشر @ محمود بدر 2024 | +201159603177",
        "aboutUsHeading": "عنّا",
        "fullMenu":"المنيو كاملا"
      },
      "imgGallery":"معرض الصور",
      "menu":"قائمة الطعام",
      about:{
        "firstAbout":'"Break coffee: أكثر من مجرد فنجان قهوة"',
        "secondAbout": "في قلب مدينة المنصورة، حيث تتلاقى أنفاس الشباب الحالم وأحلام الكبار، يتربع الكافيه كواحة للراحة والاسترخاء والإبداع.",
        "thirdAbout": "إنه أكثر من مجرد مكان لتناول القهوة، فهو وجهة تجمع بين الأجواء الدافئة والتصميم العصري، ليقدم تجربة فريدة من نوعها لكل زائر.",
        "fourthAbout": "عند دخولك إليه، ستنغمس في عالم من الألوان الزاهية والديكورات المبتكرة التي تعكس روح الشباب والحيوية. الجدران المزينة باللوحات الفنية المعاصرة والنجوم اللامعة تخلق جوًا ملهمًا للإبداع، بينما الأثاث المريح والمضاءة الخافتة تدعوك للاسترخاء والاستمتاع بوقتك.",
        "fifthAbout": "ماذا يميز Break coffee؟",
        "sixthAbout": "قهوة مختصة: يتميز الكافيه بتقديم تشكيلة واسعة من أنواع القهوة المختصة، والتي يتم تحضيرها بعناية فائقة من قبل خبراء الباريستا، لضمان حصولك على أفضل كوب قهوة.",
        "seventhAbout": "أجواء مريحة: سواء كنت تبحث عن مكان هادئ للدراسة أو العمل، أو ترغب في قضاء وقت ممتع مع أصدقائك، فإنه يوفر لك كل ما تحتاجه من أجواء مريحة ومريحة.",
        "eightAbout": "فعاليات متنوعة: يسعى الكافيه باستمرار إلى تقديم فعاليات متنوعة تلبي اهتمامات جميع الزوار، مثل أمسيات الشعر، وورش العمل الإبداعية، وعروض الموسيقى الحية.",
        "nineAbout": "طعام شهي: بالإضافة إلى القهوة اللذيذة، يقدم الكافيه قائمة متنوعة من الأطعمة الخفيفة والوجبات الرئيسية، والتي يتم إعدادها من مكونات طازجة وعالية الجودة.",
        "tenAbout": "خدمة مميزة: يتميز فريق العمل بابتسامته الدائمة وحُسن استقباله للزبائن، حيث يسعون جاهدين لتقديم أفضل خدمة ممكنة.",
        "elevenAbout": "لماذا عليك زيارة Break coffee؟",
        "twelveAbout": "إذا كنت تبحث عن مكان للاسترخاء، أو للإلهام، أو لمجرد قضاء وقت ممتع، فإنه هو المكان المثالي لك. إنه أكثر من مجرد كافيه، فهو تجربة فريدة من نوعها ستترك في ذهنك ذكريات جميلة.",
        "location":"موقعنا"
      },
      contact:{
        "find":"اين تجدنا",
        "address":"حى الجامعة , شارع الصباحى , المنصورة , الدقهلية",
        "opening":"ساعات العمل",
        "hours":"السبت - الجمعة: 12:00 م - 2:00 ص",
        "cont":"تواصل معنا",
      }
    }
  }
};

// تهيئة i18n
i18n
  .use(initReactI18next) // تمرير المكتبة لـ react-i18next
  .init({
    resources,
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en', // اللغة الافتراضية إذا لم تكن اللغة المحددة موجودة
    interpolation: {
      escapeValue: false // تفعيل الترجمات بدون ترميز HTML
    }
  });

export default i18n;
