// SANDVAULT Ultra-Exclusive Security Packages
// Designed for HNWI/VVIP segment in UAE

export const pricingPlans = [
  {
    id: "obsidian-chamber",
    price: "5,000",
    currency: "AED",
    plan: "Obsidian Chamber",
    planAr: "غرفة الأوبسيديان",
    tier: "Foundation",
    description: "Discreet storage. Essential protection.",
    descriptionAr: "تخزين سري. حماية أساسية.",
    features: [
      "Climate-Controlled Vault",
      "24/7 Biometric Access",
      "HD Surveillance System",
      "Up to 2 Vehicles",
      "Monthly Inspection Reports",
      "Fire & Flood Protection",
      "Private Access Code",
      "Basic Insurance Coverage (500K AED)"
    ],
    featuresAr: [
      "خزنة بتحكم مناخي",
      "وصول بيومتري 24/7",
      "نظام مراقبة عالي الدقة",
      "حتى مركبتين",
      "تقارير فحص شهرية",
      "حماية من الحريق والفيضانات",
      "رمز دخول خاص",
      "تأمين أساسي (500 ألف درهم)"
    ],
    stripePriceId: "price_obsidian_chamber_annual", // To be configured in Stripe
    popular: false,
    annual: true
  },
  {
    id: "titanium-reserve",
    price: "15,000",
    currency: "AED",
    plan: "Titanium Reserve",
    planAr: "احتياطي التيتانيوم",
    tier: "Enhanced",
    description: "Premium security. Total discretion.",
    descriptionAr: "أمان متميز. سرية تامة.",
    features: [
      "Temperature & Humidity Control",
      "Iris Recognition Access",
      "4K AI-Powered Surveillance",
      "Up to 5 Vehicles",
      "Bi-Weekly Detailing Service",
      "Advanced Fire Suppression",
      "Dedicated Concierge Line",
      "Premium Insurance (1.5M AED)",
      "Battery Maintenance System",
      "Private Viewing Area"
    ],
    featuresAr: [
      "تحكم بالحرارة والرطوبة",
      "وصول بتقنية التعرف على القزحية",
      "مراقبة بالذكاء الاصطناعي 4K",
      "حتى 5 مركبات",
      "خدمة تنظيف أسبوعية",
      "نظام إطفاء حريق متقدم",
      "خط كونسيرج مخصص",
      "تأمين ممتاز (1.5 مليون درهم)",
      "نظام صيانة البطارية",
      "منطقة عرض خاصة"
    ],
    stripePriceId: "price_titanium_reserve_annual",
    popular: true,
    annual: true
  },
  {
    id: "sovereign-vault",
    price: "35,000",
    currency: "AED",
    plan: "Sovereign Vault",
    planAr: "خزنة السيادة",
    tier: "Elite",
    description: "Absolute protection. White-glove service.",
    descriptionAr: "حماية مطلقة. خدمة راقية.",
    features: [
      "Museum-Grade Climate System",
      "Multi-Factor Biometric Entry",
      "Military-Grade Surveillance",
      "Up to 10 Vehicles",
      "Weekly Professional Detailing",
      "Nitrogen Fire Suppression",
      "24/7 Personal Concierge",
      "Comprehensive Insurance (5M AED)",
      "Mechanical Maintenance Included",
      "Private Lounge Access",
      "Encrypted Digital Inventory",
      "Complimentary Vehicle Transport"
    ],
    featuresAr: [
      "نظام مناخي بمستوى المتاحف",
      "دخول بيومتري متعدد العوامل",
      "مراقبة بمستوى عسكري",
      "حتى 10 مركبات",
      "تنظيف احترافي أسبوعي",
      "إطفاء حريق بالنيتروجين",
      "كونسيرج شخصي 24/7",
      "تأمين شامل (5 مليون درهم)",
      "صيانة ميكانيكية مشمولة",
      "وصول للصالة الخاصة",
      "جرد رقمي مشفر",
      "نقل مركبات مجاني"
    ],
    stripePriceId: "price_sovereign_vault_annual",
    popular: false,
    annual: true
  },
  {
    id: "diamond-reserve",
    price: "75,000",
    currency: "AED",
    plan: "Diamond Reserve",
    planAr: "احتياطي الماس",
    tier: "Prestige",
    description: "Ultimate sanctuary. Uncompromising excellence.",
    descriptionAr: "ملاذ نهائي. تميز لا يضاهى.",
    features: [
      "Hermetically Sealed Vault",
      "Quantum Encryption Access",
      "Thermal & Motion AI Detection",
      "Unlimited Vehicle Capacity",
      "On-Demand Detailing & Maintenance",
      "Halon Gas Fire System",
      "Dedicated Vault Manager",
      "Ultra-Premium Insurance (15M AED)",
      "Full Mechanical Services",
      "Private Executive Suite",
      "Blockchain Provenance Records",
      "Global Vehicle Logistics",
      "Annual Appraisal Service",
      "VIP Event Invitations"
    ],
    featuresAr: [
      "خزنة مغلقة بإحكام",
      "وصول بتشفير كمي",
      "كشف بالذكاء الاصطناعي الحراري",
      "سعة غير محدودة للمركبات",
      "تنظيف وصيانة عند الطلب",
      "نظام إطفاء بغاز الهالون",
      "مدير خزنة مخصص",
      "تأمين فائق (15 مليون درهم)",
      "خدمات ميكانيكية كاملة",
      "جناح تنفيذي خاص",
      "سجلات المنشأ بتقنية البلوكشين",
      "لوجستيات مركبات عالمية",
      "خدمة تقييم سنوية",
      "دعوات لفعاليات VIP"
    ],
    stripePriceId: "price_diamond_reserve_annual",
    popular: false,
    annual: true
  },
  {
    id: "black-sanctum",
    price: "150,000",
    currency: "AED",
    plan: "Black Sanctum",
    planAr: "المحراب الأسود",
    tier: "Sovereign",
    description: "Absolute. Invisible. Impenetrable.",
    descriptionAr: "مطلق. غير مرئي. منيع.",
    features: [
      "Underground Bunker Vault",
      "Retinal + DNA Verification",
      "Classified Military Surveillance",
      "Unlimited Private Collection",
      "24/7 Master Technician On-Site",
      "Inert Gas Suppression System",
      "Private Security Detail",
      "Unlimited Insurance (Lloyds)",
      "Full Restoration Services",
      "Dedicated Private Wing",
      "Zero-Knowledge Architecture",
      "Worldwide White-Glove Transport",
      "Quarterly Expert Appraisals",
      "Invitation-Only Auction Access",
      "Anonymous Ownership Options",
      "Estate Planning Integration"
    ],
    featuresAr: [
      "خزنة تحت الأرض محصنة",
      "تحقق بالشبكية + الحمض النووي",
      "مراقبة عسكرية سرية",
      "مجموعة خاصة غير محدودة",
      "فني خبير على مدار الساعة",
      "نظام إطفاء بالغاز الخامل",
      "فريق أمني خاص",
      "تأمين غير محدود (لويدز)",
      "خدمات ترميم كاملة",
      "جناح خاص مستقل",
      "بنية معمارية بدون معرفة",
      "نقل فاخر عالمي",
      "تقييمات ربع سنوية",
      "وصول حصري للمزادات",
      "خيارات ملكية مجهولة",
      "تكامل تخطيط العقارات"
    ],
    stripePriceId: "price_black_sanctum_annual",
    popular: false,
    annual: true,
    exclusive: true
  }
];

// Package tier metadata
export const packageTiers = {
  foundation: {
    name: "Foundation",
    nameAr: "الأساس",
    color: "#3D3D3D" // Smoke Grey
  },
  enhanced: {
    name: "Enhanced",
    nameAr: "المحسن",
    color: "#C9A961" // Matte Sand Gold
  },
  elite: {
    name: "Elite",
    nameAr: "النخبة",
    color: "#B8941E" // Vault Gold
  },
  prestige: {
    name: "Prestige",
    nameAr: "الهيبة",
    color: "#D4AF37" // Bright Gold
  },
  sovereign: {
    name: "Sovereign",
    nameAr: "السيادي",
    color: "#FFD700" // Pure Gold
  }
};
