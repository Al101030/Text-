import { CharacterProfile, QuizQuestion } from '../types';

export const HERO_IMAGE = '/src/assets/images/link_click_studio_hero_1792880432552.jpg';

export const CHARACTERS: Record<string, CharacterProfile> = {
  A: {
    key: 'A',
    id: 'cheng_xiaoshi',
    nameAr: 'تشينغ شياوشي (Cheng Xiaoshi)',
    nameEn: 'Cheng Xiaoshi',
    nameZh: '程小时',
    titleAr: 'مسافر الزمن الميداني · The Diver',
    titleEn: 'Field Time Diver',
    roleAr: 'الغائص في الصور وصاحب الاستوديو الشاب',
    roleEn: 'Photo Diver & Studio Co-Owner',
    abilityAr: 'الغوص بالصور: الدخول إلى عالم الصورة والتحكم بجسد ملتقطها لمدة 12 ساعة مع الإحساس بكافة مشاعره وذكرياته.',
    abilityEn: 'Photo Possession: Enter the photo timeline, inhabit the photographer’s body for up to 12 hours, feeling all their emotions.',
    descAr: 'تتميز بطيبة القلب، العاطفة القوية، والحماس العالي. لديك رغبة دائمة في مساعدة من حولك وتؤثر فيك تفاصيل مشاعر الآخرين بعمق. لا يمكنك الوقوف مكتوف الأيدي أمام الظلم، وغالباً ما يدفعك قلبك النبيل للمخاطرة بكل شيء من أجل إنقاذ روح معذبة.',
    descEn: 'Driven by intense empathy, high energy, and raw courage. You act on instinct and care deeply for the emotions of those around you. You cannot stand by while others suffer, often risking the timeline to save a life.',
    quoteAr: '«سواء كان في الماضي أو المستقبل، لا أستطيع أن أدير ظهري لشخص يتألم أمامي!»',
    quoteEn: '“Regardless of past or future, I can never turn my back on someone crying in front of me!”',
    traitsAr: ['عاطفي وشغوف', 'شجاع ومبادر', 'عفوي وسريع البديهة', 'مخلص لأصدقائه'],
    traitsEn: ['Passionate & Empathetic', 'Courageous Diver', 'Intuitive & Quick-Witted', 'Fiercely Loyal'],
    strengthsAr: [
      'حس تعاطف فائق يجعلك تفهم قلوب الآخرين فوراً',
      'ردود أفعال جسدية وذهنية استثنائية في المواقف الخطرة',
      'قدرة على كسر الجليد وصناعة الأمل حتى في أشد الأوقات حلكة'
    ],
    strengthsEn: [
      'Unmatched empathy to instantly connect with people',
      'Lightning reflexes in unpredictable life-or-death situations',
      'Brings warmth and hope to the darkest moments'
    ],
    weaknessesAr: [
      'الاندفاع العاطفي الذي قد يجعلك تتجاهل القواعد الصارمة',
      'حمل آلام ومشاعر الآخرين في قلبك طويلاً'
    ],
    weaknessesEn: [
      'Impulsiveness that can clash with strictly calculated plans',
      'Carrying the emotional weight of others for too long'
    ],
    synergyAr: 'شريكك المثالي هو لو غوانغ (Lu Guang) ليمنحك التوازن والبوصلة التحليلية الهادئة.',
    synergyEn: 'Ideal Partner: Lu Guang provides the cool analytical compass to balance your fire.',
    image: '/src/assets/images/cheng_xiaoshi_portrait_1792880433242.jpg',
    themeColor: '#f59e0b',
    accentColor: '#d97706',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
  },
  B: {
    key: 'B',
    id: 'lu_guang',
    nameAr: 'لو غوانغ (Lu Guang)',
    nameEn: 'Lu Guang',
    nameZh: '陆光',
    titleAr: 'المراقب الاستراتيجي · The Observer',
    titleEn: 'Strategic Observer',
    roleAr: 'العقل المدبر والموجه الزمني للاستوديو',
    roleEn: 'Mastermind & Timeline Overseer',
    abilityAr: 'الاستبصار الزمني: استعراض كافة أحداث الـ 12 ساعة التي تلت التقاط الصورة وتحديد العقد الزمنية والمصائر.',
    abilityEn: 'Timeline Sight: Trace all events 12 hours after the snapshot and calculate nodal divergence points.',
    descAr: 'تتميز بالعقلانية الشديدة، التفكير التحليلي، والقدرة الفائقة على تنظيم التفاصيل وتوقع الأمور قبل وقوعها بتركيز وهدوء. أنت العقل المدبر الذي يزن كل حركة بميزان الذهب، وتحافظ على هدوئك حتى في أشد اللحظات اضطراباً لحماية من تحب.',
    descEn: 'Defined by icy composure, deep analytical intellect, and farsighted planning. You are the rock who anticipates every pivot before it happens, keeping quiet vigil over the people who matter most to you.',
    quoteAr: '«الماضي لا يُعدل، والمستقبل مجهول... قاعدة واحدة فقط: اتبع تعليماتي خطوة بخطوة.»',
    quoteEn: '“The past cannot be altered, and the future is unknown. Only one rule: follow my instructions to the letter.”',
    traitsAr: ['هادئ ومحسوب', 'استراتيجي بارع', 'كتوم ومخلص في الظل', 'حاسم وقت الأزمات'],
    traitsEn: ['Calm & Calculated', 'Strategic Mastermind', 'Quiet Protector', 'Decisive Under Pressure'],
    strengthsAr: [
      'رؤية شاملة تجعلك تسبق الجميع بعدة خطوات',
      'رباطة جأش نادرة لا تهتز أمام الضغوطات والمفاجآت',
      'ولاء صامت واستعداد لتحمل أثقل الأسرار لحماية الفريق'
    ],
    strengthsEn: [
      'Big-picture clarity always several moves ahead',
      'Unshakable poise in the eye of temporal storms',
      'Silent loyalty carrying heavy burdens to protect teammates'
    ],
    weaknessesAr: [
      'الكتمان المفرط وصعوبة الإفصاح عما يدور بداخلك',
      'الميل لتحمل كل العواقب بمفردك دون طلب المساعدة'
    ],
    weaknessesEn: [
      'Extreme secrecy and hesitation to express personal vulnerability',
      'Tendency to shoulder monumental burdens completely alone'
    ],
    synergyAr: 'شريكك المثالي هو تشينغ شياوشي (Cheng Xiaoshi) ليضفي الدفء والحركة على خططك المحكمة.',
    synergyEn: 'Ideal Partner: Cheng Xiaoshi sparks action, emotion, and human warmth into your calculations.',
    image: '/src/assets/images/lu_guang_portrait_1792880433917.jpg',
    themeColor: '#06b6d4',
    accentColor: '#0284c7',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
  },
  C: {
    key: 'C',
    id: 'qiao_ling',
    nameAr: 'قياو لينغ (Qiao Ling)',
    nameEn: 'Qiao Ling',
    nameZh: '乔苓',
    titleAr: 'عميدة الاستوديو والدرع الحامي · The Guardian',
    titleEn: 'Studio Manager & Guardian',
    roleAr: 'مديرة الاستوديو وحامية الصديقين والمالكة',
    roleEn: 'Studio Manager, Landlord & Martial Artist',
    abilityAr: 'الحنكة الإدارية والقتال الدفاعي: تأمين المهام والعملاء، إدارة الشؤون المالية، وحماية الاستوديو بالقبضة الحديدية والعقل الواعي.',
    abilityEn: 'Executive Strategy & Martial Defense: Client negotiations, studio logistics, financial shield, and physical protection.',
    descAr: 'تتميز بالقوة، الواقعية، والمسؤولية الكبيرة. أنت الصديقة الداعمة التي تحافظ على توازن الأمور وتتعامل بحزم مع المواقف الصعبة. تجمع بين الطيبة الصادقة والحزم القيادي، وبدونك لانهار كل شيء أمام فوضى الواقع.',
    descEn: 'Embodying strength, grounded reality, and fierce responsibility. You keep the studio standing, manage complex client disputes, and guard Cheng Xiaoshi and Lu Guang like family with charisma and resolve.',
    quoteAr: '«أنا المسؤولة هنا! إذا أردتم البقاء في هذا الاستوديو، فعليكم إنجاز المهام ودفع الإيجار في وقته!»',
    quoteEn: '“I run this studio! If you want to stay under this roof, finish your commissions and pay rent on time!”',
    traitsAr: ['قوية وشجاعة', 'واقعية ومسؤولة', 'سريعة البديهة والقرار', 'حامية ومخلصة كالأخت الكبرى'],
    traitsEn: ['Fierce & Charismatic', 'Pragmatic Leader', 'Quick Negotiator', 'Protective Anchor'],
    strengthsAr: [
      'قدرة قيادية وتفاوضية تحل أعقد المشكلات اليومية',
      'شجاعة جسدية ومعنوية لا تتردد في مواجهة المخاطر',
      'حس واقعي يمنع الآخرين من التيه في الأوهام'
    ],
    strengthsEn: [
      'Incredible negotiation and crisis management instincts',
      'Physical martial courage stepping in when friends are threatened',
      'Grounded practical wisdom anchoring everyone to reality'
    ],
    weaknessesAr: [
      'القلق الزائد على من تحبين وإخفاء توترك الداخلي',
      'التسرع أحياناً في الحزم قبل سماع التفاصيل الخفية'
    ],
    weaknessesEn: [
      'Constantly worrying over your loved ones while acting unbothered',
      'Occasional impatience with mysterious or withheld details'
    ],
    synergyAr: 'أنت التوازن الحيوي والملاذ الآمن لكل من تشينغ شياوشي ولو غوانغ معاً.',
    synergyEn: 'Ideal Anchor: You are the indispensable reality bridge unifying both Xiaoshi and Lu Guang.',
    image: '/src/assets/images/qiao_ling_portrait_1792880434656.jpg',
    themeColor: '#10b981',
    accentColor: '#059669',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
  }
};

// 4 User Core Questions (Original from prompt - Completely free of character hints)
export const CORE_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionAr: 'عندما تواجهين مشكلة برمجية معقدة أو خطأ (Bug) مستعصٍ، ما هو تصرفكِ الأول؟',
    questionEn: 'When you face a complex bug or an elusive technical problem, what is your first instinct?',
    categoryAr: 'حل المشكلات والأزمات',
    categoryEn: 'Crisis & Problem Solving',
    options: [
      {
        textAr: 'أندفع فوراً لتجربة حلول مختلفة وتعديل الكود بحماس.',
        textEn: 'Dive right in to test hypotheses immediately, tweaking code with high energy.',
        type: 'A'
      },
      {
        textAr: 'أتراجع خطوة للوراء، أحلل النظام بدقة، وأضع خطة محكمة.',
        textEn: 'Step back, analyze logs systematically, and devise a meticulous plan before acting.',
        type: 'B'
      },
      {
        textAr: 'أتعامل بحزم، وأتأكد من سير الجميع في المسار الصحيح.',
        textEn: 'Take charge firmly, coordinate resources, and make sure everyone stays focused.',
        type: 'C'
      }
    ]
  },
  {
    id: 2,
    questionAr: 'كيف تفضلين قضاء أوقات فراغكِ بعد أسبوع شاق من العمل أو الدراسة؟',
    questionEn: 'How do you prefer to spend your downtime after an exhausting week of work or study?',
    categoryAr: 'نمط الحياة والراحة',
    categoryEn: 'Lifestyle & Recovery',
    options: [
      {
        textAr: 'تجربة ألعاب جديدة، تصفح الأنمي/المانغا، أو طلب وجبتكِ المفضلة.',
        textEn: 'Playing games, browsing anime/manga, relaxing with favorite snacks and hobbies.',
        type: 'A'
      },
      {
        textAr: 'الاسترخاء بهدوء، والتخطيط للمهام القادمة بدقة.',
        textEn: 'Quiet solitude, sipping tea, organizing thoughts and planning upcoming schedules.',
        type: 'B'
      },
      {
        textAr: 'الخروج مع الأصدقاء وإدارة الأمور الاجتماعية بحيوية.',
        textEn: 'Going out with close friends, checking up on everyone, bringing lively energy.',
        type: 'C'
      }
    ]
  },
  {
    id: 3,
    questionAr: 'ما هي صفتكِ الأبرز في التعامل مع أصدقائكِ أو فريق العمل؟',
    questionEn: 'What is your most defining characteristic when dealing with close friends or team members?',
    categoryAr: 'العلاقات والولاء',
    categoryEn: 'Team Dynamics & Empathy',
    options: [
      {
        textAr: 'العاطفة الجياشة وحب مساعدة الآخرين بحماس.',
        textEn: 'Deep empathy, heartfelt warmth, and an instinctive urge to lend a helping hand.',
        type: 'A'
      },
      {
        textAr: 'الهدوء، العقلانية، والقدرة على رؤية الصورة الكاملة.',
        textEn: 'Quiet composure, unwavering rationality, and the ability to see the complete picture.',
        type: 'B'
      },
      {
        textAr: 'الصراحة، القوة، والدعم المستمر بحزم وطيبة.',
        textEn: 'Honest straight talk, fierce loyalty, and constant dependable protection.',
        type: 'C'
      }
    ]
  },
  {
    id: 4,
    questionAr: 'إذا أتيحت لكِ فرصة السفر عبر الزمن لتغيير حدث في الماضي، ما شعوركِ؟',
    questionEn: 'If granted the chance to travel through time to alter an event in the past, what is your mindset?',
    categoryAr: 'معضلة الزمن والقدر',
    categoryEn: 'Temporal Dilemma',
    options: [
      {
        textAr: 'سأحاول التدخل حتماً لإنقاذ الموقف لأن مشاعر الآخرين تهمني.',
        textEn: 'I will definitely step in to save them; human pain and remorse cannot be ignored.',
        type: 'A'
      },
      {
        textAr: 'العواقب قد تكون كارثية، يجب الحذر الشديد وعدم العبث بالقواعد.',
        textEn: 'Consequences could be catastrophic; extreme discipline and strict rules must be upheld.',
        type: 'B'
      },
      {
        textAr: 'سأدعم من يحاول الإصلاح مع حمايته من إيذاء نفسه.',
        textEn: 'I will support whoever is trying to fix it while actively protecting them from harm.',
        type: 'C'
      }
    ]
  }
];

// Additional 4 Extended Questions for deep mode (Zero character hints)
export const EXTENDED_QUESTIONS: QuizQuestion[] = [
  ...CORE_QUESTIONS,
  {
    id: 5,
    questionAr: 'أثناء تنفيذ مهمة حساسة وظهرت مفاجأة خطيرة غير متوقعة، كيف تتصرفين؟',
    questionEn: 'During a high-stakes mission when an unexpected crisis abruptly strikes, what do you do?',
    categoryAr: 'الارتجال الميداني',
    categoryEn: 'Field Improvisation',
    options: [
      {
        textAr: 'أعتمد على سرعة بديهتي وحدسي المباشر، وأتحرك فوراً داخل الموقف.',
        textEn: 'Rely on instinct and split-second physical agility to confront the danger head-on.',
        type: 'A'
      },
      {
        textAr: 'أعيد حساب الفارق الزمني فوراً وأوجه التعليمات بأدق الكلمات دون هلع.',
        textEn: 'Instantly recalculate the timeline delta and relay concise tactical instructions.',
        type: 'B'
      },
      {
        textAr: 'أتدخل بالحل الواقعي الحاسم، وأؤمن مخرجاً آمناً للجميع فوراً.',
        textEn: 'Execute a decisive protective maneuver, securing an immediate safe exit for everyone.',
        type: 'C'
      }
    ]
  },
  {
    id: 6,
    questionAr: 'ما هي العبارة الأقرب إلى فلسفتكِ الشخصية في الحياة؟',
    questionEn: 'Which quote best mirrors your personal core philosophy?',
    categoryAr: 'فلسفة الحياة',
    categoryEn: 'Core Philosophy',
    options: [
      {
        textAr: '«مشاعر البشر وصدقهم ودفء اللحظة أثمن من أي قيود أو لوائح جامدة.»',
        textEn: '“Human feelings and genuine warmth are far more precious than rigid guidelines.”',
        type: 'A'
      },
      {
        textAr: '«الماضي لا يمكن استرجاعه، والوعي بالعواقب هو حجر الزاوية لكل قرار.»',
        textEn: '“The past cannot be redone; true awareness of causality governs every choice.”',
        type: 'B'
      },
      {
        textAr: '«الوفاء بالعهود، حماية العائلة، وبناء أرضية واقعية صلبة هو ما يصنع الفرق.»',
        textEn: '“Keeping promises, protecting family, and building real-world stability is what truly counts.”',
        type: 'C'
      }
    ]
  },
  {
    id: 7,
    questionAr: 'عندما يطلب منكِ شخص مقرب كتمان سر ثقيل ومؤلم، ما هو رد فعلكِ؟',
    questionEn: 'When a close comrade asks you to keep a heavy, painful secret, how do you handle it?',
    categoryAr: 'الأسرار والأمانة',
    categoryEn: 'Secrets & Trust',
    options: [
      {
        textAr: 'أشاركه ألمه بالكامل وأحاول التخفيف عن قلبه بكل الطرق الممكنة.',
        textEn: 'Share their pain wholeheartedly, doing everything possible to soothe their burden.',
        type: 'A'
      },
      {
        textAr: 'أحفظ السر في أعماقي كقبر صامت، حتى لو احترق قلبي من وطأته بمفردي.',
        textEn: 'Lock the secret deep within, guarding it silently even if it consumes me inside.',
        type: 'B'
      },
      {
        textAr: 'أحفظ أمانته، لكنني سأظل أراقبه وأدعمه للتأكد من عدم انهياره تحت وطأة الأمر.',
        textEn: 'Respect their trust, while actively keeping a watchful eye to prevent them breaking.',
        type: 'C'
      }
    ]
  },
  {
    id: 8,
    questionAr: 'عند التقاط صورة تذكارية بكاميرا قديمة، ما المعنى الحقيقي لتلك اللقطة بالنسبة لكِ؟',
    questionEn: 'When capturing a memory with a vintage film camera, what does the snapshot truly mean to you?',
    categoryAr: 'روح استوديو الزمن',
    categoryEn: 'Spirit of Time Photo',
    options: [
      {
        textAr: 'نافذة سحرية تعيدك إلى نفس النبض والمشاعر التي عاشها أصحابها.',
        textEn: 'A magical window returning you directly to the exact heartbeat and emotions lived then.',
        type: 'A'
      },
      {
        textAr: 'سجل زمني دقيق يجمد أثر لحظة حاسمة في نهر الزمن الذي لا يتوقف.',
        textEn: 'A frozen coordinate in the river of time, holding an immutable historic trace.',
        type: 'B'
      },
      {
        textAr: 'دليل ملموس على الذكريات المشتركة وعهد صداقة لا يمكن أن يُمحى.',
        textEn: 'Tangible proof of shared bonds, cherished ties, and memories never to fade.',
        type: 'C'
      }
    ]
  }
];

export const TIME_RULES = [
  {
    num: '01',
    ruleAr: 'لديك 12 ساعة فقط داخل خط زمن الصورة.',
    ruleEn: 'You have only 12 hours inside the photo timeline.',
    descAr: 'بعد انقضاء الساعات الـ 12، ينقطع الاتصال وتنغلق نافذة الغوص نهائياً.',
    descEn: 'Once 12 hours elapse, the connection severs and the temporal portal seals forever.'
  },
  {
    num: '02',
    ruleAr: 'اتبع التعليمات حرفياً ولا تغير الماضي.',
    ruleEn: 'Follow instructions strictly and do not alter the past.',
    descAr: 'تغيير العقد الزمنية الرئيسية قد يتسبب في انهيار تسلسلي يغير مصائر أبرياء.',
    descEn: 'Altering critical nodal events sparks cascading divergences that destroy innocent lives.'
  },
  {
    num: '03',
    ruleAr: 'سواء في الماضي أو المستقبل، ركز على الحاضر.',
    ruleEn: 'Regardless of past or future, protect the present.',
    descAr: 'أنت مجرد ضيف في حياة الآخرين؛ لا تجعل مشاعرك الذاتية تحرف بوصلة المهمة.',
    descEn: 'You are but a traveler in another’s footsteps; never let raw impulses compromise the anchor.'
  }
];
