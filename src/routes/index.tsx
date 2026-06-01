import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";
import { Section, SectionTitle } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import { Services } from "@/components/site/Services";
import heroBg from "@/assets/hero-bg.jpg";
import img1 from "@/assets/install-1.jpg";
import img2 from "@/assets/install-2.jpg";
import img3 from "@/assets/install-3.jpg";
import img4 from "@/assets/install-4.jpg";

const TITLE = "Linha de Vida Horizontal | Projeto e Instalação NR-35 | Engenhar+";
const DESC =
  "Projeto, dimensionamento, instalação e inspeção de linha de vida horizontal para proteção contra quedas. Soluções em conformidade com a NR-35 para empresas e indústrias.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const faqItems = [
  {
    q: "O que é uma linha de vida horizontal?",
    a: "É um sistema de proteção contra quedas que permite o deslocamento seguro dos trabalhadores em altura.",
  },
  {
    q: "Quando a linha de vida horizontal é obrigatória?",
    a: "Sempre que houver risco de queda e necessidade de movimentação contínua em altura.",
  },
  {
    q: "Vocês realizam apenas instalação?",
    a: "Não. Atuamos com projeto, instalação, inspeção e documentação técnica completa.",
  },
  {
    q: "O sistema atende à NR-35?",
    a: "Sim. Todos os projetos são desenvolvidos conforme as exigências aplicáveis para trabalho em altura.",
  },
  {
    q: "Vocês vendem equipamentos separadamente?",
    a: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
  },
];

function Index() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <HorizontalSolutions />
          <Services />
          <ProjectInstallInspect />
          <HowWeWork />
          <ProjectPhase />
          <Installation />
          <ProjectVideos />
          <Inspections />
          <InspectionVideos />
          <Segments />
          <NR35 />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
            Engenhar+ Soluções
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Linha de Vida Horizontal
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-accent">
            Projetos em Conformidade
          </p>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
            Especialistas em dimensionamento, instalação e inspeção de linha de vida horizontal para proteção contra quedas e adequação à NR-35.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Projeto executivo com ART",
              "Instalação especializada",
              "Inspeção e documentação técnica",
              "Adequação à NR-35",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-primary-foreground/95">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CtaButton size="lg" />
          </div>

          <p className="mt-6 max-w-2xl text-sm text-primary-foreground/80">
            Atuamos exclusivamente com projetos, inspeção e instalação. Não comercializamos peças, EPIs ou equipamentos avulsos.
          </p>

          <p className="mt-6 text-sm text-primary-foreground/70">
            Referência no RS • Atendimento nacional • Projetos personalizados
          </p>
        </div>
      </div>
    </section>
  );
}

function HorizontalSolutions() {
  const items = [
    {
      title: "Linha de Vida Horizontal",
      text: "Sistema projetado para permitir deslocamento seguro ao longo de áreas de trabalho em altura, mantendo proteção contínua durante toda a operação.",
    },
    {
      title: "Linha de Vida Flexível Horizontal",
      text: "Sistema composto por cabo de aço de alta resistência, ideal para coberturas, telhados e estruturas industriais.",
    },
    {
      title: "Pontos de Ancoragem",
      text: "Elementos fundamentais para garantir a fixação segura dos sistemas de proteção contra quedas.",
    },
    {
      title: "Linha de Vida Vertical",
      text: "Solução aplicada em escadas marinheiro e acessos verticais que exigem deslocamento seguro.",
    },
  ];
  return (
    <Section id="solucoes" tone="white">
      <SectionTitle
        eyebrow="Soluções"
        title="Soluções em Linha de Vida Horizontal"
        subtitle="Desenvolvemos sistemas de linha de vida horizontal projetados para garantir mobilidade, segurança e conformidade normativa em trabalhos realizados em altura."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function ProjectInstallInspect() {
  const cards = [
    {
      title: "Projeto Personalizado",
      text: "Dimensionamento técnico desenvolvido conforme os riscos e características da estrutura.",
    },
    {
      title: "Instalação Especializada",
      text: "Execução realizada por profissionais capacitados e seguindo rigorosamente a NR-35.",
    },
    {
      title: "Inspeção Técnica",
      text: "Avaliação periódica para garantir segurança, desempenho e conformidade do sistema.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Serviços especializados"
        title="Projeto, Instalação e Inspeção de Linha de Vida Horizontal"
        subtitle="Cada sistema de linha de vida horizontal é desenvolvido conforme as características estruturais da empresa, garantindo segurança, durabilidade e conformidade normativa."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function HowWeWork() {
  const pillars = [
    { title: "Excelência garantida", text: "Serviços com alto padrão técnico e certificações." },
    { title: "Soluções que transformam", text: "Projetos personalizados e eficazes." },
    { title: "Atendimento que conecta", text: "Relacionamento próximo, transparente e confiável." },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Como a Engenhar+ trabalha"
        title="Como desenvolvemos cada projeto"
        subtitle="Nossa equipe realiza análise técnica detalhada para identificar a melhor solução de linha de vida horizontal para cada operação. Cada projeto é único: analisamos o ambiente em detalhes, ouvimos todas as partes envolvidas e desenvolvemos soluções técnicas alinhadas à realidade do cliente, com foco em segurança, eficiência e o melhor custo-benefício."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="rounded-xl bg-primary p-8 text-primary-foreground shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl font-bold text-accent">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectPhase() {
  const steps = [
    { title: "Análise de risco", text: "Avaliamos o local, identificamos riscos e definimos as melhores soluções técnicas." },
    { title: "Croqui inicial", text: "Esboço com o posicionamento dos pontos e linhas para validação prévia." },
    { title: "Aprovação do cliente", text: "Alinhamento técnico e comercial antes de avançar para o executivo." },
    { title: "Projeto executivo", text: "Detalhamento completo com memorial, ART e desenhos 2D/3D." },
    { title: "Databook", text: "Documentação completa para uso, inspeção e manutenção do sistema." },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Fase de projeto"
        title="Etapas do desenvolvimento técnico"
        subtitle="Todo projeto de linha de vida horizontal passa por análise de risco, estudo estrutural e definição dos pontos de ancoragem para garantir máxima eficiência do sistema."
      />
      <ol className="relative mt-14 mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-5 top-2 bottom-2 w-px bg-accent/40 sm:left-1/2 sm:-translate-x-1/2" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16 pb-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 last:pb-0">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>
            <div className={`${i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Installation() {
  const slides = [img1, img2, img3, img4];
  const responsibilities = [
    { title: "Expertise técnica", text: "Equipe qualificada e preparada para projetos complexos de linha de vida horizontal." },
    { title: "Agilidade na instalação", text: "Execução organizada, sem atrasos." },
    { title: "Redução de impactos", text: "Minimizamos interferências na sua operação." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Implementação / Instalação"
        title="Instalação de Linha de Vida Horizontal"
        subtitle="Executamos a instalação de linha de vida horizontal com equipe especializada, garantindo máxima segurança e conformidade com as normas técnicas aplicáveis."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((s, idx) => (
              <img key={idx} src={s} alt={`Instalação de linha de vida horizontal ${idx + 1}`} className="w-full shrink-0 aspect-[4/3] object-cover" />
            ))}
          </div>
          <button
            aria-label="Anterior"
            onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >‹</button>
          <button
            aria-label="Próximo"
            onClick={() => setI((v) => (v + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >›</button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-primary-foreground/60"}`}
              />
            ))}
          </div>
        </div>
        <ul className="space-y-5">
          {responsibilities.map((r) => (
            <li key={r.title} className="rounded-xl border-l-4 border-accent bg-secondary p-5">
              <h3 className="font-semibold text-primary">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function YT({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-primary">{title}</p>
      </div>
    </div>
  );
}

function ProjectVideos() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Projetos executados"
        title="Projetos de Linha de Vida Horizontal Executados"
        subtitle="Conheça alguns projetos de linha de vida horizontal desenvolvidos e instalados pela Engenhar+ Soluções."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="FM_8UOq_nvE" title="Projeto Overhead" />
        <YT id="0Wn0sRStvms" title="Projeto em Telhado" />
      </div>
    </Section>
  );
}

function Inspections() {
  const cards = [
    {
      title: "Inspeções técnicas especializadas",
      text: "Nossa equipe certificada utiliza práticas rigorosas para inspecionar sistemas de linha de vida horizontal, garantindo que estejam em conformidade e plenamente funcionais.",
    },
    {
      title: "Atendimento às normas vigentes",
      text: "Seguimos rigorosamente as normas em vigor, assegurando que o sistema de linha de vida horizontal e os pontos de ancoragem estejam em total conformidade.",
    },
    {
      title: "Compromisso com a segurança",
      text: "Inspeções técnicas detalhadas em sistemas de linha de vida horizontal e pontos de ancoragem reforçam nosso compromisso com a segurança da sua equipe.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeções Linha de Vida Horizontal"
        title="Inspeções técnicas especializadas"
        subtitle="Realizamos inspeções completas em sistemas de linha de vida horizontal para verificar integridade estrutural, desempenho dos componentes e conformidade normativa."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

function InspectionVideos() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Casos de inspeção"
        title="Inspeções em Sistemas de Linha de Vida Horizontal"
        subtitle="As inspeções periódicas garantem que o sistema continue seguro, funcional e adequado às exigências das normas vigentes."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="S0WAqhzKOAY" title="Inspeção em Coberturas" />
        <YT id="0ZdujswYjzA" title="Inspeção em Escadas" />
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Após a inspeção, entregamos toda a documentação técnica exigida, garantindo conformidade total.
      </p>
    </Section>
  );
}

function Segments() {
  const diff = ["Projetos personalizados", "Foco em custo-benefício", "Soluções técnicas completas"];
  const segments = [
    "Indústria",
    "Construção Civil",
    "Agronegócio",
    "Centros logísticos",
    "Telhados industriais",
    "Empresas com NR-35",
  ];
  return (
    <Section tone="primary">
      <SectionTitle
        eyebrow="Soluções especiais"
        title="Projetos para diferentes segmentos"
        subtitle="Os sistemas de linha de vida horizontal podem ser aplicados em indústrias, centros logísticos, telhados industriais, agronegócio, construção civil e diversos outros segmentos."
        light
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
          <h3 className="text-lg font-semibold text-accent">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li key={d} className="flex items-start gap-3 text-primary-foreground/90">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-accent">Segmentos atendidos</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {segments.map((s) => (
              <div key={s} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function NR35() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua Empresa Está Adequada à NR-35?"
        subtitle="A linha de vida horizontal é uma das principais soluções utilizadas para proteção contra quedas em atividades realizadas acima de 2 metros de altura. Projetos inadequados podem gerar riscos de acidentes, multas, autuações e interdições."
      />
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl border-l-4 border-accent bg-secondary p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-primary">Principais exigências</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Sistema adequado ao risco",
            "Projeto por profissional habilitado",
            "Resistência certificada",
            "Inspeções periódicas obrigatórias",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-base text-foreground">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-muted-foreground">
          A falta de adequação pode gerar multas, interdições e riscos graves à sua operação.
        </p>
        <div className="mt-8 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas Frequentes sobre Linha de Vida Horizontal"
      />
      <div className="mt-12 mx-auto max-w-3xl space-y-4">
        {faqItems.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm open:shadow-md transition-shadow"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-primary">
              {f.q}
              <span className="mt-1 text-accent transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function ContactForm() {
  return (
    <Section id="contato" tone="white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 sm:p-14 text-center shadow-xl">
        <SectionTitle
          eyebrow="Formulário"
          title="Solicite uma Avaliação Técnica"
          subtitle="Descubra a melhor solução de linha de vida horizontal para sua empresa."
        />
        <div className="mt-10">
          <CtaButton size="lg">Quero solicitar um orçamento</CtaButton>
        </div>
      </div>
    </Section>
  );
}
