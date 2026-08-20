const { checkoutUrl } = require("./content.cjs");

function icon(name) {
  const icons = {
    heart: "♡",
    light: "✦",
    check: "✓",
    compass: "◎",
    shield: "7",
    book: "A"
  };
  return icons[name] || "•";
}

function head({ title, description, path }) {
  const siteUrl = "https://lilian-silva-olive.vercel.app";
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}/assets/og.png`;
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0b3b31">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <link rel="icon" href="/assets/logo-lilian.png">
    <link rel="stylesheet" href="/assets/styles.css">
  `;
}

function header() {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Ir para o início da página">
          <img src="/assets/logo-lilian.png" alt="Lilian Silva, Terapeuta TRG" width="176" height="171">
        </a>
        <a class="header-cta" href="${checkoutUrl}" aria-label="Comprar o guia Ansiedade e Ataque de Pânico por R$ 29,90">Acessar o guia</a>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <img src="/assets/logo-lilian.png" alt="Lilian Silva, Terapeuta TRG" width="170" height="165">
        <div>
          <p class="footer-title">Informação clara, humana e responsável.</p>
          <p>Este material tem finalidade educativa. Não realiza diagnóstico, não promete cura e não substitui acompanhamento médico ou psicológico.</p>
          <p>Em sintomas intensos, novos, preocupantes ou em situações de crise, procure avaliação de um profissional de saúde.</p>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© Lilian Silva. Todos os direitos reservados.</span>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  `;
}

function salesPage(angle, path) {
  const pageTitle = `${angle.title} | Lilian Silva`;
  const description = "Guia digital Ansiedade e Ataque de Pânico. Um primeiro caminho para compreender, enfrentar e reduzir a ansiedade com linguagem simples e acolhedora.";
  return `<!doctype html>
<html lang="pt-BR">
  <head>${head({ title: pageTitle, description, path })}</head>
  <body>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    ${header()}
    <main id="conteudo">
      <section class="hero" id="inicio">
        <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
        <div class="hero-glow hero-glow-two" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${angle.label}</p>
            <h1>${angle.title}</h1>
            <p class="hero-support">${angle.support}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${checkoutUrl}" aria-label="${angle.cta}. Comprar por R$ 29,90">${angle.cta}</a>
              <p class="microcopy"><strong>Guia digital em PDF</strong><span>Acesso por R$ 29,90</span></p>
            </div>
            <ul class="hero-assurances" aria-label="Informações importantes da oferta">
              <li>${icon("check")} Linguagem simples</li>
              <li>${icon("check")} Leitura acolhedora</li>
              <li>${icon("check")} Garantia de 7 dias</li>
            </ul>
          </div>
          <div class="hero-visual">
            <div class="portrait-frame">
              <img src="/assets/lilian-hero.png" alt="Retrato profissional de Lilian Silva em ambiente verde e acolhedor" width="1024" height="1536">
            </div>
            <div class="hero-card">
              <span>Um primeiro caminho</span>
              <strong>Compreender.<br>Enfrentar.<br>Reduzir.</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="recognition section-cream">
        <div class="container narrow center">
          <p class="section-kicker">Talvez você reconheça essa sensação</p>
          <h2>O corpo dá um sinal. A mente tenta explicar. O medo cresce.</h2>
          <p>Quando você não entende o que está acontecendo, uma sensação pode virar um mistério. E aquilo que não tem nome costuma parecer ainda mais assustador.</p>
        </div>
        <div class="container symptom-grid">
          <article class="symptom-card"><span>01</span><h3>Coração acelerado</h3><p>O corpo muda e a primeira interpretação já pode apontar para o pior.</p></article>
          <article class="symptom-card"><span>02</span><h3>Falta de ar e tontura</h3><p>O medo aumenta enquanto você tenta entender o que está sentindo.</p></article>
          <article class="symptom-card"><span>03</span><h3>Irritação e tensão</h3><p>Nem sempre a ansiedade se apresenta como uma crise evidente.</p></article>
          <article class="symptom-card"><span>04</span><h3>Culpa e confusão</h3><p>Sem clareza, fica fácil pensar que o problema é quem você é.</p></article>
        </div>
      </section>

      <section class="transformation section-light">
        <div class="container section-heading split-heading">
          <div><p class="section-kicker">Da confusão para a clareza</p><h2>Você não precisa continuar atravessando tudo no escuro.</h2></div>
          <p>O guia organiza um ponto de partida possível. Ele não promete que tudo desaparece amanhã. Ele ajuda você a começar a enxergar o que antes parecia um monstro sem rosto.</p>
        </div>
        <div class="container compare-grid">
          <article class="compare-card today"><p class="compare-label">Hoje</p><h3>O sinal aparece e sua cabeça imagina o pior.</h3><p>Você tenta lutar contra aquilo que sente sem compreender o caminho que levou até ali.</p></article>
          <div class="compare-arrow" aria-hidden="true">→</div>
          <article class="compare-card after"><p class="compare-label">Depois da leitura</p><h3>Você começa a reconhecer o sinal e o ciclo.</h3><p>A culpa dá espaço para compreensão e você passa a olhar para o momento com mais clareza.</p></article>
        </div>
      </section>

      <section class="map-section section-dark" id="mapa">
        <div class="container map-grid">
          <div class="map-copy">
            <p class="section-kicker light-kicker">O diferencial do guia</p>
            <h2>Conheça o Mapa do Alarme.</h2>
            <p>Você sente um sinal. Não entende. O medo cresce. O Mapa do Alarme ajuda a reconhecer esse ciclo para que ele deixe de parecer apenas um mistério.</p>
            <blockquote>“O que tem nome costuma ser menos assustador do que aquilo que você não consegue explicar.”</blockquote>
          </div>
          <ol class="alarm-map" aria-label="Etapas do Mapa do Alarme">
            <li><span>01</span><div><strong>Sinal</strong><small>O corpo apresenta uma sensação.</small></div></li>
            <li><span>02</span><div><strong>Interpretação</strong><small>A mente tenta explicar o sinal.</small></div></li>
            <li><span>03</span><div><strong>Medo</strong><small>A interpretação parece uma ameaça.</small></div></li>
            <li><span>04</span><div><strong>Escalada</strong><small>A sensação ganha ainda mais força.</small></div></li>
          </ol>
        </div>
      </section>

      <section class="discover section-cream">
        <div class="container discover-grid">
          <div class="book-stage">
            <div class="book-halo" aria-hidden="true"></div>
            <img src="/assets/capa-guia.png" alt="Capa do guia Ansiedade e Ataques de Pânico, de Lilian Silva" width="1024" height="1024">
            <span class="book-badge">Acesso em PDF</span>
          </div>
          <div class="discover-copy">
            <p class="section-kicker">O que você vai descobrir</p>
            <h2>As primeiras coisas que você precisa entender.</h2>
            <ul class="feature-list">
              <li><span>${icon("check")}</span><div><strong>Por que o corpo parece gritar</strong><p>Entenda melhor o que acontece quando os sinais aparecem.</p></div></li>
              <li><span>${icon("check")}</span><div><strong>Como perceber sinais antes ignorados</strong><p>Aprenda a olhar para as sensações com mais atenção e menos mistério.</p></div></li>
              <li><span>${icon("check")}</span><div><strong>Por que a dúvida alimenta o medo</strong><p>Veja como a falta de compreensão pode fazer tudo parecer maior.</p></div></li>
              <li><span>${icon("check")}</span><div><strong>Os 3 passos de Lilian</strong><p>Compreender, enfrentar e reduzir. Um caminho explicado sem termos complicados.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="journey section-light">
        <div class="container narrow center">
          <p class="section-kicker">Um caminho em três partes</p>
          <h2>Não é uma coleção de termos técnicos. É uma ordem para começar.</h2>
        </div>
        <div class="container steps-grid">
          <article class="step-card"><span class="step-number">01</span><span class="step-icon">${icon("compass")}</span><h3>Compreender</h3><p>Reconheça os sinais e entenda por que determinadas sensações podem assustar tanto.</p></article>
          <article class="step-card featured"><span class="step-number">02</span><span class="step-icon">${icon("light")}</span><h3>Enfrentar</h3><p>Saia do lugar de total confusão e comece a olhar para o momento de outro ponto.</p></article>
          <article class="step-card"><span class="step-number">03</span><span class="step-icon">${icon("heart")}</span><h3>Reduzir</h3><p>Conheça um primeiro caminho para trabalhar o impacto da ansiedade com mais clareza.</p></article>
        </div>
      </section>

      <section class="about section-cream" id="lilian">
        <div class="container about-grid">
          <div class="about-visual">
            <div class="about-image-wrap"><img src="/assets/lilian-apresentacao.png" alt="Lilian Silva sentada em um escritório acolhedor" width="1024" height="1536"></div>
            <div class="about-seal"><span>Experiência vivida</span><strong>e escuta acolhedora</strong></div>
          </div>
          <div class="about-copy">
            <p class="section-kicker">Quem é Lilian Silva</p>
            <h2>Antes de ser terapeuta, Lilian esteve do outro lado.</h2>
            <p>Durante muito tempo, ela viveu com ansiedade sem compreender o que estava acontecendo. O coração acelerava, faltava o ar, vinha a tontura e a sensação de que algo ruim poderia acontecer.</p>
            <p>Até que viveu seu primeiro ataque de pânico. Naquele momento, acreditou que estava morrendo. Cansada de sentir e não encontrar respostas, começou a estudar ansiedade, o funcionamento da mente e conheceu a Terapia de Reprocessamento Generativo, a TRG.</p>
            <p>Mais tarde, tornou-se Terapeuta TRG. Este livro nasceu daquilo que ela gostaria de ter encontrado no começo: uma explicação simples, clara e acolhedora.</p>
            <div class="about-quote">“Por que ninguém me explicou isso quando eu estava vivendo tudo aquilo?”</div>
          </div>
        </div>
      </section>

      <section class="audience section-light">
        <div class="container section-heading center narrow">
          <p class="section-kicker">Este guia faz sentido para você?</p>
          <h2>Um primeiro passo para quem sente e ainda não consegue explicar.</h2>
        </div>
        <div class="container audience-grid">
          <article class="audience-card yes"><h3>Este guia é para você que:</h3><ul><li>Sente ansiedade e não consegue explicar direito o que acontece.</li><li>Já sentiu coração acelerado, falta de ar, tontura ou medo intenso.</li><li>Percebe irritação, impaciência ou conflitos junto com a tensão emocional.</li><li>Quer compreender a própria ansiedade sem linguagem complicada.</li></ul></article>
          <article class="audience-card no"><h3>Este guia não é:</h3><ul><li>Um diagnóstico médico ou psicológico.</li><li>Uma promessa de cura.</li><li>Um substituto para terapia ou acompanhamento profissional.</li><li>Um material voltado para crianças.</li></ul></article>
        </div>
      </section>

      <section class="offer section-dark" id="oferta">
        <div class="container offer-grid">
          <div class="offer-copy">
            <p class="section-kicker light-kicker">Sua jornada começa com clareza</p>
            <h2>Leve o guia Ansiedade e Ataque de Pânico.</h2>
            <p>Um material educativo em PDF para transformar aquilo que hoje parece confuso em algo que você consegue começar a entender.</p>
            <div class="included-list">
              <div><span>${icon("book")}</span><p><strong>Livro digital em PDF</strong><small>Leitura simples, humana e acolhedora.</small></p></div>
              <div><span>3</span><p><strong>Os 3 passos</strong><small>Compreender, enfrentar e reduzir.</small></p></div>
              <div><span>${icon("light")}</span><p><strong>Mapa do Alarme</strong><small>Um jeito claro de reconhecer o ciclo.</small></p></div>
            </div>
          </div>
          <div class="price-card">
            <p class="price-label">Acesso ao guia digital</p>
            <div class="price"><span>R$</span><strong>29</strong><sup>,90</sup></div>
            <p class="price-note">Pagamento processado no checkout oficial.</p>
            <a class="button button-primary button-full" href="${checkoutUrl}" aria-label="Comprar o guia Ansiedade e Ataque de Pânico por R$ 29,90">Quero começar a entender</a>
            <ul><li>${icon("check")} Acesso ao material em PDF</li><li>${icon("check")} Compra em ambiente seguro</li><li>${icon("check")} Garantia de 7 dias</li></ul>
          </div>
        </div>
      </section>

      <section class="bonuses section-cream">
        <div class="container section-heading split-heading">
          <div><p class="section-kicker">Presentes da oferta</p><h2>Materiais para complementar sua jornada de reflexão.</h2></div>
          <p>Os bônus acompanham o guia conforme a oferta apresentada no checkout.</p>
        </div>
        <div class="container bonus-grid">
          <article class="bonus-card"><span class="bonus-tag">Presente 01</span><div class="bonus-symbol">✦</div><h3>Material Lei da Atração</h3><p>Conteúdo adicional para complementar sua jornada de reflexão.</p></article>
          <article class="bonus-card"><span class="bonus-tag">Presente 02</span><div class="bonus-symbol">♡</div><h3>Caixa Palavras de Vida</h3><p>Tirinhas com versículos e mensagens para momentos de reflexão.</p></article>
        </div>
      </section>

      <section class="guarantee section-light">
        <div class="container guarantee-card">
          <div class="guarantee-number"><strong>7</strong><span>dias</span></div>
          <div><p class="section-kicker">Sua compra protegida</p><h2>Conheça o material com tranquilidade.</h2><p>Você pode acessar o guia, conhecer a proposta e avaliar se faz sentido para você. Caso não faça, poderá solicitar o reembolso dentro do prazo aplicável informado no checkout.</p></div>
        </div>
      </section>

      <section class="faq section-cream">
        <div class="container faq-grid">
          <div class="faq-heading"><p class="section-kicker">Dúvidas frequentes</p><h2>Respostas claras antes de começar.</h2><p>Se a sua dúvida for sobre pagamento ou acesso, consulte também as informações exibidas no checkout oficial.</p></div>
          <div class="faq-list">
            <details><summary>Esse livro vai curar minha ansiedade?</summary><p>Não é essa a promessa. O livro ajuda você a compreender melhor a ansiedade, reconhecer sinais e conhecer um primeiro caminho para enfrentá-la.</p></details>
            <details><summary>Posso usar o livro no lugar de terapia?</summary><p>Não. É um material educativo e não substitui acompanhamento médico ou psicológico quando necessário.</p></details>
            <details><summary>E se eu nem souber se o que sinto é ansiedade?</summary><p>O conteúdo começa pela compreensão para ajudar você a organizar melhor aquilo que sente. O guia não realiza diagnóstico.</p></details>
            <details><summary>Lilian realmente viveu isso?</summary><p>Sim. Ela viveu ansiedade, sintomas físicos intensos e um ataque de pânico no qual acreditou estar morrendo antes de iniciar sua busca por respostas.</p></details>
            <details><summary>Vou precisar entender termos técnicos?</summary><p>Não. A comunicação foi pensada para ser simples, direta e acolhedora.</p></details>
          </div>
        </div>
      </section>

      <section class="final-cta section-dark">
        <div class="container final-cta-inner">
          <p class="section-kicker light-kicker">Acenda a luz</p>
          <h2>É muito difícil enfrentar no escuro aquilo que você não entende.</h2>
          <p>Parte das respostas que Lilian gostaria de ter encontrado em sua primeira crise agora está organizada neste guia. Não como promessa de milagre. Como um ponto de partida.</p>
          <a class="button button-primary" href="${checkoutUrl}" aria-label="Comprar agora o guia Ansiedade e Ataque de Pânico por R$ 29,90">Quero entender o que estou sentindo</a>
          <span class="final-price">Acesso por R$ 29,90</span>
        </div>
      </section>
    </main>
    ${footer()}
    <a class="mobile-cta" href="${checkoutUrl}" aria-label="Comprar o guia por R$ 29,90"><span>Quero acessar o guia</span><strong>R$ 29,90</strong></a>
  </body>
</html>`;
}

function thankYouPage() {
  const title = "Compra recebida | Lilian Silva";
  const description = "Orientações após a compra do guia Ansiedade e Ataque de Pânico.";
  return `<!doctype html>
<html lang="pt-BR">
  <head>${head({ title, description, path: "/obrigado", image: "/assets/og.png" })}</head>
  <body class="thank-you-body">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header thank-header"><div class="container header-inner"><a class="brand" href="/a1" aria-label="Ir para a página do guia"><img src="/assets/logo-lilian.png" alt="Lilian Silva, Terapeuta TRG" width="176" height="171"></a></div></header>
    <main id="conteudo" class="thank-main">
      <section class="thank-hero" id="inicio">
        <div class="container thank-wrap">
          <div class="thank-mark" aria-hidden="true">✓</div>
          <p class="eyebrow">Próximo passo</p>
          <h1>Obrigada por escolher começar pela compreensão.</h1>
          <p class="thank-lead">Seu pedido segue o fluxo oficial da plataforma usada na compra. Agora, confira as orientações abaixo para localizar sua confirmação e o acesso ao material.</p>
          <a class="button button-primary" href="#passos">Ver os próximos passos</a>
        </div>
      </section>
      <section class="thank-steps section-cream" id="passos">
        <div class="container narrow center"><p class="section-kicker">O que fazer agora</p><h2>Três verificações simples.</h2></div>
        <div class="container steps-grid thank-cards">
          <article class="step-card"><span class="step-number">01</span><h3>Confira seu e-mail</h3><p>Procure a mensagem de confirmação enviada pela plataforma de pagamento para o endereço usado na compra.</p></article>
          <article class="step-card featured"><span class="step-number">02</span><h3>Veja spam e promoções</h3><p>Se a mensagem não estiver na entrada, aguarde alguns minutos e confira também essas pastas.</p></article>
          <article class="step-card"><span class="step-number">03</span><h3>Siga o acesso oficial</h3><p>Use somente as instruções e os canais que aparecem na confirmação, no comprovante ou no checkout oficial.</p></article>
        </div>
      </section>
      <section class="thank-note section-light">
        <div class="container guarantee-card"><div class="thank-small-mark">i</div><div><p class="section-kicker">Importante</p><h2>Não recebeu a mensagem?</h2><p>Confirme se o e-mail informado na compra está correto. Como não foi fornecido um contato próprio de suporte, use apenas o canal oficial exibido pela plataforma no pedido ou no comprovante.</p></div></div>
      </section>
      <section class="final-cta section-dark"><div class="container final-cta-inner"><p class="section-kicker light-kicker">Uma leitura de cada vez</p><h2>Reserve um momento tranquilo para começar.</h2><p>Leia no seu ritmo. O objetivo é sair da confusão e construir um primeiro ponto de clareza, sem cobrança e sem culpa.</p><a class="button button-secondary" href="/a1">Voltar para a página do guia</a></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

module.exports = { salesPage, thankYouPage };
