# Claude Code 작업 프롬프트 — bbq.gokiseok.com GEO/AEO 수정

> 이 프롬프트는 클로드코드(또는 Claude Agent SDK)에 그대로 붙여넣어 실행하는 용도다.
> 대상 도메인: **https://bbq.gokiseok.com** (Next.js, `out/` 정적 export, Cloudflare Pages 배포 추정)
> 작업 폴더: **이 파일이 있는 디렉토리(= homepage 프로젝트 루트)**

---

## 0. 컨텍스트

방금 외부에서 GEO/AEO 검증을 돌렸다(244 HTTP 요청, 14 UA × 6 path). 결과 요약:

- 13 AI 봇(GPTBot, ClaudeBot, PerplexityBot, Googlebot, ChatGPT-User, OAI-SearchBot, Claude-User, anthropic-ai, Google-Extended, Bingbot, Yeti, CCBot, Applebot-Extended) 모두 `/`, `/robots.txt`, `/llms.txt`로 200 OK. 차단 없음.
- robots.txt에 `Sitemap: https://bbq.gokiseok.com/sitemap.xml` 라인이 있는데 **실제로 그 파일은 404**(sitemap-index.xml도 404).
- `/llms-full.txt`는 404. `/llms.txt`만 존재(927B).
- 루트 페이지 description 74자(목표 80~200자 미달), h1이 `'고 기 석'`(글자별 공백, 시각용)로 의미 검색에 약함.
- Restaurant JSON-LD 자체는 모든 필수 필드(name/address/telephone/openingHoursSpecification/geo/priceRange/image/url) 다 박혀 있음 ✅.
- robots.txt에 명시된 봇이 4/13(GPTBot, ClaudeBot, Google-Extended, PerplexityBot뿐, 와일드카드로는 모두 허용됨).

## 1. 너의 임무

루트 폴더(`./`)를 사이트 소스로 보고, 아래 항목을 **읽기→파일 수정→로컬 빌드 확인** 순서로 진행한다.
**사이트 콘텐츠/문구의 의미 자체는 바꾸지 말고**, 누락된 메타데이터와 파일만 추가/수정한다.

---

## 2. 작업 항목 (P0 → P1 → P2 순)

### P0-1. sitemap.xml 생성

상황: robots.txt가 `/sitemap.xml`을 가리키는데 파일이 없다. Next.js `app/` 라우터 기반이므로 두 가지 중 하나를 골라서 적용:

**옵션 A (권장)**: `app/sitemap.ts` 추가
```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bbq.gokiseok.com";
  const now = new Date();
  return [
    { url: `${base}/`,    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/en`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // 라우트가 더 있다면 app/ 트리를 읽어서 추가
  ];
}
```
- `app/` 트리를 직접 스캔해서 `page.tsx`가 있는 모든 라우트를 enumerate해 자동 채워라.
- `next.config.mjs`에 `output: 'export'`가 설정돼 있다면 빌드 시 `out/sitemap.xml`이 자동 생성된다 (Next 14+).

**옵션 B**: `public/sitemap.xml`에 정적 XML 직접 작성 (라우트가 거의 안 늘어난다면).

→ 옵션 A 먼저 시도. 빌드 후 `out/sitemap.xml` 존재 확인.

### P0-2. robots.txt와 sitemap 경로 정합성

`public/robots.txt`를 읽고, `Sitemap:` 디렉티브가 실제로 빌드 결과에 존재하는 파일을 가리키는지 확인. 현재 `https://bbq.gokiseok.com/sitemap.xml`이 404이므로 P0-1로 sitemap을 만든 뒤 그대로 두면 됨.

### P0-3. /llms-full.txt 추가

`public/llms.txt`(현재 927B, 한줄소개·NAP 포함)와 같은 톤으로, 본문을 더 풍성하게 담은 `public/llms-full.txt`를 작성한다. 포함할 것:
- `# 고기석 건대본점`
- `> 한줄소개` (현재 llms.txt의 문장 그대로)
- 가게 정보 평문 (이름, 주소 `서울 광진구 동일로22길 117-13`, 전화 `0507-1433-0614`, 영업시간 `17:30~21:30`, 가격대 `통갈매기살 100g 7,000원`, 단체룸 정보)
- 메뉴 섹션 (이름·가격·용량 평문)
- FAQ 섹션 (질문·답변 평문 5~10개) — `app/`의 FAQPage JSON-LD에서 그대로 가져와 평문화
- 위치/교통 (건대입구역 도보 ~분, 주차)
- 끝에 캐노니컬 URL `https://bbq.gokiseok.com/`

전체 3~5KB 목표. 마크다운 헤더 위계 유지.

---

### P1-1. 루트 description 80~200자로 늘리기

현재 74자. `app/layout.tsx`의 `metadata.description`(또는 `app/page.tsx`)을 찾아서 다음 정보가 들어가도록 100~150자로 보강:
- 위치 시그널: "건대입구역 도보 5분"
- 시그니처 메뉴: "통갈매기살 100g 7,000원"
- 단체룸 인원 옵션: "10·14·32인 단체룸"
- 용도: "회식·청첩장·단체모임"
- 운영시간 한 줄

**변경 시 OG description, twitter:description도 같이 맞춰라.**

### P1-2. h1 수정 권고 검토

`app/page.tsx`의 h1 `'고 기 석'`은 시각 디자인용 워드마크로 보인다. 의미 검색·접근성 관점에서 문제. 수정안:
```tsx
<h1 className="visually-hidden-or-styled">고기석 건대본점 — 통갈매기살 전문 (건대입구역 도보 5분)</h1>
{/* 시각적 워드마크는 별도 div + aria-hidden */}
<div aria-hidden className="wordmark">고 기 석</div>
```
사용자가 디자인 의도를 유지하고 싶어하면 워드마크를 `<div aria-hidden>`로 빼고, h1은 키워드 친화 문장으로 둔다.
→ **이 변경은 시각 레이아웃 영향이 있으니 단독 PR/커밋으로 분리하고, 변경 전후 스크린샷 비교를 사용자에게 알릴 것.**

### P1-3. robots.txt에 봇 명시 Allow 확장

`public/robots.txt`를 다음 봇 명시 Allow가 모두 포함되도록 보강 (현재 4/13만 명시):
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Naverbot
Allow: /

User-agent: Yeti
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://bbq.gokiseok.com/sitemap.xml
```

---

### P2-1. sitemap에 priority/changefreq 추가
P0-1의 sitemap.ts에서 `priority`/`changeFrequency` 필드를 모든 URL에 부여 (루트 1.0, 주요 페이지 0.8, 부수 0.4).

### P2-2. og-image.jpg 메타 태그 점검
`public/og-image.jpg`는 있음. `app/layout.tsx`의 `metadata.openGraph.images`/`twitter.images`가 절대 URL(`https://bbq.gokiseok.com/og-image.jpg`)인지 확인. 상대경로면 절대 URL로.

---

## 3. 작업 순서

1. **읽기 단계**: `app/layout.tsx`, `app/page.tsx`, `app/en/layout.tsx`, `app/en/schemas.ts`, `public/robots.txt`, `public/llms.txt`, `next.config.mjs`, `package.json`을 먼저 모두 Read.
2. **변경 단계**: 위 P0/P1/P2 순서로 Edit/Write.
3. **검증 단계**:
   - `pnpm build` 또는 `npm run build` 실행 (어느 패키지매니저인지 lock 파일로 판단).
   - `out/sitemap.xml`, `out/robots.txt`, `out/llms.txt`, `out/llms-full.txt`가 존재하는지 확인.
   - `out/index.html`을 grep해서 `<meta name="description"`이 80자 이상인지 확인.
4. **보고**: 변경한 파일 목록 + 빌드 결과 요약 + 사용자가 배포 후 즉시 확인할 URL 리스트:
   - https://bbq.gokiseok.com/sitemap.xml
   - https://bbq.gokiseok.com/llms-full.txt
   - https://bbq.gokiseok.com/robots.txt
   - 검증 재실행 명령: `python3 C:/tmp/geo-validator/validate.py`

## 4. 절대 금지

- 가게명/메뉴/가격/주소/전화 같은 NAP 정보 임의 변경 금지. 수정이 아니라 **추가**만.
- 디자인 컴포넌트 구조 깊은 리팩토링 금지. 최소 변경.
- `dangerouslyAllow*` 같은 보안 우회 옵션 추가 금지.
- 기존 JSON-LD 블록의 `@type`, `@id`, NAP 필드 임의 수정 금지 (현재 검증 통과 상태).

## 5. 변경 후 종합 판정 기대값

검증 재실행 시 다음이 모두 PASS:
- bbq dashboard 종합 판정: WARN → **PASS**
- sitemap.xml: ❌ → ✅
- llms.txt + llms-full.txt: ⚠️ → ✅
- robots.txt 명시 UA: 4/13 → 13/13
- 페이지 구조 점수: 8/10 → 9~10/10
