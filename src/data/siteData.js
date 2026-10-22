// Mã các ảnh của studio — ảnh đã làm nét nằm tại /public/images/merci/<mã>.jpg
const PHOTO_IDS = new Set([
  '825267460', '830156401', '830793213', '830946482', '831568125', '831576560',
  '831743163', '832964524', '833188288', '833337010', '833852897', '833992605',
  '834559863', '835120265', '835120266', '836118379', '836262246', '836572049',
  '836813716', '838090001', '838363514', '838620764', '840520650', '841774996',
  '841866037', '842822144', '842995258', '843042263', '843074233', '843611315',
  '844190551', '844207107', '844302299', '844380780', '844737601', '844977837',
  '844979267', '845136045', '845298526', '845435843', '845435855', '845682499',
  '846073342', '846121029', '846321169', '846348008', '846431229', '846432725',
  '846486077', '846668617', '847006927', '847050440', '847116789', '847269992',
  '847680121a', '847680121b', '847680416', '847747712', '847791901', '847791905',
  '848155002', '848241156', '848307513', '848391000', '848413513', '848468776',
  '848715432', '849322625', '849589321',
]);

export const img = (id) => (PHOTO_IDS.has(id) ? `/images/merci/${id}.jpg` : '');

// Nhóm dịch vụ theo brief của studio
export const categories = [
  { id: 'ca-nhan', name: 'Concept cá nhân', desc: 'Bộ ảnh mang dấu ấn riêng, kể câu chuyện của chính bạn.' },
  { id: 'nghe-thuat', name: 'Ảnh nghệ thuật', desc: 'Ánh sáng, bố cục và màu sắc được dàn dựng như một tác phẩm.' },
  { id: 'co-trang', name: 'Cổ trang', desc: 'Áo dài, cổ phục và nét đẹp Á Đông dịu dàng.' },
  { id: 'chan-dung', name: 'Chân dung', desc: 'Chân dung beauty trong trẻo, tôn lên thần thái tự nhiên.' },
  { id: 'chu-de', name: 'Theo chủ đề', desc: 'Sinh nhật, mùa đông, Giáng sinh, couple… theo phong cách riêng.' },
];

export const concepts = [
  {
    slug: 'voan-trang',
    name: 'Voan Trắng',
    category: 'nghe-thuat',
    tagline: 'Tinh khôi như một nàng thơ',
    desc: 'Tà voan ren mềm, corset trắng và chuỗi ngọc trai trên nền phông sáng. Concept dành cho những cô gái muốn lưu lại vẻ đẹp tinh khôi, nhẹ nhàng mà vẫn sang trọng.',
    mood: ['Tinh khôi', 'Thanh lịch', 'Tông trắng'],
    suitable: 'Sinh nhật tuổi mới, kỷ niệm tốt nghiệp, bộ ảnh cá nhân',
    images: ['825267460', '834559863', '836118379', '836262246', '836572049', '838090001'],
    featured: true,
  },
  {
    slug: 'bach-hue',
    name: 'Bạch Huệ',
    category: 'chan-dung',
    tagline: 'Dịu dàng bên đóa huệ trắng',
    desc: 'Váy lụa hai dây, bó huệ tây trắng và ánh sáng mềm. Một bộ chân dung trong trẻo, nữ tính, rất hợp để làm ảnh đại diện hay lưu giữ tuổi đôi mươi.',
    mood: ['Nữ tính', 'Nhẹ nhàng', 'Trắng kem'],
    suitable: 'Ảnh chân dung, ảnh profile, kỷ niệm tuổi mới',
    images: ['830946482', '831576560', '833188288', '833337010', '830156401', '830793213', '831743163'],
    featured: true,
  },
  {
    slug: 'xuan-thi',
    name: 'Xuân Thì',
    category: 'co-trang',
    tagline: 'Áo dài cổ phong giữa sắc đào xuân',
    desc: 'Áo dài lụa trắng, tóc tết dài cài hoa và những cành đào hồng phấn trên phông xanh rêu. Nét đẹp Á Đông thuần khiết, dịu dàng cho mùa xuân.',
    mood: ['Á Đông', 'Cổ phong', 'Hoa đào'],
    suitable: 'Ảnh Tết, ảnh áo dài, bộ ảnh cổ trang nhẹ nhàng',
    images: ['842822144', '842995258', '843042263', '844737601', '846121029'],
    featured: true,
  },
  {
    slug: 'khu-vuon-bi-mat',
    name: 'Khu Vườn Bí Mật',
    category: 'nghe-thuat',
    tagline: 'Fine-art giữa những đóa hoa dại',
    desc: 'Phông vẽ tay màu rêu, hoa dại cài tóc và ánh sáng như tranh sơn dầu. Bộ ảnh nghệ thuật mang cảm giác mộng mơ, hoài cổ.',
    mood: ['Fine-art', 'Mộng mơ', 'Hoài cổ'],
    suitable: 'Ảnh nghệ thuật, portfolio, bộ ảnh cá nhân',
    images: ['847747712', '848715432', '848155002', '848241156', '849322625'],
    featured: true,
  },
  {
    slug: 'cuc-hoa-mi',
    name: 'Cúc Họa Mi',
    category: 'ca-nhan',
    tagline: 'Khăn voan hoa nhí, má hồng tinh nghịch',
    desc: 'Khăn hoa nhí, cúc họa mi và lớp makeup má hồng trong veo. Concept dễ thương, tươi tắn dành cho cô gái thích phong cách Hàn Quốc.',
    mood: ['Đáng yêu', 'Tươi tắn', 'Hàn Quốc'],
    suitable: 'Bộ ảnh cá nhân, ảnh sinh nhật, ảnh sống ảo',
    images: ['845435843', '845682499', '846073342', '846348008', '847116789'],
  },
  {
    slug: 'ha-vintage',
    name: 'Hạ Vintage',
    category: 'ca-nhan',
    tagline: 'Mũ len móc và chiều hè nắng vàng',
    desc: 'Váy trắng xếp tầng, mũ len móc, đĩa nho xanh trên nền vàng bơ. Một buổi picnic mùa hè đầy chất vintage, ấm áp và thư thái.',
    mood: ['Vintage', 'Ấm áp', 'Mùa hè'],
    suitable: 'Bộ ảnh cá nhân, ảnh lookbook',
    images: ['841866037', '843074233', '844207107', '844380780'],
  },
  {
    slug: 'black-mood',
    name: 'Black Mood',
    category: 'ca-nhan',
    tagline: 'Blazer đen, cà vạt đỏ, thần thái riêng',
    desc: 'Blazer oversize, tất đen và cà vạt đỏ rượu. Concept cá tính, hiện đại cho những cô gái muốn thử một hình ảnh mạnh mẽ, cuốn hút.',
    mood: ['Cá tính', 'Thời trang', 'Đen đỏ'],
    suitable: 'Ảnh thời trang, profile cá tính',
    images: ['846432725', '847050440', '847680416', '848413513'],
  },
  {
    slug: 'trong-treo',
    name: 'Trong Trẻo',
    category: 'chan-dung',
    tagline: 'Chân dung beauty cận cảnh',
    desc: 'Những khung hình cận mặt với ánh sáng tự nhiên, lớp nền mỏng nhẹ, tóc rơi lơi. Tôn lên thần thái và nét đẹp tự nhiên nhất của bạn.',
    mood: ['Beauty', 'Tự nhiên', 'Cận cảnh'],
    suitable: 'Ảnh đại diện, ảnh beauty, portfolio',
    images: ['840520650', '841774996', '843611315', '844979267'],
  },
  {
    slug: 'red-balloon',
    name: 'Red Balloon',
    category: 'chu-de',
    tagline: 'Bóng bay đỏ và mùa đông ấm áp',
    desc: 'Chùm bóng bay đỏ, khăn len kẻ sọc và nụ cười rạng rỡ. Chủ đề Giáng sinh – năm mới vui tươi, rực rỡ sắc đỏ.',
    mood: ['Giáng sinh', 'Vui tươi', 'Sắc đỏ'],
    suitable: 'Ảnh Noel, năm mới, sinh nhật mùa đông',
    images: ['846486077', '849589321', '846668617', '847791905', '848307513'],
  },
  {
    slug: 'thu-vang',
    name: 'Thu Vàng',
    category: 'chu-de',
    tagline: 'Couple giữa thảm lá mùa thu',
    desc: 'Áo len kem, khăn caro, chụp tai lông và thảm lá khô. Concept đôi dành cho các cặp đôi muốn lưu giữ khoảnh khắc ngọt ngào, ấm áp.',
    mood: ['Couple', 'Mùa thu', 'Ấm áp'],
    suitable: 'Kỷ niệm yêu nhau, ảnh couple, ảnh bạn thân',
    images: ['844190551', '847680121a', '844302299', '846321169', '847680121b', '848391000'],
  },
  {
    slug: 'sinh-nhat',
    name: 'Birthday Story',
    category: 'chu-de',
    tagline: 'Mỗi tuổi mới là một câu chuyện',
    desc: 'Bóng bay số, bánh kem, nến lung linh — mỗi bộ ảnh sinh nhật được lên ý tưởng riêng theo màu sắc và cá tính của bạn.',
    mood: ['Sinh nhật', 'Bóng bay', 'Kỷ niệm'],
    suitable: 'Sinh nhật 18, 20, 21, 25…',
    images: ['832964524', '836813716', '835120266', '838363514', '831568125', '833852897'],
    collage: true,
  },
  {
    slug: 'mua-dong',
    name: 'Mùa Đông Kể Chuyện',
    category: 'chu-de',
    tagline: 'Tuyết rơi, mũ lông và đèn lồng',
    desc: 'Tuyết trắng, mũ lông, khăn len và ánh đèn lồng ấm. Những bộ ảnh mùa đông như bước ra từ một thước phim.',
    mood: ['Mùa đông', 'Điện ảnh', 'Tuyết'],
    suitable: 'Ảnh mùa đông, Giáng sinh, ảnh cá nhân',
    images: ['845136045', '847791901', '846431229', '845298526', '847269992', '844977837', '845435855', '848468776'],
    collage: true,
  },
  {
    slug: 'ngot-ngao',
    name: 'Ngày Ngọt Ngào',
    category: 'ca-nhan',
    tagline: 'Những câu chuyện nhỏ đáng yêu',
    desc: 'Ô hoa công chúa, mũ cói đồng quê, len đỏ tinh nghịch hay một buổi chiều ăn vặt — những concept nhỏ xinh dành cho ngày bình thường thật đặc biệt.',
    mood: ['Đáng yêu', 'Năng động', 'Đa sắc'],
    suitable: 'Bộ ảnh cá nhân, ảnh bạn thân',
    images: ['835120265', '838620764', '847006927', '833992605'],
    collage: true,
  },
];

export const getConcept = (slug) => concepts.find((c) => c.slug === slug);
export const categoryName = (id) => categories.find((c) => c.id === id)?.name || '';

// Toàn bộ ảnh, gắn nhãn concept — dùng chung cho Bộ sưu tập và Lightbox
export const allPhotos = concepts.flatMap((c) =>
  c.images.map((id, i) => ({
    src: img(id),
    title: `${c.name} — ${c.tagline}`,
    category: categoryName(c.category),
    concept: c.slug,
    key: `${c.slug}-${i}`,
  }))
);

export const siteData = {
  name: 'MERCI studio',
  tagline: 'Tiệm chụp ảnh concept tại Hồ Chí Minh',
  slogan: 'where every shot is a story',
  logo: '/logo/merci-logo-dark.png',
  logoLight: '/logo/merci-logo-light.png',
  hotline: '0981949108',
  hotlineFormatted: '098 194 91 08',
  city: 'TP. Hồ Chí Minh',
  facebookLink: 'https://www.facebook.com/mercistudio.official',
  facebookLabel: 'facebook.com/mercistudio.official',
  messengerLink: 'https://m.me/mercistudio.official',
  zaloLink: 'https://zalo.me/0981949108',
  googleMapsLink:
    'https://www.google.com/maps/place/MERCI+studio+-+Ti%E1%BB%87m+Ch%E1%BB%A5p+%E1%BA%A2nh/@10.8102214,106.6830674,17z/data=!3m1!4b1!4m6!3m5!1s0x3175296a2e013713:0x5b7fdf369d12b79b!8m2!3d10.8102214!4d106.6830674!16s%2Fg%2F11wfghdmvb',
  mapEmbed: 'https://maps.google.com/maps?q=10.8102214,106.6830674&z=16&output=embed',

  hero: {
    kicker: 'MERCI studio · Hồ Chí Minh',
    title: 'Mỗi khung hình,',
    titleAccent: 'một câu chuyện của bạn.',
    description:
      'Tiệm chụp ảnh concept dành cho những cô gái yêu cái đẹp — từ chân dung trong trẻo, áo dài cổ phong đến những bộ ảnh nghệ thuật mang dấu ấn riêng.',
    ctaPrimary: 'Khám phá concept',
    ctaSecondary: 'Đặt lịch chụp',
    // Slide hero: desktop ghép 2 ảnh cùng concept cạnh nhau (ảnh gốc nhỏ, phủ cả màn hình sẽ bị mờ),
    // mobile dùng 1 ảnh (tall) theo cấu trúc thiết kế gốc
    slides: [
      { wide: ['825267460', '836118379'], tall: '825267460', alt: 'Concept Voan Trắng tại MERCI studio', posWide: 'center 20%', posTall: 'center 30%' },
      { wide: ['842995258', '844737601'], tall: '843042263', alt: 'Concept Xuân Thì áo dài cổ phong', posWide: 'center 15%', posTall: 'center 30%' },
      { wide: ['848715432', '849322625'], tall: '848155002', alt: 'Concept Khu Vườn Bí Mật', posWide: 'center 20%', posTall: 'center 35%' },
      { wide: ['830946482', '833337010'], tall: '831576560', alt: 'Concept Bạch Huệ', posWide: 'center 20%', posTall: 'center 30%' },
      { wide: ['846486077', '849589321'], tall: '846668617', alt: 'Concept Red Balloon', posWide: 'center 25%', posTall: 'center 35%' },
    ],
  },

  about: {
    headline: 'Chào bạn, mình là Merci',
    intro:
      '“Merci” nghĩa là cảm ơn. MERCI studio ra đời với mong muốn gửi lời cảm ơn đến từng cô gái — vì đã dành thời gian yêu thương bản thân và lưu giữ vẻ đẹp của mình qua những khung hình.',
    subHeadline: 'Where every shot is a story.',
    linkText: 'Tìm hiểu về MERCI',
    images: [
      { id: '830946482', pos: 'center 30%' },
      { id: '836262246', pos: 'center 20%' },
      { id: '844302299', pos: 'center 35%' },
    ],
    story: [
      'Tại MERCI, mỗi buổi chụp bắt đầu bằng một cuộc trò chuyện: bạn thích màu gì, đang ở cột mốc nào, muốn lưu lại cảm xúc ra sao. Từ đó, ekip lên ý tưởng concept, phối trang phục, makeup và dựng bối cảnh phù hợp riêng cho bạn.',
      'Studio theo đuổi phong cách hiện đại, tươi sáng với tông trắng kem làm chủ đạo — để vẻ đẹp tự nhiên của bạn luôn là nhân vật chính trong mỗi bức ảnh.',
    ],
    values: [
      { title: 'Concept riêng', text: 'Ý tưởng được lên theo cá tính, câu chuyện và cột mốc của từng khách hàng.' },
      { title: 'Ekip trọn gói', text: 'Nhiếp ảnh, makeup, làm tóc, trang phục và đạo cụ phối hợp trong một buổi chụp.' },
      { title: 'Thoải mái tự nhiên', text: 'Hướng dẫn tạo dáng tận tình, kể cả khi bạn chưa từng đứng trước ống kính.' },
      { title: 'Hậu kỳ tinh tế', text: 'Chỉnh màu, da và ánh sáng nhẹ nhàng — đẹp mà vẫn là chính bạn.' },
    ],
    audience: [
      'Bạn nữ 18–35 tuổi muốn có bộ ảnh concept cá nhân',
      'Sinh viên lưu giữ tuổi trẻ, kỷ niệm tốt nghiệp',
      'Người yêu thích chụp ảnh nghệ thuật, cổ trang',
      'Khách hàng chụp sinh nhật, kỷ niệm hoặc concept theo ý tưởng riêng',
    ],
  },

  // Giá tham khảo — cập nhật theo bảng giá thực tế của studio trước khi đưa lên production
  packages: {
    title: 'Bảng Giá Theo Gói',
    description: 'Chọn gói phù hợp, MERCI lo phần còn lại — từ ý tưởng, trang phục đến từng tấm ảnh hoàn thiện.',
    note: 'Giá tham khảo, có thể thay đổi theo concept và số lượng người. Liên hệ MERCI để nhận báo giá chính xác.',
    items: [
      {
        id: 'mini',
        name: 'Gói Mini',
        price: '690.000đ',
        unit: '/ người',
        desc: 'Thử sức trước ống kính với một concept nhẹ nhàng.',
        features: ['1 concept', '1 bộ trang phục studio', '45 phút chụp', '15 ảnh chỉnh sửa kỹ', 'Gửi toàn bộ file gốc'],
      },
      {
        id: 'standard',
        name: 'Gói Tiêu Chuẩn',
        price: '1.290.000đ',
        unit: '/ người',
        desc: 'Lựa chọn được yêu thích nhất cho bộ ảnh concept cá nhân.',
        features: ['1 concept tự chọn', 'Makeup & làm tóc', '2 bộ trang phục', '90 phút chụp', '30 ảnh chỉnh sửa kỹ', 'Gửi toàn bộ file gốc'],
        featured: true,
        badge: 'Phổ biến nhất',
      },
      {
        id: 'premium',
        name: 'Gói Nghệ Thuật',
        price: '1.990.000đ',
        unit: '/ người',
        desc: 'Bộ ảnh nghệ thuật trọn vẹn với nhiều concept.',
        features: ['2 concept tự chọn', 'Makeup & làm tóc 2 layout', '3 bộ trang phục', '150 phút chụp', '50 ảnh chỉnh sửa kỹ', '01 ảnh in 30×45 cm'],
      },
      {
        id: 'couple',
        name: 'Gói Đôi / Nhóm',
        price: '2.490.000đ',
        unit: '/ 2 người',
        desc: 'Dành cho couple, bạn thân hoặc nhóm nhỏ.',
        features: ['1–2 concept theo chủ đề', 'Makeup & làm tóc cho 2 người', '2 bộ trang phục / người', '120 phút chụp', '40 ảnh chỉnh sửa kỹ', 'Thêm người: liên hệ báo giá'],
      },
    ],
  },

  locationSection: {
    title: 'Kết nối cùng MERCI studio',
    intro: 'Nhắn tin cho MERCI qua Zalo, Messenger hoặc gọi hotline để được tư vấn concept, gói chụp và giữ lịch nhanh nhất. Studio làm việc theo lịch hẹn tại TP. Hồ Chí Minh.',
    cta: 'XEM BẢN ĐỒ GOOGLE MAPS',
    // Ảnh collage ghép từ các ảnh đã làm nét
    background: '/images/merci/collage-contact.jpg',
  },

  // Thẻ thông tin bên phải khối Liên hệ (giữ dạng danh sách cơ sở của thiết kế gốc)
  branches: [
    {
      name: 'MERCI studio – Tiệm Chụp Ảnh',
      address: 'TP. Hồ Chí Minh — bấm để xem chỉ đường trên Google Maps',
      href: 'https://www.google.com/maps/place/MERCI+studio+-+Ti%E1%BB%87m+Ch%E1%BB%A5p+%E1%BA%A2nh/@10.8102214,106.6830674,17z',
    },
    {
      name: 'Nhắn Zalo',
      address: '098 194 91 08 — tư vấn concept & giữ lịch chụp',
      href: 'https://zalo.me/0981949108',
    },
    {
      name: 'Nhắn Messenger',
      address: 'Fanpage facebook.com/mercistudio.official',
      href: 'https://m.me/mercistudio.official',
    },
  ],

  mosaic: {
    title: 'Những Câu Chuyện Của MERCI',
    description: 'Mỗi bộ ảnh là một câu chuyện riêng — được kể bằng ánh sáng, màu sắc và cảm xúc của bạn',
  },

  steps: [
    { title: 'Chọn concept', text: 'Xem danh sách concept và chọn phong cách bạn yêu thích.' },
    { title: 'Đặt lịch', text: 'Gửi yêu cầu đặt lịch hoặc nhắn Zalo/Messenger cho MERCI.' },
    { title: 'Tư vấn & xác nhận', text: 'MERCI liên hệ tư vấn trang phục, makeup và chốt lịch chụp.' },
    { title: 'Chụp & nhận ảnh', text: 'Thoải mái tận hưởng buổi chụp, nhận ảnh đã chỉnh sửa hoàn thiện.' },
  ],

  faqs: [
    {
      q: 'MERCI studio chụp những thể loại ảnh nào?',
      a: 'MERCI chuyên chụp ảnh concept cá nhân, ảnh nghệ thuật, ảnh cổ trang, chân dung và các bộ ảnh theo chủ đề như sinh nhật, mùa đông, couple… Bạn cũng có thể đề xuất ý tưởng riêng để ekip cùng lên concept.',
    },
    {
      q: 'Mình chưa từng chụp ảnh, có tạo dáng được không?',
      a: 'Hoàn toàn được! Nhiếp ảnh gia sẽ hướng dẫn tạo dáng từng khung hình, giúp bạn thoải mái và tự nhiên nhất trước ống kính.',
    },
    {
      q: 'Studio có sẵn trang phục và makeup không?',
      a: 'Các gói từ Tiêu Chuẩn trở lên đã bao gồm makeup, làm tóc và trang phục theo concept. Với gói Mini, bạn có thể mượn trang phục studio hoặc tự chuẩn bị.',
    },
    {
      q: 'Làm sao để đặt lịch chụp?',
      a: 'Bạn chọn concept và gửi yêu cầu tại trang Đặt lịch, hoặc nhắn tin qua Zalo/Messenger, gọi hotline 098 194 91 08. MERCI sẽ liên hệ lại để tư vấn và xác nhận lịch.',
    },
    {
      q: 'Bao lâu thì nhận được ảnh?',
      a: 'File gốc thường được gửi ngay sau buổi chụp để bạn chọn ảnh. Thời gian chỉnh sửa hoàn thiện sẽ được MERCI thông báo cụ thể khi chốt lịch.',
    },
    {
      q: 'Studio nằm ở đâu?',
      a: 'MERCI studio nằm tại TP. Hồ Chí Minh. Bạn có thể xem vị trí chính xác trên Google Maps ở trang Liên hệ hoặc nhắn fanpage để được chỉ đường.',
    },
  ],

  finalCta: {
    kicker: 'Merci — cảm ơn bạn đã yêu bản thân',
    heading: 'CÂU CHUYỆN CỦA BẠN\nBẮT ĐẦU TỪ MỘT KHUNG HÌNH',
    subheading: 'Chọn concept yêu thích và đặt lịch ngay hôm nay, MERCI sẽ đồng hành cùng bạn từ ý tưởng đến tấm ảnh cuối cùng.',
    ctaPrimary: 'ĐẶT LỊCH CHỤP',
    ctaSecondary: 'NHẮN ZALO',
    background: '/images/merci/collage-cta.jpg',
  },

  bookingForm: {
    cursiveHeader: 'Hẹn bạn tại MERCI',
    heading: 'ĐẶT LỊCH CHỤP',
    subheading: 'Để lại thông tin và concept yêu thích, MERCI sẽ liên hệ tư vấn và xác nhận lịch chụp cho bạn.',
    cta: 'GỬI YÊU CẦU ĐẶT LỊCH',
    image: '843042263',
    imageTitle: 'Where every shot is a story',
    imageText: 'Mỗi buổi chụp được chuẩn bị riêng theo câu chuyện của bạn',
    timeSlots: ['08:00', '09:30', '11:00', '13:30', '15:00', '16:30', '18:00'],
  },
};
