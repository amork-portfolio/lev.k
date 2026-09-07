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

```
index.html          발행 기록 아카이브 (필터: 전체 / 자동차 / 반도체)
days/day-01.html    Day 01 본문
assets/style.css    디자인 토큰 + 컴포넌트 (라이트/다크 모드 대응)
assets/site.js       흐름도·툴팁·아카이브 필터 등 공용 스크립트
```

새 Day를 추가할 때: `days/day-0N.html`을 만들고, `index.html`의 아카이브 카드와
상단 `daytabs`를 갱신합니다.

## 디자인

현대차그룹 저널, SK하이닉스 뉴스룸의 화면 구조(다크 헤더 + 풀블리드 헤드라인)를
리서치해 "다크 테크 에디토리얼" 무드로 재해석했습니다. 자동차 파트는 파랑,
반도체 파트는 보라 — 콘텐츠가 늘어나도 일관되게 구분되는 2트랙 색 체계입니다.
