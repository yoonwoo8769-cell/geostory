/* =====================================================================
   지오스토리 홈페이지 동작 코드
   - 메뉴 이동, 탭 전환, 검색, 장비 필터, 문의서 복사 기능을 담당합니다.
   - 문구 수정은 index.html 에서만 하시면 됩니다. 이 파일은 수정하지 않아도 됩니다.
   ===================================================================== */
'use strict';

/* ---------- 사이트 검색(돋보기)에서 보여줄 목록 : 제목·설명 문구를 바꿔도 됩니다 ---------- */
const SEARCH_LIST = [
  {
    "title": "기업 이야기 · 비전과 경영철학",
    "desc": "존재 이유, 정확한 정보, 신뢰, 혁신, 안전보건, 회사 목표",
    "route": "story"
  },
  {
    "title": "사업의 연결 · 네 단계의 가치사슬",
    "desc": "관측 데이터 융합 분석 의사결정 멀티센서 항공 LiDAR 라이다 MMS",
    "route": "business"
  },
  {
    "title": "재난·안전 · 산불 감시와 화선 탐지 연구",
    "desc": "산불 화점 화선 AI 자동 탐지 관제 연계 재난 대응",
    "route": "solutions/safety"
  },
  {
    "title": "기후·환경 · 초분광으로 읽는 변화",
    "desc": "초분광 산림 농업 기름유출 블루카본 환경 분석",
    "route": "solutions/environment"
  },
  {
    "title": "도시·모빌리티 · 정밀지도와 3D 데이터",
    "desc": "도시 도로 자율주행 HD MAP MMS 3차원 모델링",
    "route": "solutions/mobility"
  },
  {
    "title": "해양·연안 · 육지와 바다를 잇는 관측",
    "desc": "항공수심 LiDAR 해양 연안 해저지형 해안선 갯골",
    "route": "solutions/marine"
  },
  {
    "title": "IR & 성장 · 투자자 이야기",
    "desc": "투자 성장 전략 사업 구조 발전 방향 재무 상장 IPO 기업가치",
    "route": "ir"
  },
  {
    "title": "브랜드 · CI",
    "desc": "회사 로고 브랜드 색상 CI 다운로드",
    "route": "story/brand"
  },
  {
    "title": "인사이트 · 공개 사업 소식과 자료실",
    "desc": "R&D 연구개발 소식 브로셔 2026 회사 소개 자료",
    "route": "insights"
  },
  {
    "title": "문의하기",
    "desc": "투자 사업 기술 협력 문의 전화 연락 주소 오시는 길",
    "route": "contact"
  },
  {
    "title": "장비소개 · 관측 인프라",
    "desc": "항공기 MMS 항공 LiDAR 라이다 디지털카메라 초분광 지상분광기 IMU 드론 장비 제원",
    "route": "equipment"
  },
  {
    "title": "인재채용 · 함께 일하는 사람들",
    "desc": "인재상 채용 절차 복리후생 교육지원 입사지원서 지원 방법",
    "route": "careers"
  },
  {
    "title": "채용공고 · 모집 및 지원 안내",
    "desc": "공식 채용 게시판 신입 경력 공고 채용 문의 입사지원서 다운로드",
    "route": "jobs"
  },
  {
    "title": "장비소개 · CESSNA GRAND CARAVAN 208B",
    "desc": "항공기 / USA CESSNA",
    "route": "equipment/aircraft"
  },
  {
    "title": "장비소개 · CESSNA GRAND CARAVAN 208B",
    "desc": "항공기 / USA CESSNA",
    "route": "equipment/aircraft"
  },
  {
    "title": "장비소개 · King Air C90B",
    "desc": "항공기 / USA Beechcraft",
    "route": "equipment/aircraft"
  },
  {
    "title": "장비소개 · Leica Pegasus TRK 700 Neo",
    "desc": "MMS / Leica Geosystem",
    "route": "equipment/mms"
  },
  {
    "title": "장비소개 · Pegasus Ⅱ Ultimate",
    "desc": "MMS / Leica Geosystem",
    "route": "equipment/mms"
  },
  {
    "title": "장비소개 · Pegasus Ⅱ",
    "desc": "MMS / Leica Geosystem",
    "route": "equipment/mms"
  },
  {
    "title": "장비소개 · CountryMapper",
    "desc": "항공 LiDAR / Leica Geosystem",
    "route": "equipment/airborne-lidar"
  },
  {
    "title": "장비소개 · TerrainMapper",
    "desc": "항공 LiDAR / Leica Geosystem",
    "route": "equipment/airborne-lidar"
  },
  {
    "title": "장비소개 · ALS50-Ⅱ",
    "desc": "항공 LiDAR / Leica Geosystem",
    "route": "equipment/airborne-lidar"
  },
  {
    "title": "장비소개 · Ultracam Osprey 4.1",
    "desc": "디지털카메라 / Vexcel Imaging",
    "route": "equipment/camera"
  },
  {
    "title": "장비소개 · DMCⅢ",
    "desc": "디지털카메라 / Leica Geosystem",
    "route": "equipment/camera"
  },
  {
    "title": "장비소개 · DMCⅠ",
    "desc": "디지털카메라 / Z/I Imaging",
    "route": "equipment/camera"
  },
  {
    "title": "장비소개 · SPECIM FX 17",
    "desc": "초분광 / SPECIM",
    "route": "equipment/hyperspectral"
  },
  {
    "title": "장비소개 · SPECIM FX 10",
    "desc": "초분광 / SPECIM",
    "route": "equipment/hyperspectral"
  },
  {
    "title": "장비소개 · IQ",
    "desc": "초분광 / SPECIM",
    "route": "equipment/hyperspectral"
  },
  {
    "title": "장비소개 · AisaFENIX 1K",
    "desc": "초분광 / SPECIM",
    "route": "equipment/hyperspectral"
  },
  {
    "title": "장비소개 · CASI 1500",
    "desc": "초분광 / Itres",
    "route": "equipment/hyperspectral"
  },
  {
    "title": "장비소개 · Backpack",
    "desc": "지상 LiDAR / Leica Geosystem",
    "route": "equipment/terrestrial-lidar"
  },
  {
    "title": "장비소개 · RTC360",
    "desc": "지상 LiDAR / Leica Geosystem",
    "route": "equipment/terrestrial-lidar"
  },
  {
    "title": "장비소개 · Chiroptera-5",
    "desc": "항공수심측량장비 / Leica Geosystems",
    "route": "equipment/bathymetry"
  },
  {
    "title": "장비소개 · SEAHAWK",
    "desc": "항공수심측량장비 / 지오스토리(해양수산부 연구과제 개발성과)",
    "route": "equipment/bathymetry"
  },
  {
    "title": "장비소개 · FieldSpec 3",
    "desc": "지상분광기 / ASD",
    "route": "equipment/spectrometer"
  },
  {
    "title": "장비소개 · Z+F IMAGER",
    "desc": "지상레이저스캐너 / Z+F",
    "route": "equipment/scanner"
  },
  {
    "title": "장비소개 · ILRIS",
    "desc": "지상레이저스캐너 / Optech",
    "route": "equipment/scanner"
  },
  {
    "title": "장비소개 · LANDINS",
    "desc": "IMU / IXSEA",
    "route": "equipment/imu"
  },
  {
    "title": "장비소개 · MicroHSI 410 SHARK",
    "desc": "드론 / CORNING",
    "route": "equipment/drone"
  },
  {
    "title": "장비소개 · SEQUOIA",
    "desc": "드론 / Parrot",
    "route": "equipment/drone"
  },
  {
    "title": "장비소개 · Disco",
    "desc": "드론 / Parrot",
    "route": "equipment/drone"
  },
  {
    "title": "장비소개 · BlueGrass",
    "desc": "드론 / Parrot",
    "route": "equipment/drone"
  },
  {
    "title": "장비소개 · Mavic 2 Pro",
    "desc": "드론 / DJI",
    "route": "equipment/drone"
  },
  {
    "title": "장비소개 · Phanthom4 Pro",
    "desc": "드론 / DJI",
    "route": "equipment/drone"
  },
  {
    "title": "콘텐츠 출처 및 안내",
    "desc": "공개 자료 근거 원문 비전 제안",
    "route": "sources"
  }
];

/* ---------- 이하 동작 코드 ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const TAB_ATTRS = ['stage', 'solution', 'roadmap', 'designField', 'infra'];

function currentPage() { return $('.page:not([hidden])'); }

/* 탭 전환: 버튼(data-stage 등)을 누르면 같은 페이지 안의 해당 패널만 보여줍니다 */
function selectTab(button) {
  const key = TAB_ATTRS.find(k => button.dataset[k] !== undefined);
  if (!key) return false;
  const value = button.dataset[key];
  const page = button.closest('.page') || document;
  const attr = 'data-' + key.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
  $$(`[${attr}]`, page).forEach(b => {
    const on = b.dataset[key] === value;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
  });
  const panel = $('#' + button.getAttribute('aria-controls'), page);
  if (panel) $$(':scope > [data-panel]', panel).forEach(p => { p.hidden = p.dataset.panel !== value; });
  return true;
}

/* 페이지 이동 (#/story 처럼 주소 뒤 # 부분으로 페이지를 바꿉니다) */
function showRoute(initial) {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  let route = parts[0] || 'home';
  const detail = parts[1] || '';
  if (!$(`.page[data-page="${route}"]`)) route = 'notfound';
  $$('.page').forEach(p => { p.hidden = p.dataset.page !== route; });
  const page = currentPage();
  document.title = 'GEOSTORY | ' + (page.dataset.title || '페이지 안내');
  $$('[data-nav]').forEach(a => a.dataset.nav === route ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  closeMenu();
  const dlg = $('#equipment-dialog'); if (dlg.open) dlg.close();

  let target = null;
  if (route === 'business' && detail) {
    const btn = $(`[data-stage="${STAGE_IDS.indexOf(detail)}"]`, page);
    if (STAGE_IDS.includes(detail) && btn) { selectTab(btn); target = $('#explorer', page); }
  }
  if (route === 'solutions' && detail) {
    const btn = $(`[data-solution="${detail}"]`, page);
    if (btn) selectTab(btn);
  }
  if (route === 'equipment') { equipment.category = detail || 'all'; updateEquipment(); }
  if (!target && detail && route !== 'solutions') target = page.querySelector('#' + CSS.escape(detail));
  if (!initial) $('#main').focus({ preventScroll: true });
  if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
  else window.scrollTo({ top: 0, behavior: 'instant' });
}

/* 인사이트(뉴스) 분류·검색 */
function updateNews() {
  const page = currentPage(); if (!page) return;
  const filter = ($('[data-filter][aria-pressed="true"]', page) || {}).dataset?.filter || '전체';
  const query = (($('#news-query', page) || {}).value || '').trim().toLowerCase();
  let count = 0;
  $$('#news-results .insight-card', page).forEach(card => {
    const show = (filter === '전체' || card.dataset.category === filter) && (!query || card.textContent.toLowerCase().includes(query));
    card.hidden = !show; if (show) count++;
  });
  let empty = $('#news-results .empty-state', page);
  if (!count && !empty) { empty = document.createElement('div'); empty.className = 'empty-state'; empty.textContent = '검색 결과가 없습니다. 다른 검색어를 입력해 주세요.'; $('#news-results', page).append(empty); }
  if (empty) empty.hidden = count > 0;
}

/* 장비 분류·검색 */
const equipment = { category: 'all', query: '' };
function updateEquipment() {
  const page = $('.page[data-page="equipment"]'); if (!page) return;
  $$('[data-equipment-category]', page).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.equipmentCategory === equipment.category)));
  const q = equipment.query.trim().toLowerCase();
  let count = 0;
  $$('#equipment-results .equipment-card', page).forEach(card => {
    const show = (equipment.category === 'all' || card.dataset.category === equipment.category) && (!q || card.textContent.toLowerCase().includes(q));
    card.hidden = !show; if (show) count++;
  });
  const counter = $('#equipment-count strong', page); if (counter) counter.textContent = count;
  const empty = $('#equipment-empty', page); if (empty) empty.hidden = count > 0;
}
function openEquipmentDetail(id) {
  const tpl = document.querySelector(`template[data-equipment="${CSS.escape(id)}"]`); if (!tpl) return;
  $('#equipment-detail-title').textContent = tpl.dataset.title;
  const box = $('#equipment-detail-content'); box.innerHTML = ''; box.append(tpl.content.cloneNode(true));
  $('#equipment-dialog').showModal();
}

/* 사이트 검색 */
function updateSearch() {
  const terms = $('#search-input').value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const list = terms.length ? SEARCH_LIST.filter(r => terms.every(t => (r.title + ' ' + r.desc).toLowerCase().includes(t))) : SEARCH_LIST.slice(0, 5);
  $('#search-results').innerHTML = list.length
    ? list.map(r => `<a class="search-result" href="#/${r.route}"><strong>${r.title} <span aria-hidden="true">↗</span></strong><small>${r.desc}</small></a>`).join('')
    : '<p class="muted small">검색 결과가 없습니다. 다른 키워드로 검색해 주세요.</p>';
}

/* 모바일 메뉴 · 알림 */
function closeMenu() {
  const b = $('.menu-toggle'); b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-label', '메뉴 열기');
  $('#mobile-nav').hidden = true; document.body.classList.remove('mobile-nav-open');
}
function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('visible');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('visible'), 2700);
}

/* 문의서 (회사로 전송되지 않고 복사·저장만 됩니다) */
function inquiryText() {
  const page = currentPage();
  const company = $('#inquiry-company', page).value.trim();
  const type = $('#inquiry-type', page).value;
  const message = $('#inquiry-message', page).value.trim();
  return `[지오스토리 문의]\n문의 유형: ${type}\n회사·기관: ${company || '미입력'}\n\n${message}\n\n공식 대표번호: 1800-7453`;
}
function validInquiry() {
  const page = currentPage(); const form = $('#inquiry-form', page); const message = $('#inquiry-message', page);
  if (!message.value.trim()) { message.setCustomValidity('문의 내용을 입력해 주세요.'); message.reportValidity(); return false; }
  message.setCustomValidity(''); return form.reportValidity();
}

/* ---------- 클릭·입력 처리 ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const tabBtn = TAB_ATTRS.map(k => t.closest(`[data-${k.replace(/[A-Z]/g, c => '-' + c.toLowerCase())}]`)).find(Boolean);
  if (tabBtn && tabBtn.matches('button')) { selectTab(tabBtn); if (tabBtn.dataset.solution) history.replaceState(null, '', '#/solutions/' + tabBtn.dataset.solution); return; }
  const cat = t.closest('[data-equipment-category]');
  if (cat) { equipment.category = cat.dataset.equipmentCategory; updateEquipment(); history.replaceState(null, '', equipment.category === 'all' ? '#/equipment' : '#/equipment/' + equipment.category); return; }
  if (t.closest('[data-equipment-reset]')) { equipment.category = 'all'; equipment.query = ''; const qi = $('#equipment-query'); if (qi) qi.value = ''; updateEquipment(); history.replaceState(null, '', '#/equipment'); return; }
  const det = t.closest('[data-equipment-detail]'); if (det) { openEquipmentDetail(det.dataset.equipmentDetail); return; }
  if (t.closest('.equipment-close')) { $('#equipment-dialog').close(); return; }
  const f = t.closest('[data-filter]');
  if (f) { $$('[data-filter]', currentPage()).forEach(b => b.setAttribute('aria-pressed', String(b === f))); updateNews(); return; }
  if (t.closest('.menu-toggle')) {
    const b = $('.menu-toggle'); const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(open)); b.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    $('#mobile-nav').hidden = !open; document.body.classList.toggle('mobile-nav-open', open); return;
  }
  if (t.closest('.search-open')) { closeMenu(); $('#search-dialog').showModal(); updateSearch(); $('#search-input').focus(); return; }
  if (t.closest('.dialog-close')) { $('#search-dialog').close(); return; }
  if (t.closest('.search-result')) $('#search-dialog').close();
  if (t.closest('#to-top')) window.scrollTo({ top: 0, behavior: 'smooth' });
  if (t.closest('#download-inquiry')) {
    if (!validInquiry()) return;
    const url = URL.createObjectURL(new Blob([inquiryText()], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'GEOSTORY_inquiry.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#inquiry-status', currentPage()).textContent = '문의서를 저장했습니다. 회사로 전송된 내용은 없습니다.'; toast('문의서를 저장했습니다.');
  }
  const same = t.closest('a[href^="#/"]');
  if (same && same.hash === location.hash) {
    closeMenu(); const sec = same.hash.split('/')[2]; const target = sec ? currentPage().querySelector('#' + CSS.escape(sec)) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth' }); else window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
document.addEventListener('input', e => {
  if (e.target.id === 'search-input') updateSearch();
  if (e.target.id === 'equipment-query') { equipment.query = e.target.value; updateEquipment(); }
  if (e.target.id === 'news-query') updateNews();
  if (e.target.id === 'inquiry-message') e.target.setCustomValidity('');
});
document.addEventListener('submit', async e => {
  if (e.target.id !== 'inquiry-form') return; e.preventDefault(); if (!validInquiry()) return;
  const status = $('#inquiry-status', currentPage());
  try { await navigator.clipboard.writeText(inquiryText()); status.textContent = '문의 내용을 복사했습니다. 회사로 전송된 내용은 없습니다.'; toast('문의 내용을 복사했습니다.'); }
  catch { status.textContent = '자동 복사를 사용할 수 없습니다. 문의서 저장 버튼으로 파일을 받거나, 아래 내용을 직접 복사해 주세요.\n\n' + inquiryText(); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { const wasOpen = !$('#mobile-nav').hidden; closeMenu(); if (wasOpen) $('.menu-toggle').focus(); return; }
  const tab = e.target.closest('[role="tab"]');
  if (!tab || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) return;
  e.preventDefault();
  const tabs = $$('[role="tab"]', tab.closest('[role="tablist"]')); const cur = tabs.indexOf(tab);
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (cur + (['ArrowRight', 'ArrowDown'].includes(e.key) ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus(); tabs[next].click();
});
['search-dialog', 'equipment-dialog'].forEach(id => $('#' + id).addEventListener('click', e => {
  if (e.target.id !== id) return; const r = e.target.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
}));
window.addEventListener('hashchange', () => showRoute(false));
window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMenu(); });
const STAGE_IDS = ["sensing","fusion","analysis","decision"];
showRoute(true);
