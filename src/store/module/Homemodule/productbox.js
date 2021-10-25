const state = {
  events: [
    {
      id: 1,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      name: "মারায়ংতন ক্যাম্পিং এবং আলীর গুহা অভিযান",
      price: "৪৫০০/-",
      date: "",
      location: "মেরাইথং, আলীকদম, বান্দরবান",
      event_duration: "",
      short_description: "মারায়ংতন ক্যাম্পিং এবং আলীর গুহা অভিযান",
      description:
        " রাতের বাসে ঢাকা থেকে চকরিয়ার উদ্দেশ্যে যাত্রা করবো। চকোরিয়া থেকে জীপে চলে যাবো আলীকদম। আলীকদমে বাজার সদাই করে চলে যাবো আমাদের নির্ধারিত ক্যাম্প সাইট মারায়ন তং জাদীতে। মারানয় তং এর চূড়ায় তাবু ঠিক করে চলবে আড্ডা, গান। নিজেরা সবাই মিলে রান্না বান্না করে রাতে খেয়ে ঘুমিয়ে পড়বো পাহাড় চুড়ায়। ভোরে ঘুম থেকে উঠে মেঘের ভেলায় ভেসে কিছু সময় কাটিয়ে ক্যাম্প গুছিয়ে নিচে নেমে এসে আবাসিকে নাস্তা করবো। নাস্তার পর আমরা ঘুরে দেখবো রহস্যময় আলীর গুহা। সেখান থেকে জীপে চকোরিয়া এসে খাবার দাবার শেষ করে রাতের বাসে ঢাকার উদ্দেশ্যে যাত্রা। অথবা, প্রথম দিন আমরা মারায়ন তং এ উঠার আগে আলীর গুহা ঘুরে দেখে মারায়ন তং চলে যেতে পারি। এবং এদিন আমরা নিজেরা নিজেরা মিলে ডিম পাহাড় অথবা কক্সবাজার ঘুরে (বাসভাড়া/জ্বীপ ভাড়া হিজ হিজ হুজ হুজ) রাতের বাসে ঢাকা চলে আসতে পারি। সকালে ঢাকা পৌছে যে যার মতো বাসায় ফিরে যাবো।",
      hotel: "",
      activities: [
        {
          id: 1,
          title: "Day 1",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          title: "Day 2",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          title: "Day 3",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          title: "Day 4",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],

      inclusions: [
        {
          id: 1,
          inc: "ঢাকা-চকরিয়া-ঢাকা (নন এসি বাস সার্ভিস)",
        },
        {
          id: 2,
          inc: "সকালের নাস্তা, দুপুরের খাবার(শুকনো খাবার বা স্থানীয় যে খাবার পাওয়া যাবে, রাতের খাবার",
        },
        {
          id: 3,
          inc: "সকল ধরনের লোকাল ট্রান্সপোর্ট (জীপ/বাইক)",
        },
        {
          id: 4,
          inc: "গাইড",
        },
        {
          id: 5,
          inc: "একান্তই তাবু ম্যানেজ করতে না পারলে শেয়ার বেসিসে তাবুতে থাকার ব্যবস্থা",
        },
        {
          id: 6,
          inc: "ফড়িংয়ের দলের একটি টি-শার্ট",
        },
      ],
      exclusions: [
        {
          id: 1,
          exc: "ব্যক্তিগত ঔষধ",
        },
        {
          id: 2,
          exc: "ম্যালেরিয়া প্রতিষেধক, ওডোমস",
        },
        {
          id: 3,
          exc: "যেকোন ধরনের ব্যাক্তিগত খরচ",
        },
      ],
      Policy: [
        {
          id: 1,
          policy: "নির্দিষ্ট সময়ে ইভেন্ট ফি পরিশোধ করতে হবে।",
        },
        {
          id: 2,
          policy: "ইভেন্টে কোন ধরনের মাদকদ্রব্য সেবন/বহন করা যাবে না।",
        },
        {
          id: 3,
          policy: "ধূমপান করে না এমন কারো সামনে ধূমপান করা যাবে না।",
        },
        {
          id: 4,
          policy:
            "ভ্রমন চলাকালিন যেকোন সমস্যা/দুর্ঘটনা মেনে নেওয়ার মন মানসিকতা নিয়েই অংশগ্রহন করবেন।",
        },
        {
          id: 5,
          policy: "যেকোন সমস্যা অংশগ্রহনকারী সকলে মিলে সমাধানের চেষ্টা করবেন।",
        },
        {
          id: 6,
          policy:
            "সকল নিয়ম কানুন অবশ্যই মেনে চলার দৃষ্টিভঙ্গি নিয়েই অংশগ্রহন করত হবে।",
        },
        {
          id: 7,
          policy: "অতিরিক্ত দু:সাহসিকতা দেখানো যাবেনা।",
        },
        {
          id: 8,
          policy:
            "দলছাড়া হয়ে ঘুরা যাবে না। বিশেষ প্রয়োজনে দলকে জানিয়ে যাওয়া যেতে পারে।",
        },
        {
          id: 9,
          policy: "দলের কাউকে কষ্ট দিয়ে কোন কথা বলা বা কাজ করা যাবে না।",
        },
        {
          id: 10,
          policy: "সম্পূর্ন ইভেন্ট বিবরন ও বিস্তারিত পড়ে অংশগ্রহন করতে হবে।",
        },
      ],
    },
    {
      id: 2,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      name: "মেঘের রাজ্য সাজেক",
      price: "৫৫০০/-",
      date: "",
      location: "Sajek Valley- সাজেক ভ্যালী, বাংলাদেশ",
      event_duration: "16 April - 19 april, 2022",
      short_description:
        "এটি ফড়িংয়ের দলের নিজস্ব ইভেন্ট। আমাদের এবারে গন্তব্য মেঘের রাজ্য সাজেক ভ্যালীতে ।",
      description:
        " রাতের বাসে ঢাকা থেকে রওনা দিবে ফড়িংয়ের দল । সকালে খাগড়াছড়ি পৌঁছে নাস্তা করে জিপে করে যাবে মেঘের দেশ সাজেকে। দুপুরে সাজেক পৌঁছে কটেজ এ চেক ইন করবে। এর পর ফ্রেশ হয়ে লাঞ্চ করে ঘুরে বেড়াবে রুইলুই পাড়া আর কংলাংক পাড়ার প্রতি প্রান্তে। দেখবে সূর্যাস্ত। সকালে উঠেই মেঘের ভেতর দাঁড়িয়ে সূর্যোদয় দেখে, ধোয়া ওঠা এক কাপ চা আর নাস্তা করে রওনা দিবে খাগড়াছড়ি শহরের উদ্দেশ্যে। দুপুরের মধ্যে খাগড়াছড়ি পৌঁছে এ লাঞ্চ করবে ফড়িং দল। এর পর একে একে রিসাং ঝরনায় ভিজে আর আলুটিলা গুহা জয় করে ,তারেং এবং ঝুলন্ত ব্রিজ ঘুরে রাতের বাসে ঢাকায় রওনা দিবে ফড়িংরা। সব কিছু ঠিক থাকলে সকালে ঢাকায় পৌঁছাবে ফড়িংরা।",
      hotel: "",
      activities: [
        {
          id: 1,
          title: "Day 1",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          title: "Day 2",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          title: "Day 3",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          title: "Day 4",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],

      inclusions: [
        {
          id: 1,
          inc: "সাদা মাহিন্দ্রা জ্বীপ গাড়ির আপ ডাউন ভাড়া",
        },
        {
          id: 2,
          inc: "৬ বেলা খাবার",
        },
        {
          id: 3,
          inc: "শেয়ার বেসিসে কটেজে থাকা",
        },
        {
          id: 4,
          inc: "সাজেকে এন্ট্রি টিকেট",
        },
        {
          id: 5,
          inc: "আলুটিলা ,ঝুলন্ত ব্রীজের এন্ট্রি টিকেটস",
        },
      ],
      exclusions: [
        {
          id: 1,
          exc: "যেকোন ধরনের ব্যাক্তিগত খরচ",
        },
        {
          id: 2,
          exc: "ঔষধ",
        },
      ],
      Policy: [
        {
          id: 1,
          policy: "অবশ্যই আপনাকে শক্ত মনমানসিকতা নিয়ে আসতে হবে",
        },
        {
          id: 2,
          policy: "ট্যুরে এডমিনের যে কোন সিদ্ধান্তে কো-অপারেট করতে হবে",
        },
        {
          id: 3,
          policy: "যে কোন পরিস্থিতিতে নিজেকে মানিয়ে নিতে হবে ",
        },
        {
          id: 4,
          policy: "আনন্দ করবো কিন্তু তা লিমিটের মধ্যে",
        },
        {
          id: 5,
          policy: "গ্রুপে সবার সাথে ভালো ব্যবহার করতে হবে",
        },
        {
          id: 6,
          policy: "ট্যুরে কোন প্রকার অবৈধ কাজ করা যাবে না ",
        },
        {
          id: 7,
          policy: "মাদকমুক্ত ইভেন্ট",
        },
      ],
    },
    {
      id: 3,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      name: "ভোলাগঞ্জ সাদাপাথর ও রাতারগুল",
      price: "২৩৯৯/-",
      date: "",
      location: "ভোলাগঞ্জ সাদাপাথর,সিলেট",
      event_duration: "",
      short_description: "ভোলাগঞ্জ সাদাপাথর ও রাতারগুল",
      description:
        "সিলেটের সীমান্তবর্তী একটি নদের নাম ধলাই। ভারতের মেঘালয় রাজ্য থেকে নেমে এসেছে এটি। ধলাই নদের উৎসমুখে পাঁচ একর জায়গা জুড়ে ছড়িয়ে-ছিটিয়ে রয়েছে সাদা সাদা পাথর। ওপারে উঁচু পাহাড়ে ঘেরা সবুজের মায়াজাল। সেখান থেকে নেমে আসা ঝরনার অশান্ত শীতল পানির অস্থির বেগে বয়ে চলা। গন্তব্য তৃষ্ণার্ত ধলাইয়ের বুক। স্বচ্ছ নীল জল, সাদা পাথর আর পাহাড়ের সবুজ মিলেমিশে যেন একাকার। ধলাইয়ের বুকে ছড়িয়ে-ছিটিয়ে থাকা পাথরের বিছানা শোভা বাড়িয়ে দিয়েছে হাজার গুণ। রাতের রির্জাব এসি হাইসে অথবা নন এসি চেয়ার কোচ বাসে করে আমরা সিলেটের উদ্দেশ্যে রওনা হয়ে যাব । সকালে সিলেটে নেমে নাস্তা করে চলে যাবো আমাদের আসল গন্তব্য ভোলাগন্জ তারপর নৌকা দিয়ে পার হয়ে চলে যাবো সাদাপাথর ।দুপুরের খাবার খেয়ে চলে যাবো রাতারগুল । তারপর আসার পথে চা বাগান ভ্রমন করে জমপেশ করে সিলেটের বিখ্যাত পাঁচ ভাইয়ে রাতের খাবার সেরে ঢাকার উদ্দেশ্যে রওনা হয়ে যাবো।ডিনারের পর কেউ ইচ্ছে করলে সিলেট শহর/মাজারেও যেতে পারেন নিজ খরচে । (অথবা আলোচনা সাপেক্ষে আমরা সন্ধ্যায় ঢাকার উদ্দশ্যে রওণা হবে রাত ১২/১টার মধ্যে ঢাকাও আসতে পারবো) সবকিছু ঠিক থাকলে খুব সকালে ঢাকা পৌছে যাবো । রাতারগুল :- রাতারগুল বনটি হল গৌঁন নদী, ফতেহপুর ইউনিয়ন, গোয়াইনঘাট, সিলেট, বাংলাদেশে অবস্থিত একটি তাজা জলীয় জলাশয় বন। এটি বাংলাদেশের একমাত্র তলদেশের বন এবং বিশ্বের কয়েকটি তাজা জলাশয়ের তলদেশের এক বন। বাংলাদেশ সরকার বন বিভাগের অধীনে বনভূমি প্রাকৃতিকভাবে সংরক্ষিত হয়। তার এলাকা ৩,৩২৫.৬১৩ একর, যার মধ্যে ৫০৩ একর জমিতে ১৯৭৩ সালে পশু আশ্রয়কেন্দ্র হিসেবে ঘোষিত হয়। এটি সিলেটের বাংলা এবং সুন্দরবনের আমাজন নামে পরিচিত। সিলেট থেকে ২৬ কিলোমিটার দূরে বাংলাদেশের এই একমাত্র তলদেশের বনভূমি অবস্থিত। বনটির নাম সিলেটের স্থানীয়দের ব্যবহৃত শব্দ 'রাতা' বা 'পটি' গাছ থেকে আসে।",
      hotel: "Chander Bari, Sajek Valley",
      activities: [
        {
          id: 1,
          title: "Day 1",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          title: "Day 2",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          title: "Day 3",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          title: "Day 4",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],

      inclusions: [
        {
          id: 1,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
      exclusions: [
        {
          id: 1,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 4,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      name: "Checked Short Dress",
      price: "50.00",
      date: "12 April, 2022",
      location: "Bandarban",
      event_duration: "16 April - 19 april, 2022",
      short_description:
        "Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy",
      description:
        "Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy Make our Customers Happy",
      hotel: "Chander Bari, Sajek Valley",
      activities: [
        {
          id: 1,
          title: "Day 1",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          title: "Day 2",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          title: "Day 3",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          title: "Day 4",
          activity: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],

      inclusions: [
        {
          id: 1,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          inc: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
      exclusions: [
        {
          id: 1,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          exc: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
  ],
  hotels: [
    {
      id: 1,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "40.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 2,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "30.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 3,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "50.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 4,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "50.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 5,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "50.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
    {
      id: 6,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/shop/dress/1-1.jpg"),
      name: "Checked Short Dress",
      location: "Bandarban, Bangladesh",
      price: "50.00",
      description:
        "jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk. jkvwdj. jfkv  jf.kvngrn wrgk.jkvwdj. jfkv  jf.kvngrn wrgk.",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      features: [
        {
          id: 1,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 2,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 3,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
        {
          id: 4,
          feature: "jkhgdf jfkdhg,v fjgskfjj",
        },
      ],
    },
  ],
  tickets: [
    {
      id: 1,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Hanif",
      destination: "Dhaka to Bandarban",
      price: "350",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 2,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Ena",
      destination: "Dhaka to Bandarban",
      price: "520",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 3,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Saint Martin",
      destination: "Dhaka to Bandarban",
      price: "400",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 4,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Hanif",
      destination: "Dhaka to Bandarban",
      price: "580",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 5,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Hanif Paribahan",
      destination: "Dhaka to Bandarban",
      price: "350",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 6,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Hanif Paribahan",
      destination: "Dhaka to Bandarban",
      price: "350",
      destination: "Dhaka to Bandarban",
      date: "22-12-2021",
      time: "2:30 PM",
    },
    {
      id: 7,
      img1: "https://via.placeholder.com/300x380",
      img2: require("../../../assets/images/event/esh.jpg"),
      bus: "Hanif Paribahan",
      destination: "Dhaka to Bandarban",
      price: "350",
      date: "22-12-2021",
      time: "2:30 PM",
    },
  ],
  blogs: [
    {
      id: 1,
      img: "https://via.placeholder.com/300x380",
      title: "Why choose Us.",
      date: "12-09-2022",
      video: "http://player.vimeo.com/video/87701971",
      short_description: "Because we are Reliable Because we are Reliable",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/300x380",
      title: "Our Mission.",
      video: "http://player.vimeo.com/video/87701971",
      date: "12-09-2022",
      short_description: "To Redefine your Brand To Redefine your Brand",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/300x380",
      title: "What we Do",
      date: "12-09-2022",
      video: "http://player.vimeo.com/video/87701971",
      short_description: "Make our Customers Happy Make our Customers Happy",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.",
    },
    {
      id: 4,
      img: "https://via.placeholder.com/300x380",
      title: "Why choose Us.",
      date: "12-09-2022",
      video: "http://player.vimeo.com/video/87701971",
      short_description: "Because we are Reliable Because we are Reliable",
      slider_img: [
        {
          id: 1,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
        {
          id: 2,
          img: "https://via.placeholder.com/300x380",
        },
        {
          id: 3,
          img: require("../../../assets/images/shop/dress/1-1.jpg"),
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.",
    },
  ],
};
export default {
  namespaced: true,
  state,
};
