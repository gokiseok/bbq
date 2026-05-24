# bbq.gokiseok.com GEO 진단 리포트
생성일: 2026-05-24

## 요약

| 영역 | 상태 | 비고 |
|---|---|---|
| 1. robots.txt | ✅ | AI 봇 11개 중 7개 명시 허용, Sitemap 라인 존재. 4개 봇은 누락이지만 `User-agent: *` 폴백으로 허용됨 |
| 2. sitemap.xml | ✅ | 8개 기대 URL 모두 포함 (+EN 6개), 전 URL `lastmod` 존재 |
| 3. JSON-LD (페이지별) | ⚠️ | Restaurant `hasMap` 전 페이지 누락, BreadcrumbList 0개, /access 중복 Restaurant |
| 4. AI 봇 접근성 | ✅ | 7개 봇 전부 HTTP 200 |
| 5. 헤딩 위계 | ✅ | 6개 페이지 모두 H1 1개씩, 위계 정상 (단 메인 H1이 "고기석" 한 단어로 약함) |

**전체 점수: 4.0 / 5.0**

### 가장 시급한 개선 (Top 3)

1. **메인 페이지 BreadcrumbList 스키마 추가** — 모든 페이지에 0개. 검색엔진 사이트링크 노출에 직접 영향.
2. **Restaurant 스키마에 `hasMap` 필드 추가** — 전 페이지 누락. 네이버맵 URL이 `sameAs`에는 있지만 `hasMap` 표준 필드가 없어 LLM이 지도 위치 인식을 놓칠 수 있음.
3. **메인 페이지 H1 강화** — 현재 "고기석" 단어만. 로컬 작업 중인 "건대 단체회식 가능한 고기집 / 고기석 / 건대본점 · 통갈매기살 전문점" 배포 시 해결.

---

## 1. robots.txt

**원본 일부**
```
User-agent: *
Allow: /
…
Sitemap: https://bbq.gokiseok.com/sitemap.xml
```

| 봇 (요청 사항) | 명시 Allow | 비고 |
|---|---|---|
| GPTBot | ✅ | |
| OAI-SearchBot | ✅ | |
| ChatGPT-User | ✅ | |
| ClaudeBot | ✅ | |
| Claude-SearchBot | ⚠️ | 명시 없음 — `*` 폴백으로 허용 |
| Claude-User | ⚠️ | 명시 없음 — `*` 폴백으로 허용 |
| PerplexityBot | ✅ | |
| Perplexity-User | ⚠️ | 명시 없음 — `*` 폴백으로 허용 |
| Google-Extended | ✅ | |
| Applebot-Extended | ✅ | |
| Bytespider | ⚠️ | 명시 없음 — `*` 폴백으로 허용 |
| Sitemap 선언 | ✅ | `https://bbq.gokiseok.com/sitemap.xml` |

**평가**: `User-agent: *` + `Allow: /` 로 모든 봇이 허용되므로 기능적으로는 문제 없음. 다만 GEO 모범 사례는 **명시적 화이트리스트**가 권장됨. 미명시 봇은 정책 변경 시 영향받을 수 있어 명시 추가 권장.

---

## 2. sitemap.xml

총 **14개 URL** 포함, 한국어 8개 + 영어 6개. 전 URL에 `lastmod`, `changefreq`, `priority` 메타 존재.

| 기대 URL | 포함 | lastmod |
|---|---|---|
| `/` | ✅ | 2026-05-15T12:44:24.397Z |
| `/menu` | ✅ | 2026-05-15T12:44:24.397Z |
| `/group-dining` | ✅ | 2026-05-15T12:44:24.397Z |
| `/rooms` | ✅ | 2026-05-15T12:44:24.397Z |
| `/access` | ✅ | 2026-05-15T12:44:24.397Z |
| `/faq` | ✅ | 2026-05-15T12:44:24.397Z |
| `/reservation` | ✅ | 2026-05-15T12:44:24.397Z |
| `/en` | ✅ | 2026-05-15T12:44:24.397Z |
| `/en/group-dining`, `/en/menu`, `/en/rooms`, `/en/reservation`, `/en/access`, `/en/faq` | ✅ | 동일 |

**평가**: ✅ 완벽. 다만 `lastmod`이 전 URL 동일 시각인 점은 **빌드 시점 일괄 갱신**임을 시사. 검색엔진은 각 페이지의 실제 변경일을 추적하지 못하므로 콘텐츠 갱신 시그널이 약함. 페이지별 실제 수정일 반영 시 크롤 우선순위 향상 가능.

---

## 3. JSON-LD (페이지별)

### 페이지별 Schema 현황

| 페이지 | 기대 Schema | 실제 Schema | 상태 |
|---|---|---|---|
| `/` | Restaurant + BreadcrumbList | Restaurant + FAQPage | ⚠️ BreadcrumbList 누락 |
| `/menu` | Menu 또는 Restaurant | Restaurant + FAQPage + **Menu** | ✅ |
| `/group-dining` | FAQPage | Restaurant + FAQPage + **Service** + **FAQPage** (페이지 전용) | ✅ |
| `/rooms` | (지정 없음) | Restaurant + FAQPage + **Place × 3** | ✅ 룸별 Place 우수 |
| `/access` | Restaurant + Place | Restaurant + FAQPage + **Restaurant** (중복) | ⚠️ Place 없음, Restaurant 중복 |
| `/faq` | FAQPage | Restaurant + FAQPage + **FAQPage** (페이지 전용) | ✅ |

### Restaurant Schema 필드 점검 (메인 블록, 전 페이지 공통)

| 필드 | 존재 |
|---|---|
| `name` | ✅ "고기석 건대본점" |
| `address` (PostalAddress) | ✅ |
| `geo` (GeoCoordinates) | ✅ 37.54126, 127.070687 |
| `telephone` | ✅ +82-507-1433-0614 |
| `openingHours` / `openingHoursSpecification` | ✅ |
| `priceRange` | ✅ "₩₩" |
| `acceptsReservations` | ✅ "True" |
| `servesCuisine` | ✅ Korean BBQ, 한식, 고기구이 |
| `hasMap` | ❌ **전 페이지 누락** |
| `sameAs` | ✅ 네이버맵 + 인스타그램 |

**평가**:
- ⚠️ **BreadcrumbList 부재**: 모든 페이지에서 검색 결과 사이트링크가 약하게 나올 가능성.
- ⚠️ **`hasMap` 누락**: 네이버맵 링크는 `sameAs`에만 있고 표준 `hasMap` 필드가 없어 일부 크롤러는 지도 연결을 인식 못함.
- ⚠️ **/access의 Restaurant 중복**: 글로벌 Restaurant (`layout.tsx`)이 들어간 상태에서 페이지 추가 Restaurant 블록까지 들어가 중복. 동일 엔티티가 두 번 정의되면 검색엔진 혼란 가능. 차라리 `Place` 또는 `LocalBusiness` 서브타입을 쓰거나 페이지 전용 블록을 제거하는 게 권장.
- ✅ /rooms의 Place × 3 (룸별)은 매우 우수한 GEO 전략.

---

## 4. AI 봇 접근 가능성

| 봇 User-Agent | HTTP 코드 | 상태 |
|---|---|---|
| `GPTBot/1.0` | 200 | ✅ |
| `ClaudeBot` | 200 | ✅ |
| `PerplexityBot` | 200 | ✅ |
| `OAI-SearchBot` | 200 | ✅ |
| `Claude-SearchBot` | 200 | ✅ |
| `Claude-User` | 200 | ✅ |
| `ChatGPT-User` | 200 | ✅ |

**평가**: ✅ 완벽. Cloudflare Pages 호스팅 + 명시적 차단 없음으로 전 AI 봇이 정상 접근. 차단 룰이 추가될 위험만 모니터링.

---

## 5. 헤딩 위계

| 페이지 | H1 개수 | H1 내용 | H2 개수 | H3 개수 | 위계 |
|---|---|---|---|---|---|
| `/` | 1 | **고기석** | 7 | 13 | ✅ 정상 (단 H1이 단어 1개로 약함) |
| `/menu` | 1 | 고기석 건대본점 전체 메뉴 | 5 | 0 | ✅ |
| `/group-dining` | 1 | 건대 회식 장소 — 고기석 건대본점 단체룸 | 7 | 6 | ✅ |
| `/rooms` | 1 | 건대 단체룸 — 10·14·32인 룸과 2층 단독 대관 | 4 | 0 | ✅ |
| `/access` | 1 | 오시는 길 — 건대입구역 2번 출구 도보 1분 | 1 | 0 | ✅ (H2 1개로 얇음) |
| `/faq` | 1 | 자주 묻는 질문 | 9 | 0 | ✅ |

**평가**:
- ✅ H1 1개 룰 전 페이지 준수.
- ⚠️ **메인 페이지 H1이 "고기석" 한 단어**: 브랜드 디자인 우선으로 SEO/GEO 키워드가 빠짐. 로컬 작업본의 다단 H1 (`건대 단체회식 가능한 고기집 / 고기석 / 건대본점 · 통갈매기살 전문점`) 배포 시 해결.
- ⚠️ /access H2 1개: 콘텐츠가 얇음. "주차", "주변 지하철 출구별 동선", "버스 정류장" 등 H2 추가 시 로컬 검색 강화.

---

## 권장 액션 (우선순위 순)

### P0 (즉시)

1. **메인 페이지 H1 배포** — 로컬에 이미 수정됨 ([components/Hero.tsx](components/Hero.tsx)). 빌드 → push 로 즉시 반영 가능. 영문판도 동일.
2. **BreadcrumbList Schema 추가** — [app/layout.tsx](app/layout.tsx)의 글로벌 schema에 추가하거나 각 페이지에서 별도 선언.
   ```json
   { "@context":"https://schema.org", "@type":"BreadcrumbList",
     "itemListElement":[
       {"@type":"ListItem","position":1,"name":"홈","item":"https://bbq.gokiseok.com/"},
       {"@type":"ListItem","position":2,"name":"메뉴","item":"https://bbq.gokiseok.com/menu"}
     ] }
   ```

### P1 (단기)

3. **Restaurant Schema에 `hasMap` 추가** — `"hasMap":"https://map.naver.com/p/search/고기석%20건대본점"` 한 줄로 끝. 글로벌 schema 한 곳만 고치면 6 페이지 전체 적용.
4. **/access 페이지 Restaurant 중복 제거** — 페이지 전용 블록을 `Place` 또는 `LocalBusiness`로 변경하거나 제거. 글로벌 Restaurant만 남겨야 엔티티 단일성 유지.
5. **robots.txt에 누락 봇 명시 추가** — `Claude-SearchBot`, `Claude-User`, `Perplexity-User`, `Bytespider` 4개. 향후 `*` 정책 변경 시 보호.

### P2 (중기)

6. **/access 콘텐츠 확장** — H2 1개는 빈약. 주차/지하철 출구별 동선/버스 노선 H2 추가로 로컬 검색 키워드 흡수.
7. **sitemap lastmod 페이지별 실제 수정일 반영** — 현재 빌드 시점 일괄. Next.js sitemap 생성기에서 페이지별 파일 mtime 또는 git 마지막 커밋일 사용.
8. **/menu에 ItemList 또는 Recipe 추가 고려** — Menu schema는 있으나 개별 메뉴를 ItemList로 노출하면 구글 리치 결과 노출 확률 증가.

---

## 부록: 데이터 출처

- robots.txt: `curl -s https://bbq.gokiseok.com/robots.txt` (2026-05-24)
- sitemap.xml: `curl -s https://bbq.gokiseok.com/sitemap.xml` (2026-05-24)
- 6개 페이지 HTML: 동일 시각 fetch
- AI 봇 응답: `curl -A "<UA>" -o /dev/null -w "%{http_code}"` (2026-05-24)
