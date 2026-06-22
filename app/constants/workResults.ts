export type WorkResult = {
  projectName: string;
  period: string;
  link?: string;
  results: string[];
};

export const workResults: WorkResult[] = [
  {
    projectName: '엔아이시스템 | 프롬도쿄(fromtokyo)',
    period: '2024.06 ~ 2025.11',
    results: [
      '결제 상태 기반 복원 로직으로 이탈 문제 개선',
      '상품 조회 병렬화로 초기 로딩 17s에서 2s 개선',
      'Mercari API 기반 자동 주문 흐름 구현',
      '금칙어 필터를 공통 유틸로 분리 적용',
      'GPT API로 일본어 상품명 번역 기능 구현'
    ]
  },
  {
    projectName: '엔아이시스템 | 제논(Xenon)',
    period: '2024.06 ~ 2025.11',
    results: [
      '대량 등록과 스크래핑 자동화로 등록 개선',
      '100건 기준 평균 80건 자동 등록 지원',
      '가격 비교와 변경 이력 조회 기능 통합',
      '운영 이슈 모니터링 대시보드 구축',
      '쇼핑몰 관리자 기능 구현 및 유지보수'
    ]
  },
  {
    projectName: '엔아이시스템 | 히로게테(Hirogete)',
    period: '2024.09 ~ 2025.11',
    results: [
      'FedEx, DHL API 기반 배송 접수 전환',
      '운송사별 설정 UI와 사전 검증 로직 구축',
      'Zebra Browser Print로 라벨 출력 간소화',
      'Shopify 주문 수집과 송장 전송 구현',
      '비개발 요구사항을 기능 흐름으로 구체화'
    ]
  },
  {
    projectName: '팀 프로젝트 | 치킨스톡(Chicken Stock)',
    period: '2026.03 ~ 진행 중',
    link: 'https://chicken-stock-app.vercel.app/',
    results: [
      '투자 에이전트 기반 자동 매매 구조 구현',
      '차트와 재무 데이터를 종목 상세에 통합',
      '퀴즈와 진행률을 연결한 학습 플로우 구현',
      '동적 로딩과 캐싱으로 초기 렌더링 개선',
      'SEO 메타데이터와 구조화 데이터 적용',
      'Figma 기반 디자인 토큰과 UI 설계'
    ]
  },
  {
    projectName: '개인 프로젝트 | 도그점프(Dog Jump)',
    period: '2025.10 ~ 진행 중',
    link: 'https://run-jump-dog.vercel.app/',
    results: [
      'Canvas 게임 루프와 충돌 판정 구현',
      '터치·마우스 입력 확장으로 모바일 대응'
    ]
  }
];
