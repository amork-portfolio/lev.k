# ONBOARD (온보드)

자동차·반도체 영업직 취업을 준비하며 매일 하나씩 정리하는 산업 스터디 기록.
14일 커리큘럼으로 자동차 밸류체인·수익구조·부품 수주 구조부터 반도체 8대 공정,
HBM, 파운드리 경쟁 구도까지 다룹니다.

## 배포 (GitHub Pages)

1. GitHub 저장소 Settings → Pages
2. **Source**: Deploy from a branch
3. **Branch**: `main` / `(root)`
4. 저장 후 `https://<계정명>.github.io/lev.k/` 에서 확인

## 구조

자동차 트랙과 반도체 트랙을 완전히 분리했습니다. 네이버 블로그(하루에 자동차+반도체
두 주제를 함께 다루는 포맷)와는 별개로, 이 웹사이트는 각 트랙을 독립된 경로와
아카이브로 운영합니다.

```
index.html           전체 허브 (두 트랙 소개 + 통합 발행 기록)
auto/index.html      자동차 트랙 아카이브
auto/day-01.html     자동차 Day 01 본문
semi/index.html      반도체 트랙 아카이브
semi/day-01.html     반도체 Day 01 본문
assets/style.css     디자인 토큰 + 컴포넌트 (라이트/다크 모드, 트랙별 accent 색)
assets/site.js       흐름도·툴팁·모델그리드 등 공용 스크립트
```

새 Day를 추가할 때: 해당 트랙 폴더(`auto/` 또는 `semi/`)에 `day-0N.html`을 만들고,
그 트랙의 `index.html` 아카이브 카드·`daytabs`, 그리고 루트 `index.html`의
통합 발행 기록을 갱신합니다.

## 디자인

현대차그룹 저널, SK하이닉스 뉴스룸의 화면 구조(다크 헤더 + 풀블리드 헤드라인)를
리서치해 "다크 테크 에디토리얼" 무드로 재해석했습니다. 자동차 트랙은 파랑,
반도체 트랙은 보라 — `body[data-track]` 속성으로 트랙별 accent 색이 자동
적용됩니다.
</content>
