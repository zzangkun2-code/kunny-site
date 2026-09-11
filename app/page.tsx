import Link from "next/link";
import Image from "next/image";

const career = [
  "초등교사",
  "자카르타 한국국제학교 근무('18~'21)",
  "APEC 국제교육협력원(IACE) ALCoB 교사",
  "전북 국제교류수업 교사연구회('24, '25 회장)",
];

const books = [
  {
    title: "한 권으로 끝내는 국제교류수업",
    cover: "/book1-cover.png",
    desc: "국제교류수업을 처음 시작하거나, 1년 나기 과정을 간접체험하고 싶은 교사들을 위한 교사 가이드북.",
    publisher: "미다스북스",
    link: "https://www.yes24.com/product/goods/125890656",
  },
  {
    title: "안녕하세요, 선생님! 다시 돌아왔어요",
    cover: "/book2-cover.png",
    desc: "유네스코 아태교육원의 교사교류사업으로 시작된 인연이 교실교류까지 이어지는 과정을, 한국·인도네시아 교사 각자의 시각에서 담은 에세이.",
    publisher: "미다스북스",
    link: "https://www.yes24.com/product/goods/151371931",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <span className="font-mono text-sm tracking-tight text-ink-soft">kunny.dev</span>
        <nav className="flex gap-6 font-mono text-sm text-ink-soft">
          <a href="#projects" className="hover:text-ink transition-colors">
            프로젝트
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            소개
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <p className="font-mono text-sm text-ember mb-6">Kunny</p>
        <h1 className="font-serif text-4xl sm:text-5xl leading-[1.2] font-semibold text-ink max-w-2xl">
          낮에는 교실에서 국제교류수업을 만들고,
          <br />
          <span className="italic text-indigo">밤에는 그 경험을 코드로</span> 옮깁니다.
        </h1>
        <p className="mt-8 text-lg text-ink-soft max-w-xl leading-relaxed">
          초등학교에서 국제교류수업을 기획하고 운영해온 교사입니다. 교실에서 본 것들을
          기록하는 대신, 최근에는 게임과 앱으로 직접 만들어보고 있습니다.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 pb-24">
        <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
          만들고 있는 것들
        </p>

        {/* Worldmate — calm, editorial card */}
        <Link
          href="/worldmate"
          className="group block border border-line rounded-sm bg-white/40 hover:bg-white/70 transition-colors p-8 sm:p-10"
        >
          <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
            <div>
              <p className="font-mono text-xs text-indigo mb-3">GAME · 개발 중</p>
              <h2 className="text-2xl font-medium text-ink mb-3">월드메이트</h2>
              <p className="text-ink-soft leading-relaxed max-w-md">
                국제교류수업 동아리에 들어간 중학생의 1년을 그리는 시뮬레이션 게임.
                제가 직접 기획하고 진행했던 국제교류 활동들이 이야기의 뼈대가
                됩니다.
              </p>
            </div>
            <span className="font-mono text-sm text-indigo shrink-0 group-hover:translate-x-1 transition-transform">
              자세히 보기
            </span>
          </div>
        </Link>

        {/* SpiderFriend — smaller, playful card */}
        <Link
          href="/spiderfriend"
          className="group block mt-4 border border-dashed border-line rounded-sm hover:bg-paper-dim/60 transition-colors p-6"
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🕸️</span>
              <div>
                <p className="font-mono text-xs text-ember mb-1">TOY APP · 배포 중</p>
                <h2 className="text-lg font-medium text-ink">거미인간</h2>
                <p className="text-sm text-ink-soft mt-1">
                  바탕화면을 돌아다니는 작은 방치형 캐릭터
                </p>
              </div>
            </div>
            <span className="font-mono text-sm text-ember shrink-0 group-hover:translate-x-1 transition-transform">
              다운로드
            </span>
          </div>
        </Link>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border-t border-line pt-10">
          <p className="font-mono text-xs tracking-wide text-ink-soft mb-8">소개</p>

          {/* Profile block */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 w-28 h-28 rounded-full overflow-hidden border-2 border-line bg-white/60">
              <Image
                src="/profile.png"
                alt="세계짓는 쿤쌤 프로필"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ink mb-1">
                세계짓는 쿤쌤
              </h3>
              <p className="text-sm text-ink-soft mb-4">국제교류수업 교사 · 1인 개발자</p>
              <ul className="text-ink-soft text-sm leading-loose">
                {career.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-ink-soft">
                강의 문의 ·{" "}
                <a
                  href="mailto:lck0202@naver.com"
                  className="text-indigo underline underline-offset-4 hover:text-ember transition-colors"
                >
                  lck0202@naver.com
                </a>
              </p>
            </div>
          </div>

          {/* Books */}
          <div className="mt-14">
            <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
              집필 도서
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {books.map((b) => (
                <a
                  key={b.title}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 border border-line rounded-sm p-4 bg-white/40 hover:bg-white/70 transition-colors"
                >
                  <div className="shrink-0 w-20 sm:w-24 aspect-[3/4] relative rounded-sm overflow-hidden border border-line shadow-sm">
                    <Image
                      src={b.cover}
                      alt={`${b.title} 표지`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-ink leading-snug">{b.title}</h4>
                    <p className="text-xs text-ink-soft mt-1">{b.publisher}</p>
                    <p className="text-sm text-ink-soft mt-2 leading-relaxed line-clamp-4">
                      {b.desc}
                    </p>
                    <span className="mt-auto pt-3 font-mono text-xs text-ember group-hover:translate-x-1 transition-transform inline-block">
                      yes24에서 보기 →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Maker note */}
          <div className="mt-14 pt-10 border-t border-line">
            <h3 className="font-medium text-ink mb-2">만드는 사람</h3>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xl">
              코딩을 전공하지 않았지만, 교실에서 쌓아온 이야기를 직접 형태로
              만들어보고 싶어서 개발을 시작했습니다. 지금은 게임과 작은 앱을
              만들며 배우는 중입니다.
            </p>
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 pb-10">
        <div className="border-t border-line pt-6 flex items-center justify-between font-mono text-xs text-ink-soft">
          <span>© Kunny</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ink transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Threads
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
