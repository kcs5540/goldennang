export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  productName: string;
  title: string;
  content: string;
  badge: string;
  imageUrl?: string;
  tag: string;
}

export interface DirectOrderReservation {
  customerName: string;
  phone: string;
  productChoice: string;
  quantity: string;
  preferredCallTime: string;
  deliveryType: 'parcel' | 'farm_pickup';
  addressOrNotes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'delivery' | 'growing' | 'order' | 'b2b';
}

export interface FarmNotice {
  id: string;
  title: string;
  category: '출하안내' | '농장소식' | '재배팁' | '배송공지';
  date: string;
  badge?: string;
  summary: string;
  content: string;
  views: number;
  important?: boolean;
}

export const FARM_NOTICES: FarmNotice[] = [
  {
    id: 'notice-1',
    title: '2026년 봄철 제주 애플망고나무 특묘 3년생 1차 출하 시작',
    category: '출하안내',
    date: '2026.03.18',
    badge: '필독',
    important: true,
    views: 1240,
    summary: '서귀포 농장에서 겨우내 충실하게 꽃눈을 맺은 어윈 품종 3년생 접목묘의 정규 출하가 개시되었습니다.',
    content: '안녕하세요, 황금낭입니다.\n2026년 봄 시즌을 맞아 서귀포 토평동 농장에서 최상급 어윈(Irwin) 품종 애플망고 화분 3년생 특묘 1차 출고가 시작되었습니다.\n\n올해는 겨울철 일조량이 풍부하여 가지마디가 굵고 꽃눈 분화가 매우 훌륭합니다. 가정의 베란다나 거실 창가에 두시면 4월부터 매혹적인 망고 꽃을 감상하실 수 있습니다.\n\n수량이 한정되어 있으니 봄철 식재를 계획 중이신 분들은 예약을 서둘러 주시기 바랍니다.'
  },
  {
    id: 'notice-2',
    title: '식목일 맞이 8년생 감귤나무 대품 화분 특별 포장 배송 안내',
    category: '농장소식',
    date: '2026.03.10',
    badge: '인기',
    important: true,
    views: 890,
    summary: '기업 개업식, 병원/호텔 로비 축하 화분으로 인기가 높은 8년생 감귤나무 전용 화물 특송 프로세스 안내입니다.',
    content: '황금낭의 시그니처 8년생 이상 대형 감귤나무 화분은 일반 택배가 아닌 경동택배 전문 화물 지점과 제휴하여 "익일 안전 도착 보장제"로 발송됩니다.\n\n출고 전 농장주가 직접 수형 사진과 열매 상태를 고객님 휴대폰 문자로 전송해 드리며, 리본 인쇄 문구 서비스도 무상 지원해 드립니다.'
  },
  {
    id: 'notice-3',
    title: '아파트 실내 애플망고 꽃눈 인공수정 및 봄철 물주기 꿀팁',
    category: '재배팁',
    date: '2026.02.25',
    views: 1560,
    summary: '꽃이 피었을 때 붓이나 면봉으로 톡톡! 초보자도 100% 성공하는 망고 착과 노하우를 공개합니다.',
    content: '실내에서 애플망고 꽃이 피었을 때 자연 바람이나 곤충이 부족하므로 가볍게 인공수정을 도와주셔야 합니다.\n\n1. 오전 10시~오후 2시 사이 따뜻할 때 부드러운 미술용 세필 붓이나 면봉을 준비합니다.\n2. 활짝 핀 꽃송이의 꽃가루를 살살 털듯이 문질러 암술에 묻혀줍니다.\n3. 수분이 완료되면 약 1~2주 뒤 좁쌀만 한 귀여운 초록 망고 아기 열매가 맺히기 시작합니다.'
  },
  {
    id: 'notice-4',
    title: '도서산간 및 제주 산지직송 배송비 정책 및 안심 보장제 공지',
    category: '배송공지',
    date: '2026.02.05',
    views: 670,
    summary: '택배 배송 중 파손 시 100% 무료 맞교환 원칙 및 겨울철 안심 보온 포장 패키지 적용 안내.',
    content: '황금낭은 식물 배송 중 발생하는 모든 파손에 대해 수령 즉시 사진을 남겨주시면 100% 무상 맞교환을 보장합니다.\n\n식물 특성상 이동 중 스트레스를 최소화하기 위해 주말 전 목요일/금요일 일부 품목은 안전하게 월요일에 출고될 수 있습니다.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: '김*현 (경기 수원)',
    rating: 5,
    date: '2026.03.15',
    productName: '황금낭 망고묘목 애플망고나무 화분 3년생 어윈',
    title: '베란다에서 진짜 꽃이 피고 열매가 맺혔어요!',
    content: '화분이 너무 크지 않고 수형이 예술입니다. 포장 박스를 여는 순간 흙 한 톨 안 쏟아지고 튼튼하게 서있어서 감동했어요. 카페에 올라온 인공수정 영상 보고 면봉으로 붓터치해줬더니 작은 망고들이 옹기종기 맺히고 있네요. 아이들도 매일 아침 물주며 너무 좋아합니다.',
    badge: '한달사용 포토후기',
    imageUrl: 'https://shop-phinf.pstatic.net/20260226_189/17720731093929BY2L_JPEG/56445526523596493_648794043.jpg',
    tag: '가정용 반려식물'
  },
  {
    id: '2',
    author: '박*준 (서울 서초)',
    rating: 5,
    date: '2026.03.11',
    productName: '황금낭 귤묘목 8년이상 감귤나무 화분 특상품',
    title: '병원 개업 축하 화분으로 보냈는데 원장님이 대만족하십니다.',
    content: '늘 뻔한 금전수나 난초 대신 부와 복을 부른다는 8년생 제주 감귤나무를 주문했습니다. 병원 로비에 두었는데 주황색 귤이 주렁주렁 매달려 있어 환자분들과 방문객들의 포토존이 되었습니다. 경동택배로 다음날 칼같이 안전 배송되었네요. 강력 추천합니다.',
    badge: '선물 구매만족',
    imageUrl: 'https://shop-phinf.pstatic.net/20210610_2/1623289973329SIGcx_JPEG/24425871984391629_132937672.jpg',
    tag: '개업·승진 축하선물'
  },
  {
    id: '3',
    author: '이*영 (부산 해운대)',
    rating: 5,
    date: '2026.02.28',
    productName: '황금낭 애플망고 나무 묘목 제주 접목묘 2년생',
    title: '초보 식집사인데도 너무 싱싱하게 잘 자랍니다.',
    content: '제주도에서 오는 거라 배송 걱정을 많이 했는데 기우였습니다. 나무 기둥이 흔들리지 않게 완벽하게 고정되어 왔고 잎사귀 하나 상하지 않았어요. 물주기 설명서도 친절하고 네이버 카페에서 실시간으로 질문하면 농장주님이 바로 답변 주셔서 든든합니다.',
    badge: '재구매 고객',
    imageUrl: 'https://shop-phinf.pstatic.net/20260226_283/1772072516086qJASk_JPEG/26648641196468682_1964337145.jpg',
    tag: '초보 식집사 강력추천'
  },
  {
    id: '4',
    author: '정*훈 (대구 수성)',
    rating: 5,
    date: '2026.02.19',
    productName: '황금낭 제주 프리미엄 애플망고 2kg 선물세트',
    title: '백화점 망고보다 훨씬 달고 신선해요! 16브릭스 인정',
    content: '부모님 명절 선물로 보내드렸는데 인생 망고라는 극찬을 들었습니다. 나무에서 완전히 익혀 산지에서 직송해주셔서 과즙이 풍부하고 달콤한 향이 온 집안에 진동을 하네요. 과일 포장도 너무 고급스러워서 보내는 사람 어깨가 으쓱했습니다.',
    badge: 'VIP 선물세트',
    imageUrl: 'https://shop-phinf.pstatic.net/20250722_48/1753146645316fAiP7_JPEG/87279505386629688_1365127477.jpg',
    tag: '고당도 완숙 생과'
  }
];

export const PACKAGING_STEPS = [
  {
    step: '01',
    title: '화분 수분 보존 & 흙 유실 방지 래핑',
    desc: '화분 상단에 통기성 천연 덮개와 방수 필름을 이중 밀봉하여 이동 중 흙이 쏟아지거나 수분이 마르지 않습니다.'
  },
  {
    step: '02',
    title: '줄기 및 가지 고정 하드 스트랩',
    desc: '묘목의 주간(기둥)과 연약한 새순이 부러지지 않도록 전용 지주대와 완충 스트랩으로 견고하게 결속합니다.'
  },
  {
    step: '03',
    title: '식물 전용 초대형 고강도 에어쿠션 박스',
    desc: '외부 충격과 온도 변화(겨울철 보온, 여름철 통풍)를 차단하는 2중 골판지 특수 박스로 안전하게 포장합니다.'
  },
  {
    step: '04',
    title: '전문 화물/우체국 신선 익일 직송',
    desc: '대형 화분은 경동택배 화물 특송, 생과는 우체국 당일/익일 특송으로 흔들림 없이 고객님 문 앞까지 배송합니다.'
  }
];

export interface CafePost {
  id: string;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  category: string;
  imageUrl: string;
  url: string;
  summary: string;
}

export const CAFE_COMMUNITY_POSTS: CafePost[] = [
  {
    id: 'cafe-1',
    title: '어제 안전하게 도착한 애플망고나무 화분 언박싱 후기!',
    author: 'breezeminho',
    date: '2025.08.06',
    views: 83,
    comments: 4,
    category: '집에서 키우는 나무 자랑',
    imageUrl: 'https://shop-phinf.pstatic.net/20260226_189/17720731093929BY2L_JPEG/56445526523596493_648794043.jpg',
    url: 'https://cafe.naver.com/goldennang',
    summary: '가지 하나 다친 곳 없이 푸릇푸릇한 잎을 달고 도착했습니다. 박스 포장 상태 대만족입니다!'
  },
  {
    id: 'cafe-2',
    title: '베란다에서 노랗게 익어가는 금귤(낑깡) 열매 수확기',
    author: '금규리',
    date: '2024.11.29',
    views: 166,
    comments: 9,
    category: '집에서 키우는 나무 자랑',
    imageUrl: 'https://shop-phinf.pstatic.net/20231104_155/1699074153491vBfm8_JPEG/%C8%B2%B1%DD%B3%B6_%B9%E8%B3%CA-001.jpg',
    url: 'https://cafe.naver.com/goldennang',
    summary: '꽃 필 때 향기도 너무 좋았는데 이제 열매가 주황빛으로 익어서 아이들과 수확했어요.'
  },
  {
    id: 'cafe-3',
    title: '레드향 레몬 화분 열매 착과 성공! 향기가 예술입니다',
    author: 'syou60611',
    date: '2024.11.11',
    views: 130,
    comments: 6,
    category: '집에서 키우는 나무 자랑',
    imageUrl: 'https://shop-phinf.pstatic.net/20200120_280/1579507828810d9jVf_JPEG/16867663354128618_2066657604.jpg',
    url: 'https://cafe.naver.com/goldennang',
    summary: '탐스러운 노란 레몬이 주렁주렁 열려 베란다 카페 분위기가 제대로 납니다.'
  },
  {
    id: 'cafe-4',
    title: '황금낭 애플망고 10주 온실 식재 완료했습니다',
    author: 'J papa',
    date: '2024.04.22',
    views: 270,
    comments: 6,
    category: '황금낭을 키우는 분들',
    imageUrl: 'https://shop-phinf.pstatic.net/20260330_266/1774837528163N4rNx_JPEG/108970348217738752_1080092671.jpg',
    url: 'https://cafe.naver.com/goldennang',
    summary: '농장 대표님 조언대로 간격 맞춰 식재했습니다. 수형이 워낙 튼튼해서 활착이 아주 빠르네요.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'delivery',
    question: '제주도에서 육지로 배송되는데, 나무나 화분이 손상되지 않나요?',
    answer: '황금낭은 7년 동안 수만 건의 식물 택배 노하우를 바탕으로 자체 개발한 "3중 특수 완충 포장"을 적용합니다. 화분 하단을 완전히 고정하고 공기층 에어캡과 고강도 박스를 사용하여 택배 상자가 뒤집혀도 흙이나 가지가 손상되지 않도록 완벽히 보호되어 배송됩니다.'
  },
  {
    category: 'growing',
    question: '애플망고나무와 감귤나무 비료는 언제, 어떻게 주는 것이 좋을까요?',
    answer: '새순이 돋아나고 꽃눈이 맺히는 봄철(3월~5월)과 열매가 커지는 초여름(6월~7월)에 완효성 알비료나 유기질 비료를 화분 둘레에 소량 올려주시는 것이 가장 좋습니다. 단, 한여름 폭염기나 겨울철 휴면기에는 비료를 주지 않고 물 관리만 해주시는 것이 뿌리 건강에 안전합니다.'
  },
  {
    category: 'growing',
    question: '아파트 실내 거실이나 베란다에서도 정말 열매가 열리나요?',
    answer: '네, 가능합니다! 황금낭 묘목은 일반 야외용 과수가 아니라 실내/베란다 화분 재배에 최적화되도록 왜성 대목에 우수 품종을 접목한 특수 묘목입니다. 하루 4시간 이상의 햇빛과 환기, 그리고 봄철 꽃이 피었을 때 붓이나 면봉으로 살짝 문질러주는 인공수정만 해주시면 가정에서도 충분히 열매를 맺습니다.'
  },
  {
    category: 'order',
    question: '직거래 주문 시 입금 계좌는 어디로 확인하나요?',
    answer: '황금낭은 고객님의 안전한 금융 거래와 정품 보증을 위해 오직 공식 법인통장("농업회사법인 주식회사 황금낭")으로만 결제를 받으며, 무통장 입금 시 현금영수증 및 전자계산서가 즉시 자동 발행됩니다. 개인 명의 계좌로는 일체 입금을 유도하지 않으므로 안심하고 직거래 주문을 이용하실 수 있습니다.'
  },
  {
    category: 'order',
    question: '인터넷 주문이 어렵거나 단체 주문 시 전화로 직접 주문/예약이 가능한가요?',
    answer: '네, 언제든지 가능합니다! 웹사이트 상단의 [전화예약] 버튼을 누르시거나 대표번호(064-711-8578)로 전화 주시면 농장주 및 전문 상담원이 원하시는 품종 선택, 배송 일정 조율, 계좌이체 및 카드결제 안내를 친절하게 도와드립니다.'
  },
  {
    category: 'growing',
    question: '겨울철에 구매해도 나무가 얼어 죽지 않을까요?',
    answer: '동절기(12월~2월)에는 한파 피해를 방지하기 위해 보온 보냉 단열재와 핫팩 패키징을 무상 적용하여 안전한 기온 조건에서만 출고합니다. 수령 후에는 영상 10℃ 이상의 실내 창가에 두시면 건강하게 겨울을 납니다.'
  },
  {
    category: 'b2b',
    question: '기업 명절 선물세트나 카페/호텔 조경용 대량 구매 견적과 세금계산서 발행이 되나요?',
    answer: '황금낭은 정식 등록된 농업회사법인 주식회사로서 전자계산서(면세) 및 전자세금계산서 발행이 완벽히 지원됩니다. 기업 로고 리본 맞춤 제작 및 전국 다중 배송지 분할 발송이 가능하오니 [B2B·대량문의] 메뉴를 이용해 주시기 바랍니다.'
  }
];
