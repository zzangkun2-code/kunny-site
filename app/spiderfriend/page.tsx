import Link from "next/link";

const steps = [
  {
    title: "설치 파일 실행",
    desc: "압축을 풀고 SpiderFriend-Setup-1.0.0.exe 를 실행하세요.",
  },
  {
    title: "\u201cWindows의 PC 보호\u201d 안내",
    desc: "파란 창이 뜨면 추가 정보 → 실행 을 눌러주세요. 개발자 서명이 없는 개인 제작 앱이라 뜨는 정상적인 안내입니다.",
  },
  {
    title: "실행",
    desc: "설치 후 바탕화면의 거미인간 아이콘으로 실행됩니다. 관리자 권한은 필요 없어요.",
  },
];

const usage = [
  "캐릭터를 클릭하면 여러 가지 반응을 합니다",
  "드래그해서 원하는 곳으로 옮길 수 있어요",
  "꾹 누르면 오른쪽 아래에 아파트가 나타나요. 그곳에 끌어다 놓으면 숨습니다",
  "다시 꺼낼 땐 아파트를 클릭하거나 트레이 아이콘을 클릭하세요",
  "종료는 아파트 오른쪽 위 X, 또는 트레이 아이콘 우클릭 → 종료",
];

export default function SpiderFriendPage() {
  return (
    <main className="flex-1">
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-4">
        <Link href="/" className="font-mono text-sm text-ink-soft hover:text-ink transition-colors">
          ← kunny.dev
        </Link>
      </header>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-14">
        <p className="font-mono text-xs text-ember mb-4">TOY APP · Windows · 91MB</p>
        <h1 className="text-4xl sm:text-5xl font-medium text-ink leading-[1.2] flex items-center gap-3">
          거미인간 <span className="text-3xl">🕸️</span>
        </h1>
        <p className="mt-3 text-lg text-ink-soft italic">SpiderFriend</p>
        <p className="mt-8 text-lg text-ink leading-relaxed max-w-xl">
          취미로 만든 윈도우용 바탕화면 캐릭터 앱입니다. 화면 가장자리를 걸어
          다니면서 거미줄을 쏘거나, 천장에 매달려 쉬기도 하는 그냥 귀여운
          앱이에요.
        </p>

        <div className="mt-10">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-ember text-paper font-mono text-sm px-6 py-3 rounded-sm hover:bg-ember-soft transition-colors"
          >
            다운로드 받기 ↓
          </a>
        </div>
      </section>

      {/* Behavior notice */}
      <section className="max-w-3xl mx-auto px-6 pb-14">
        <div className="border border-line rounded-sm p-6 bg-white/40">
          <p className="text-ink-soft leading-relaxed text-sm">
            마우스·키보드를 3분간 사용하지 않으면 화면 전체에 거미줄이 덮이는
            이벤트가 있어요. 다시 움직이면 1초 안에 사라지니 작업에 방해되지
            않습니다. 모니터 여러 대 쓰셔도 잘 동작해요.
          </p>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-3xl mx-auto px-6 pb-14">
        <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
          사용 방법
        </p>
        <ul className="space-y-3">
          {usage.map((u) => (
            <li key={u} className="flex gap-3 text-ink leading-relaxed">
              <span className="text-ember mt-1">·</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-soft">
          아파트 아래 ? 에 마우스를 올리면 도움말이 나옵니다.
        </p>
      </section>

      {/* Install steps */}
      <section id="download" className="max-w-3xl mx-auto px-6 pb-16">
        <p className="font-mono text-xs tracking-wide text-ink-soft mb-6">
          설치 방법
        </p>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5">
              <span className="font-mono text-sm text-ember shrink-0 w-5">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-ink">{s.title}</h3>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-line rounded-sm p-8 bg-white/40 text-center">
          <p className="font-mono text-xs text-ink-soft mb-4">
            Windows 10/11 · 91MB · 관리자 권한 불필요
          </p>
          <a
            href="https://YOUR-ITCH-IO-LINK-HERE"
            className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-sm px-8 py-3.5 rounded-sm hover:bg-indigo transition-colors"
          >
            SpiderFriend 다운로드
          </a>
          <p className="text-xs text-ink-soft mt-3">itch.io로 이동합니다</p>
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
