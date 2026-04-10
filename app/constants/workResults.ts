export type WorkResult = {
  projectName: string;
  period: string;
  results: string[];
};

export const workResults: WorkResult[] = [
  {
    projectName: '프롬도쿄(fromtokyo)',
    period: '24.06 ~ 25.11',
    results: [
      '자사몰 키움페이 모듈 연동 및 결제 프로세스 안정화',
      '메루카리 상품 렌더링 성능 개선',
      '메루카리 상품 주문 프로세스 자동화'
    ]
  },
  {
    projectName: '제논(Xenon)',
    period: '24.06 ~ 25.11',
    results: [
      '상품 등록 프로세스 개선',
      '메인 대시보드 구현',
      '경쟁사 가격 비교 시스템 구축'
    ]
  },
  {
    projectName: '히로게테(Hirogete)',
    period: '24.09 ~ 25.11',
    results: [
      '신규 배송 서비스 API 마이그레이션',
      'Shopify 연동을 통한 플랫폼 구조 확장',
      '고객 데이터 기반 이탈 고객 식별 기능 구현'
    ]
  },
  {
    projectName: '에코 솔루션(Eco Solution)',
    period: '24.10 ~ 25.11',
    results: [
      '최근 판매량 · 재고 조회 구조 개선',
      '개별/일괄 재고 주문 기능 분리'
    ]
  },
  {
    projectName: '나르다(Narda)',
    period: '24.12 ~ 25.11',
    results: [
      '송장번호 저장 프로세스 자동화',
      '배송 정보 등록 및 라벨 출력 트랜잭션 개선'
    ]
  }
];
