import Link from "next/link";

const abilities = [
  { name: "언어소통", desc: "실시간 화상수업, 발표 속에서 자라는 능력" },
  { name: "관계공감", desc: "말이 통하지 않아도 서로를 이해하는 법" },
  { name: "문화이해", desc: "다른 삶의 방식을 존중으로 바꾸는 시선" },
];

const timeline = [
  { tag: "1월", title: "동아리 가입", desc: "복도에서 우연히 만난 선생님과의 대화" },
  { tag: "여름", title: "PEACE 국제교류 행사", desc: "발표, 문화공연, 스포츠데이로 이어지는 특별일정" },
  { tag: "겨울", title: "화상 교류수업", desc: "인도네시아·일본·미국 등 10개국 친구들과" },
  { tag: "졸업", title: "나의 미래", desc: "1년의 선택이 만든, 나만의 엔딩" },
];

export default function WorldmatePage() {
  return (
    <main className="flex-1">
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-4">
        <Link href="/" className="font-mono text-sm text-ink-soft hover:text-ink transition-colors">
          ← kunny.dev
        </Link>
      </header>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        <p className="font-mono text-xs text-indigo mb-4">GAME · 개발 중 · 베타 테스트 예정</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ink leading-[1.2]">
          월드메이트
        </h1>
        <p className="mt-3 text-lg text-ink-soft italic">세계와 만난 열두 달</p>
        <p className="mt-8 text-lg text-ink leading-relaxed max-w-xl">
          중학교 1학년, 국제교류 동아리에 들어간 한 학생의 1년. 실제로 제가
          기획하고 진행했던 국제교류수업 경험을 바탕으로 만들고 있는
          시뮬레이션 게임입니다.
        </p>
      </section>

      {/* Abilities */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
          여섯 가지 능력치 중
        </p>
        <div className="grid sm:grid-cols-3 gap-px bg-line border border-line">
          {abilities.map((a) => (
            <div key={a.name} className="bg-paper p-6">
              <h3 className="font-medium text-indigo mb-2">{a.name}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
          1년의 흐름
        </p>
        <div className="border-l border-line ml-1">
          {timeline.map((t) => (
            <div key={t.title} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-ember" />
              <p className="font-mono text-xs text-ember mb-1">{t.tag}</p>
              <h3 className="font-medium text-ink">{t.title}</h3>
              <p className="text-sm text-ink-soft mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beta CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border border-line rounded-sm p-8 sm:p-10 bg-indigo text-paper">
          <h2 className="font-serif text-2xl font-semibold mb-3">베타 테스트, 곧 열립니다</h2>
          <p className="text-paper/80 leading-relaxed max-w-md">
            아직 공개 전이지만 조만간 베타 테스트로 찾아뵐 예정입니다. 소식은
            인스타그램과 스레드에서 가장 먼저 안내해드릴게요.
          </p>
          <div className="mt-6 flex gap-4 font-mono text-sm">
            <a href="#" className="underline underline-offset-4 hover:text-ember-soft transition-colors">
              Instagram에서 팔로우
            </a>
            <a href="#" className="underline underline-offset-4 hover:text-ember-soft transition-colors">
              Threads에서 팔로우
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-3xl mx-auto px-6 pb-10">
        <div className="border-t border-line pt-6 font-mono text-xs text-ink-soft">
          © Kunny
        </div>
      </footer>
    </main>
  );
}
