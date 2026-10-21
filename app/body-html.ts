export const bodyHtml = `
<div class="container" id="app">
  <button type="button" class="btn btn-primary mood-btn" id="moodBtn" aria-controls="deck">Moodboard</button>
  <header class="page-header">
    <div>
      <div class="tabs-list theme-toggle" role="radiogroup" aria-label="Tema da página" id="themeToggle">
        <button type="button" role="radio" class="tabs-trigger" data-theme-set="light">Claro</button>
        <button type="button" role="radio" class="tabs-trigger" data-theme-set="dark">Escuro</button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <span class="badge badge-default">Black 2026</span>
        <span class="badge badge-outline">GLLAD</span>
        <span class="badge badge-outline">AIROW</span>
      </div>
      <h1>Roteiros UGC da Black</h1>
      <p>Roteiro, inspirações e tênis de cada vídeo.</p>
    </div>
    <div class="save" id="savestate" role="status"><span class="dot"></span><span>Conectando…</span></div>
  </header>

  <div class="alert" id="banner" hidden></div>

  <div class="overview" id="summary"></div>

  <div class="toolbar">
    <div class="tabs-list" role="tablist" aria-label="Filtrar por marca" id="brandTabs">
      <button type="button" role="tab" class="tabs-trigger" data-b="all">Todas</button>
      <button type="button" role="tab" class="tabs-trigger" data-b="GLLAD">GLLAD</button>
      <button type="button" role="tab" class="tabs-trigger" data-b="AIROW">AIROW</button>
    </div>
    <label class="switch"><input type="checkbox" id="hideDone"><span class="track"></span>Ocultar gravados</label>
    <label class="switch"><input type="checkbox" id="expandAll"><span class="track"></span>Abrir todos os roteiros</label>
  </div>

  <section class="section" id="phasesBlock">
    <div class="section-head">
      <h2>Fases da Black · GLLAD</h2>
      <p>Dia e oferta de cada etapa</p>
    </div>
    <div class="phases" id="phases"></div>
  </section>

  <section class="section" id="productsBlock">
    <div class="section-head">
      <h2>Tênis da campanha</h2>
      <p>Resumo dos tênis definidos nos vídeos. Para trocar ou excluir, use o cartão do vídeo.</p>
    </div>
    <div class="products" id="products"></div>
  </section>

  <section class="section" id="creatorsBlock">
    <div class="section-head">
      <h2>Creators</h2>
      <p>Foto, nome e Instagram de quem vai gravar. Arraste ou cole a foto no círculo.</p>
    </div>
    <div class="creators-grid" id="creatorsGrid"></div>
  </section>

  <section class="section" id="locationsBlock">
    <div class="section-head">
      <h2>Locais de gravação</h2>
      <p>Onde, quando e com quem cada gravação acontece.</p>
    </div>
    <div class="arrive" role="note"><span class="arrive-ic" id="arriveIc"></span><div><b>Chegue de 10 a 15 minutos antes do horário</b><span>Vale para todas as creators, em todos os locais.</span></div></div>
    <div id="looks"></div>
    <div class="locs" id="locs"></div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2>Agenda de gravação</h2>
      <p id="agendaCount"></p>
    </div>
    <div id="agenda"></div>
  </section>
</div>

<div class="toaster" id="toaster" aria-live="polite"></div>
<div class="deck" id="deck" hidden role="dialog" aria-modal="true" aria-label="Moodboard">
 <div class="deck-rot" id="deckRot">
  <div class="deck-stage" id="deckStage"></div>
  <div class="deck-bar">
    <button type="button" class="deck-btn" id="deckPrev" aria-label="Slide anterior"></button>
    <span class="deck-count mono" id="deckCount">1 / 1</span>
    <button type="button" class="deck-btn" id="deckNext" aria-label="Próximo slide"></button>
  </div>
  <div class="deck-top">
    <select class="deck-who" id="deckWho" aria-label="Mostrar moodboard de"></select>
    <button type="button" class="deck-pill" id="deckPdf">Baixar PDF</button>
    <button type="button" class="deck-btn" id="deckFull" aria-label="Tela cheia"></button>
    <button type="button" class="deck-btn" id="deckClose" aria-label="Fechar moodboard"></button>
  </div>
 </div>
</div>
<input type="file" id="filePick" accept="image/*,video/*" multiple hidden>
`;
