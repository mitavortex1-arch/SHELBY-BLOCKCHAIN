
import "./style.css";

const app = document.querySelector("#app");
const STORE = "shelby-predator-workspace-v3";

const NAV = [
  { id: "dashboard", label: "Command Center", group: "Enterprise" },
  { id: "architecture", label: "Enterprise Architecture", group: "Enterprise" },
  { id: "refinery", label: "VENOM Refinery", group: "Core Systems" },
  { id: "factory", label: "Software Factory", group: "Core Systems" },
  { id: "orchestration", label: "Orchestration", group: "Core Systems" },
  { id: "omega", label: "OMEGA · Red Team", group: "Intelligence" },
  { id: "ares", label: "ARES · Execution", group: "Intelligence" },
  { id: "zeus", label: "ZEUS · Orchestration", group: "Intelligence" },
  { id: "titan", label: "TITAN · Evaluation", group: "Intelligence" },
  { id: "stocks", label: "Stocks", group: "Markets" },
  { id: "etfs", label: "ETF Center", group: "Markets" },
  { id: "portfolio", label: "Portfolio", group: "Markets" },
  { id: "crypto", label: "Digital Assets", group: "Markets" },
  { id: "explorer", label: "Blockchain Explorer", group: "Blockchain" },
  { id: "shelby", label: "Shelby Chain", group: "Blockchain" },
  { id: "rwa", label: "VENOM RWA", group: "Blockchain" },
  { id: "stockd", label: "StockD ETF", group: "Products" },
  { id: "providers", label: "Data Providers", group: "Infrastructure" },
  { id: "indexing", label: "Indexing Engine", group: "Infrastructure" },
  { id: "feedback", label: "Feedback Engine", group: "Infrastructure" },
  { id: "security", label: "IRON DOME", group: "Infrastructure" },
  { id: "admin", label: "Administration", group: "System" }
];

const STOCKS = [
  { symbol: "NVDA", name: "NVIDIA", price: 0, change: 0, sector: "Semiconductors" },
  { symbol: "AMD", name: "Advanced Micro Devices", price: 0, change: 0, sector: "Semiconductors" },
  { symbol: "MSFT", name: "Microsoft", price: 0, change: 0, sector: "Technology" },
  { symbol: "AVGO", name: "Broadcom", price: 0, change: 0, sector: "Semiconductors" },
  { symbol: "MRVL", name: "Marvell Technology", price: 0, change: 0, sector: "Semiconductors" },
  { symbol: "MU", name: "Micron Technology", price: 0, change: 0, sector: "Semiconductors" },
  { symbol: "ARM", name: "Arm Holdings", price: 0, change: 0, sector: "Technology" },
  { symbol: "GOOGL", name: "Alphabet", price: 0, change: 0, sector: "Technology" },
  { symbol: "AMZN", name: "Amazon", price: 0, change: 0, sector: "Technology" },
  { symbol: "TSLA", name: "Tesla", price: 0, change: 0, sector: "Automotive" }
];

const ETFS = [
  { symbol: "SPY", name: "SPDR S&P 500 ETF", category: "Broad Market" },
  { symbol: "QQQ", name: "Invesco QQQ Trust", category: "Technology" },
  { symbol: "DIA", name: "SPDR Dow Jones Industrial Average ETF", category: "Blue Chip" },
  { symbol: "IWM", name: "iShares Russell 2000 ETF", category: "Small Cap" },
  { symbol: "SMH", name: "VanEck Semiconductor ETF", category: "Semiconductors" },
  { symbol: "SOXX", name: "iShares Semiconductor ETF", category: "Semiconductors" },
  { symbol: "VTI", name: "Vanguard Total Stock Market ETF", category: "Broad Market" },
  { symbol: "ARKK", name: "ARK Innovation ETF", category: "Innovation" }
];

const NETWORKS = [
  { name: "Shelby Chain", network: "Shelby Native", status: "Configured", environment: "Primary" },
  { name: "Sui Mainnet", network: "Sui", status: "Configured", environment: "Production" },
  { name: "Sui Testnet", network: "Sui", status: "Configured", environment: "Development" },
  { name: "VENOM Chain", network: "VENOM", status: "Configured", environment: "Integration" },
  { name: "DeFi Chain", network: "DeFi", status: "Planned", environment: "Integration" }
];

const REFINERY_STAGES = [
  { id: "ingress", name: "01 · Ingress", detail: "Receive data from configured providers, networks, APIs, and internal systems.", owner: "Helios" },
  { id: "validation", name: "02 · Validation", detail: "Check structure, source, completeness, timestamps, and data integrity.", owner: "OMEGA" },
  { id: "normalization", name: "03 · Normalization", detail: "Convert incoming information into Shelby's normalized data model.", owner: "TITAN" },
  { id: "enrichment", name: "04 · Enrichment", detail: "Add metadata, classifications, relationships, and provenance.", owner: "ZEUS" },
  { id: "indexing", name: "05 · Indexing", detail: "Prepare validated records for searchable indexes and downstream systems.", owner: "ARES" },
  { id: "approval", name: "06 · Approval Gate", detail: "Require human approval for controlled production actions.", owner: "Human approval" },
  { id: "release", name: "07 · Release", detail: "Publish approved outputs to the Software Factory and consuming workspaces.", owner: "ZEUS" }
];

const FACTORY_STAGES = [
  { id: "engine", name: "01 · Engine", detail: "Define the product's core logic and operating requirements." },
  { id: "software", name: "02 · Software", detail: "Build interfaces, services, workflows, and application logic." },
  { id: "system", name: "03 · System", detail: "Integrate software components into a coherent system." },
  { id: "network", name: "04 · Network", detail: "Connect approved providers, chains, APIs, and services." },
  { id: "rwa", name: "05 · Real-World Assets", detail: "Prepare eligible real-world asset workflows and representations." },
  { id: "blockchain", name: "06 · Blockchain", detail: "Integrate chain infrastructure, smart contracts, and indexing." },
  { id: "factory", name: "07 · Factory", detail: "Package, test, certify, replicate, and deploy approved products." }
];

const AGENTS = {
  omega: {
    name: "OMEGA",
    role: "Red-Team Intelligence",
    color: "red",
    purpose: "Challenge assumptions, identify failure conditions, and test system integrity.",
    responsibilities: [
      "Review incoming data and source quality",
      "Identify conflicting or incomplete information",
      "Challenge architecture and workflow assumptions",
      "Run security and risk reviews",
      "Return findings for human review"
    ],
    output: "Risk findings, validation results, and recommendations"
  },
  ares: {
    name: "ARES",
    role: "Execution Engine",
    color: "orange",
    purpose: "Execute approved tasks and coordinate operational workflows.",
    responsibilities: [
      "Receive approved execution instructions",
      "Run authorized processing jobs",
      "Move approved outputs between system stages",
      "Report execution status and errors",
      "Return results to Titan for evaluation"
    ],
    output: "Execution records, task status, and operational results"
  },
  zeus: {
    name: "ZEUS",
    role: "Orchestration Layer",
    color: "purple",
    purpose: "Coordinate agents, systems, workflows, and decision gates.",
    responsibilities: [
      "Receive enterprise-level instructions",
      "Assign tasks to the appropriate system or agent",
      "Coordinate Omega, Ares, and Titan",
      "Manage workflow dependencies",
      "Enforce approval gates before controlled actions"
    ],
    output: "Orchestration plans, routing decisions, and workflow status"
  },
  titan: {
    name: "TITAN",
    role: "Evaluation and Systems Intelligence",
    color: "blue",
    purpose: "Evaluate outcomes, compare expected and actual results, and feed improvements back into the system.",
    responsibilities: [
      "Evaluate refinery outputs",
      "Review factory products and test results",
      "Compare execution results against requirements",
      "Identify performance gaps",
      "Send improvement signals into the feedback loop"
    ],
    output: "Evaluation reports, performance findings, and feedback signals"
  }
};

const MODULES = [
  { name: "Enterprise Architecture", description: "Master architecture and enterprise-wide system registry.", status: "Active" },
  { name: "VENOM Refinery", description: "Data ingress, validation, normalization, enrichment, and release.", status: "Configured" },
  { name: "Software Factory", description: "Engine-to-factory product development and deployment pipeline.", status: "Configured" },
  { name: "Orchestration", description: "ZEUS, ARES, TITAN, and OMEGA coordination.", status: "Configured" },
  { name: "Shelby Chain", description: "Shelby-owned blockchain data model and indexing architecture.", status: "Configured" },
  { name: "VENOM RWA", description: "Real-world asset workflows and product infrastructure.", status: "Configured" },
  { name: "StockD ETF", description: "ETF research, product architecture, and market workspace.", status: "Configured" },
  { name: "IRON DOME", description: "Security, integrity monitoring, and approval controls.", status: "Configured" }
];

const defaultState = {
  page: "dashboard",
  network: "Sui Testnet",
  refineryStatus: {},
  factoryStatus: {},
  activity: [],
  favorites: [],
  search: "",
  selectedAsset: null,
  explorerQuery: ""
};

let state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORE) || "{}") };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORE, JSON.stringify(state));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function go(page) {
  state.page = page;
  state.selectedAsset = null;
  saveState();
  const url = new URL(location.href);
  url.searchParams.set("page", page);
  history.pushState({ page }, "", url);
  render();
}

function logActivity(message) {
  state.activity.unshift({
    message,
    time: new Date().toLocaleString()
  });
  state.activity = state.activity.slice(0, 30);
  saveState();
}

function statusBadge(status) {
  const normalized = String(status || "Configured").toLowerCase();
  return `<span class="status-badge ${escapeHTML(normalized)}">${escapeHTML(status)}</span>`;
}

function panel(title, content, extra = "") {
  return `
    <section class="panel ${extra}">
      <div class="panel-heading"><h3>${title}</h3></div>
      ${content}
    </section>`;
}

function metric(label, value, detail) {
  return `
    <div class="metric-card">
      <span class="metric-label">${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </div>`;
}

function stageCard(stage, index, type) {
  const saved = type === "refinery" ? state.refineryStatus : state.factoryStatus;
  const status = saved[stage.id] || "Configured";
  return `
    <article class="stage-card">
      <div class="stage-top">
        <span class="stage-number">${String(index + 1).padStart(2, "0")}</span>
        ${statusBadge(status)}
      </div>
      <h3>${escapeHTML(stage.name)}</h3>
      <p>${escapeHTML(stage.detail)}</p>
      ${stage.owner ? `<small>Responsible: ${escapeHTML(stage.owner)}</small>` : ""}
      <div class="stage-actions">
        <button class="small-button" data-stage="${stage.id}" data-stage-type="${type}" data-status="Active">Activate</button>
        <button class="small-button secondary" data-stage="${stage.id}" data-stage-type="${type}" data-status="Complete">Complete</button>
      </div>
    </article>`;
}

function pageHeader(title, subtitle) {
  return `
    <div class="page-header">
      <div>
        <div class="eyebrow">SHELBY PREDATOR ENTERPRISE</div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="header-indicator"><span></span> SYSTEM WORKSPACE</div>
    </div>`;
}

function dashboard() {
  return `
    ${pageHeader("Enterprise Command Center", "One enterprise. Multiple factories. One integrated operating architecture.")}
    <div class="hero-panel">
      <div>
        <div class="eyebrow">THE COBRA WAY · 427 PROTOCOL</div>
        <h2>One integrated operating system.</h2>
        <p>Shelby connects enterprise architecture, data refinement, software production, blockchain infrastructure, and intelligent orchestration.</p>
        <button class="primary-button" data-go="architecture">Open Enterprise Architecture</button>
      </div>
      <div class="hero-mark">S<span>／</span>P</div>
    </div>
    <div class="metrics-grid">
      ${metric("ENTERPRISE MODULES", MODULES.length, "Registered systems")}
      ${metric("REFINERY STAGES", REFINERY_STAGES.length, "Data processing pipeline")}
      ${metric("FACTORY STAGES", FACTORY_STAGES.length, "Product creation pipeline")}
      ${metric("INTELLIGENCE AGENTS", 4, "Omega · Ares · Zeus · Titan")}
    </div>
    <div class="dashboard-grid">
      ${panel("Integrated operating architecture", `
        <div class="architecture-flow">
          <div class="flow-node enterprise-node"><b>SHELBY ENTERPRISE</b><small>Command and control</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-node"><b>VENOM REFINERY</b><small>Ingest · Validate · Normalize</small></div>
          <div class="flow-arrow">↓</div>
          <div class="flow-node"><b>SOFTWARE FACTORY</b><small>Engine · Software · System · Network</small></div>
          <div class="flow-arrow">↓</div>
          <div class="agent-flow">
            <span>OMEGA</span><span>ARES</span><span>ZEUS</span><span>TITAN</span>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-node feedback-node"><b>RECURSIVE FEEDBACK</b><small>Evaluate · Improve · Re-enter</small></div>
        </div>
      `)}
      ${panel("Core workspaces", `
        <div class="quick-links">
          <button data-go="refinery"><b>VENOM Refinery</b><small>Open data pipeline →</small></button>
          <button data-go="factory"><b>Software Factory</b><small>Open production pipeline →</small></button>
          <button data-go="orchestration"><b>Intelligence Orchestration</b><small>Open agent command →</small></button>
          <button data-go="security"><b>IRON DOME</b><small>Open security controls →</small></button>
        </div>
      `)}
    </div>
    ${panel("Recent activity", activityList())}`;
}

function activityList() {
  if (!state.activity.length) {
    return `<p class="muted">No activity recorded yet. Activate a stage or run a workspace action to begin.</p>`;
  }
  return `<div class="activity-list">${state.activity.map(item => `
    <div class="activity-row"><span>${escapeHTML(item.message)}</span><small>${escapeHTML(item.time)}</small></div>
  `).join("")}</div>`;
}

function architecturePage() {
  return `
    ${pageHeader("Enterprise Architecture", "The enterprise sits above the Refinery, Factory, and orchestration layer.")}
    <div class="architecture-map">
      <div class="architecture-tier top-tier"><b>SHELBY PREDATOR ENTERPRISE</b><span>The Cobra Way · 427 Protocol</span></div>
      <div class="architecture-tier"><b>IRON DOME</b><span>Security · Integrity · Approval gates</span></div>
      <div class="architecture-columns">
        <div class="architecture-tier"><b>VENOM REFINERY</b><span>Ingress · Validation · Normalization · Enrichment · Indexing</span></div>
        <div class="architecture-tier"><b>SOFTWARE FACTORY</b><span>Engine · Software · System · Network · RWA · Blockchain · Factory</span></div>
      </div>
      <div class="architecture-tier agent-tier">
        <b>INTELLIGENCE AND ORCHESTRATION</b>
        <div class="agent-flow"><span>OMEGA</span><span>ARES</span><span>ZEUS</span><span>TITAN</span></div>
      </div>
      <div class="architecture-tier feedback-node"><b>RECURSIVE FEEDBACK ENGINE</b><span>Results return to the Refinery and Enterprise decision layer.</span></div>
    </div>
    ${panel("Enterprise register", `<div class="module-grid">${MODULES.map(module => `
      <div class="module-card"><h3>${escapeHTML(module.name)}</h3><p>${escapeHTML(module.description)}</p>${statusBadge(module.status)}</div>
    `).join("")}</div>`)}
  `;
}

function refineryPage() {
  return `
    ${pageHeader("VENOM Refinery", "The data-processing system that converts incoming information into validated, normalized, reusable enterprise assets.")}
    <div class="hero-panel compact">
      <div><div class="eyebrow">REFINERY OPERATING MODEL</div><h2>Raw input → trusted output.</h2>
      <p>Provider adapters remain separate from Shelby ingestion, normalization, indexing, Explorer, and consuming workspaces.</p></div>
      <div class="hero-mark">R<span>／</span></div>
    </div>
    <div class="metrics-grid">
      ${metric("PIPELINE STAGES", 7, "Defined refinery stages")}
      ${metric("PRIMARY PROVIDER", "BlockVision", "Provider adapter")}
      ${metric("DATA MODEL", "Shelby", "Enterprise-owned normalization")}
      ${metric("APPROVAL", "Human", "Controlled production gate")}
    </div>
    <div class="stage-grid">${REFINERY_STAGES.map((stage, i) => stageCard(stage, i, "refinery")).join("")}</div>
    ${panel("Provider and ingestion boundary", `
      <div class="architecture-columns">
        <div class="info-card"><h3>Provider adapters</h3><p>BlockVision primary integration, alternate public providers, and future self-hosted sources.</p></div>
        <div class="info-card"><h3>Shelby ingestion</h3><p>Owns the intake process, normalized data model, indexing pipeline, and downstream data contracts.</p></div>
      </div>
      <p class="muted">Provider connectivity is configured separately. This interface does not claim a live provider connection.</p>
    `)}
  `;
}

function factoryPage() {
  return `
    ${pageHeader("Software Factory", "VEG · VENOM Enterprise Genesis. Transform approved inputs into tested and deployable products.")}
    <div class="hero-panel compact">
      <div><div class="eyebrow">ENGINE → FACTORY</div><h2>One production pipeline. Multiple outputs.</h2>
      <p>The Factory receives approved refinery outputs and turns them into software, systems, networks, RWA workflows, and blockchain products.</p></div>
      <div class="hero-mark">F<span>／</span></div>
    </div>
    <div class="metrics-grid">
      ${metric("GENESIS STAGES", 7, "Engine to Factory")}
      ${metric("QUALITY GATE", "Required", "Testing and review")}
      ${metric("RELEASE CONTROL", "Approval", "Human decision gate")}
      ${metric("FEEDBACK", "Recursive", "Factory to Refinery")}
    </div>
    <div class="stage-grid">${FACTORY_STAGES.map((stage, i) => stageCard(stage, i, "factory")).join("")}</div>
    ${panel("Factory operating rules", `
      <ul class="operating-list">
        <li>Every product starts with a defined requirement and source.</li>
        <li>Every system passes validation and testing before release.</li>
        <li>Production changes require an explicit approval gate.</li>
        <li>Factory results are evaluated by Titan and challenged by Omega.</li>
        <li>Approved lessons return to the Refinery through the feedback engine.</li>
      </ul>
    `)}
  `;
}

function orchestrationPage() {
  return `
    ${pageHeader("Intelligence Orchestration", "ZEUS coordinates the agents. ARES executes approved work. TITAN evaluates. OMEGA challenges.")}
    <div class="orchestration-hub">
      <div class="hub-center"><span>ZEUS</span><small>Orchestration layer</small></div>
      <div class="hub-agents">
        <button data-go="omega"><b>OMEGA</b><small>Red-team review</small></button>
        <button data-go="ares"><b>ARES</b><small>Execution engine</small></button>
        <button data-go="titan"><b>TITAN</b><small>Evaluation engine</small></button>
      </div>
      <div class="hub-feedback">RECURSIVE FEEDBACK → REFINERY → FACTORY</div>
    </div>
    <div class="agent-grid">
      ${Object.keys(AGENTS).map(key => agentCard(key)).join("")}
    </div>
    ${panel("Operating sequence", `
      <div class="sequence-list">
        <div><b>01 · ZEUS</b><span>Receives the instruction and coordinates the workflow.</span></div>
        <div><b>02 · OMEGA</b><span>Reviews risks, assumptions, and validation requirements.</span></div>
        <div><b>03 · ARES</b><span>Executes only authorized tasks.</span></div>
        <div><b>04 · TITAN</b><span>Evaluates outputs and compares results with requirements.</span></div>
        <div><b>05 · ZEUS</b><span>Routes results for approval, release, or rework.</span></div>
        <div><b>06 · FEEDBACK</b><span>Returns approved lessons to the Refinery and Factory.</span></div>
      </div>
      <p class="muted">This is the designed workflow. The agents are represented as workspace roles here; autonomous model execution is not connected by this frontend alone.</p>
    `)}
  `;
}

function agentCard(key) {
  const agent = AGENTS[key];
  return `
    <article class="agent-card ${agent.color}">
      <div class="agent-card-top"><span class="agent-symbol">${agent.name.slice(0, 1)}</span>${statusBadge("Configured")}</div>
      <div class="eyebrow">${escapeHTML(agent.role)}</div>
      <h2>${agent.name}</h2>
      <p>${escapeHTML(agent.purpose)}</p>
      <button class="primary-button" data-go="${key}">Open ${agent.name}</button>
    </article>`;
}

function agentPage(key) {
  const agent = AGENTS[key];
  return `
    ${pageHeader(`${agent.name} · ${agent.role}`, agent.purpose)}
    <div class="agent-detail ${agent.color}">
      <div class="agent-symbol large">${agent.name.slice(0, 1)}</div>
      <div><div class="eyebrow">SHELBY INTELLIGENCE SYSTEM</div><h2>${agent.name}</h2><p>${escapeHTML(agent.purpose)}</p></div>
    </div>
    ${panel("Responsibilities", `<ul class="operating-list">${agent.responsibilities.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`)}
    ${panel("Expected output", `<div class="output-card">${escapeHTML(agent.output)}</div>`)}
    ${panel("Agent control", `
      <p class="muted">This workspace defines the agent's responsibilities and its place in the Shelby operating model. No external model is being invoked by these controls.</p>
      <button class="primary-button" data-agent-log="${key}">Record agent review request</button>
      <button class="secondary-button" data-go="orchestration">Return to Orchestration</button>
    `)}
  `;
}

function marketTable(items, kind) {
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>Symbol</th><th>Name</th><th>${kind === "stocks" ? "Sector" : "Category"}</th><th>Data status</th><th>Action</th></tr></thead>
      <tbody>${items.map(item => `
        <tr>
          <td><b>${escapeHTML(item.symbol)}</b></td>
          <td>${escapeHTML(item.name)}</td>
          <td>${escapeHTML(item.sector || item.category)}</td>
          <td>${statusBadge("Demo data")}</td>
          <td><button class="small-button" data-favorite="${escapeHTML(item.symbol)}">☆ Watch</button></td>
        </tr>`).join("")}
      </tbody>
    </table></div>
    <p class="muted">Market prices are not supplied by this demonstration list. Connect a market-data provider before displaying live quotes.</p>
  `;
}

function stocksPage() {
  const filtered = STOCKS.filter(item =>
    `${item.symbol} ${item.name} ${item.sector}`.toLowerCase().includes(state.search.toLowerCase())
  );
  return `
    ${pageHeader("Stocks", "Equity research and market workspace.")}
    <div class="toolbar"><input id="market-search" value="${escapeHTML(state.search)}" placeholder="Search stocks..." /><span>${filtered.length} instruments</span></div>
    ${panel("Equity universe", marketTable(filtered, "stocks"))}
  `;
}

function etfsPage() {
  const filtered = ETFS.filter(item =>
    `${item.symbol} ${item.name} ${item.category}`.toLowerCase().includes(state.search.toLowerCase())
  );
  return `
    ${pageHeader("ETF Center", "Exchange-traded fund research and product workspace.")}
    <div class="toolbar"><input id="market-search" value="${escapeHTML(state.search)}" placeholder="Search ETFs..." /><span>${filtered.length} funds</span></div>
    ${panel("ETF universe", marketTable(filtered, "etfs"))}
  `;
}

function portfolioPage() {
  return `
    ${pageHeader("Portfolio", "Portfolio workspace and watchlist.")}
    ${panel("Watchlist", state.favorites.length
      ? `<div class="tag-list">${state.favorites.map(item => `<span>${escapeHTML(item)}</span>`).join("")}</div>`
      : `<p class="muted">Your watchlist is empty. Add symbols from Stocks or ETF Center.</p>`)}
  `;
}

function cryptoPage() {
  return `
    ${pageHeader("Digital Assets", "Digital asset market workspace.")}
    ${panel("Asset coverage", `
      <div class="module-grid">
        <div class="module-card"><h3>Bitcoin</h3><p>BTC · Digital asset</p>${statusBadge("Provider required")}</div>
        <div class="module-card"><h3>Ethereum</h3><p>ETH · Smart contract network</p>${statusBadge("Provider required")}</div>
        <div class="module-card"><h3>SUI</h3><p>SUI · Sui network asset</p>${statusBadge("Provider required")}</div>
        <div class="module-card"><h3>VENOM</h3><p>VENOM · Network asset</p>${statusBadge("Provider required")}</div>
      </div>
    `)}
  `;
}

function explorerPage() {
  return `
    ${pageHeader("Blockchain Explorer", "Search and inspect blockchain data through Shelby's normalized data layer.")}
    <div class="search-panel">
      <input id="explorer-search" value="${escapeHTML(state.explorerQuery)}" placeholder="Enter transaction digest, address, or object ID" />
      <button class="primary-button" data-explorer-search>Search</button>
    </div>
    ${panel("Network selector", `
      <div class="network-selector">${NETWORKS.map(network => `
        <button class="${state.network === network.name ? "selected" : ""}" data-network="${escapeHTML(network.name)}">
          <b>${escapeHTML(network.name)}</b><small>${escapeHTML(network.environment)}</small>
        </button>`).join("")}
      </div>
    `)}
    ${panel("Explorer connection", `
      <p>Selected network: <b>${escapeHTML(state.network)}</b></p>
      <p class="muted">The Explorer interface is ready for a server-side provider adapter. No live transaction lookup is claimed until that backend is connected.</p>
    `)}
  `;
}

function shelbyPage() {
  return `
    ${pageHeader("Shelby Chain", "Shelby-owned blockchain data architecture and normalized indexing layer.")}
    <div class="metrics-grid">
      ${metric("NETWORKS", NETWORKS.length, "Configured network records")}
      ${metric("PRIMARY INDEX", "Shelby", "Enterprise-owned")}
      ${metric("PROVIDER MODEL", "Hybrid", "Primary, alternate, self-hosted")}
      ${metric("ENVIRONMENTS", 2, "Testnet and Mainnet")}
    </div>
    ${panel("Network register", `<div class="table-wrap"><table><thead><tr><th>Network</th><th>Protocol</th><th>Environment</th><th>Status</th></tr></thead><tbody>
      ${NETWORKS.map(item => `<tr><td>${escapeHTML(item.name)}</td><td>${escapeHTML(item.network)}</td><td>${escapeHTML(item.environment)}</td><td>${statusBadge(item.status)}</td></tr>`).join("")}
    </tbody></table></div>`)}
    ${panel("Data architecture", `
      <div class="architecture-columns">
        <div class="info-card"><h3>Provider adapters</h3><p>BlockVision primary, alternate public providers, and future self-hosted endpoints.</p></div>
        <div class="info-card"><h3>Shelby indexing</h3><p>Ingestion, normalized records, indexing, query services, and Explorer.</p></div>
      </div>
    `)}
  `;
}

function rwaPage() {
  return `
    ${pageHeader("VENOM RWA Platform", "Real-world asset workflows connected to the Shelby Factory.")}
    <div class="module-grid">
      ${["Asset onboarding", "Identity and compliance", "Tokenization workflow", "Asset registry", "Settlement interfaces", "Reporting and audit"].map(name => `
        <div class="module-card"><h3>${name}</h3><p>Factory module and workflow definition.</p>${statusBadge("Configured")}</div>
      `).join("")}
    </div>
  `;
}

function stockdPage() {
  return `
    ${pageHeader("StockD ETF", "ETF product architecture and research workspace.")}
    ${panel("Product definition", `
      <div class="info-card"><h3>StockD</h3><p>ETF product workspace connected to market research, portfolio analysis, risk review, and enterprise reporting.</p>${statusBadge("Configured")}</div>
    `)}
  `;
}

function providersPage() {
  return `
    ${pageHeader("Data Providers", "External sources connect through adapters, not directly into the normalized data model.")}
    <div class="module-grid">
      <div class="module-card"><h3>BlockVision</h3><p>Primary blockchain data integration candidate.</p>${statusBadge("Configured")}</div>
      <div class="module-card"><h3>Alternate public providers</h3><p>Secondary sources and redundancy.</p>${statusBadge("Planned")}</div>
      <div class="module-card"><h3>Self-hosted providers</h3><p>Future infrastructure and direct node access.</p>${statusBadge("Planned")}</div>
      <div class="module-card"><h3>Market data API</h3><p>Separate provider required for stocks and ETFs.</p>${statusBadge("Required")}</div>
    </div>
  `;
}

function indexingPage() {
  return `
    ${pageHeader("Shelby Indexing Engine", "Shelby owns its indexing engine and normalized data model.")}
    <div class="architecture-flow">
      ${["Provider adapters", "Ingestion", "Validation", "Normalization", "Indexing", "Explorer and APIs", "Consuming workspaces"].map((item, index) => `
        <div class="flow-node"><b>${String(index + 1).padStart(2, "0")} · ${item}</b></div>${index < 6 ? `<div class="flow-arrow">↓</div>` : ""}
      `).join("")}
    </div>
  `;
}

function feedbackPage() {
  return `
    ${pageHeader("Recursive Feedback Engine", "The enterprise learns from refinery, factory, and agent outcomes.")}
    <div class="architecture-flow">
      <div class="flow-node"><b>REFINERY OUTPUT</b><small>Validated data and normalized records</small></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-node"><b>FACTORY OUTPUT</b><small>Products, tests, and deployment results</small></div>
      <div class="flow-arrow">↓</div>
      <div class="agent-flow"><span>OMEGA</span><span>ARES</span><span>ZEUS</span><span>TITAN</span></div>
      <div class="flow-arrow">↓</div>
      <div class="flow-node feedback-node"><b>EVALUATION AND IMPROVEMENT</b><small>Findings, lessons, and approved changes</small></div>
      <div class="flow-arrow">↺</div>
      <div class="flow-node"><b>REFINERY / FACTORY RE-ENTRY</b><small>Controlled improvement cycle</small></div>
    </div>
    ${panel("Feedback activity", activityList())}
  `;
}

function securityPage() {
  return `
    ${pageHeader("IRON DOME", "Security, integrity, review, and controlled execution across Shelby.")}
    <div class="metrics-grid">
      ${metric("REVIEW", "OMEGA", "Challenge and validation")}
      ${metric("COORDINATION", "ZEUS", "Workflow controls")}
      ${metric("EXECUTION", "ARES", "Authorized operations")}
      ${metric("EVALUATION", "TITAN", "Outcome review")}
    </div>
    ${panel("Security principles", `
      <ul class="operating-list">
        <li>Separate external provider access from internal systems.</li>
        <li>Validate data before it enters trusted indexes.</li>
        <li>Use explicit permissions for execution tasks.</li>
        <li>Require human approval for controlled production actions.</li>
        <li>Log decisions, results, failures, and review outcomes.</li>
      </ul>
    `)}
  `;
}

function adminPage() {
  return `
    ${pageHeader("Administration", "Workspace state, configuration, and operational records.")}
    ${panel("Workspace configuration", `
      <p>Saved locally in this browser under <code>${STORE}</code>.</p>
      <button class="secondary-button" data-reset>Reset local workspace state</button>
    `)}
    ${panel("Current activity", activityList())}
  `;
}

function renderPage() {
  switch (state.page) {
    case "dashboard": return dashboard();
    case "architecture": return architecturePage();
    case "refinery": return refineryPage();
    case "factory": return factoryPage();
    case "orchestration": return orchestrationPage();
    case "omega":
    case "ares":
    case "zeus":
    case "titan": return agentPage(state.page);
    case "stocks": return stocksPage();
    case "etfs": return etfsPage();
    case "portfolio": return portfolioPage();
    case "crypto": return cryptoPage();
    case "explorer": return explorerPage();
    case "shelby": return shelbyPage();
    case "rwa": return rwaPage();
    case "stockd": return stockdPage();
    case "providers": return providersPage();
    case "indexing": return indexingPage();
    case "feedback": return feedbackPage();
    case "security": return securityPage();
    case "admin": return adminPage();
    default: return dashboard();
  }
}

function sidebar() {
  const groups = [...new Set(NAV.map(item => item.group))];
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">S</div>
        <div><b>SHELBY</b><small>PREDATOR ENTERPRISE</small></div>
      </div>
      <div class="sidebar-scroll">
        ${groups.map(group => `
          <div class="nav-group">
            <div class="nav-heading">${escapeHTML(group)}</div>
            ${NAV.filter(item => item.group === group).map(item => `
              <button class="nav-item ${state.page === item.id ? "active" : ""}" data-go="${item.id}">
                <span class="nav-dot"></span>${escapeHTML(item.label)}
              </button>
            `).join("")}
          </div>
        `).join("")}
      </div>
      <div class="sidebar-footer"><span class="online-dot"></span> WORKSPACE READY</div>
    </aside>`;
}

function shell(content) {
  return `
    <div class="app-shell">
      ${sidebar()}
      <main class="main-area">
        <header class="topbar">
          <div><span class="topbar-label">SHELBY /</span> ${escapeHTML(state.page.toUpperCase())}</div>
          <div class="topbar-right"><span class="online-dot"></span> LOCAL WORKSPACE</div>
        </header>
        <div class="page-content">${content}</div>
        <footer class="app-footer">THE COBRA WAY · 427 PROTOCOL · SHELBY PREDATOR ENTERPRISE</footer>
      </main>
    </div>`;
}

function render() {
  app.innerHTML = shell(renderPage());
  bindEvents();
}

function bindEvents() {
  app.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => go(button.dataset.go));
  });

  app.querySelectorAll("[data-stage]").forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.stageType;
      const stage = button.dataset.stage;
      const status = button.dataset.status;
      const target = type === "refinery" ? state.refineryStatus : state.factoryStatus;
      target[stage] = status;
      logActivity(`${type.toUpperCase()} stage ${stage} marked ${status}.`);
      render();
    });
  });

  app.querySelectorAll("[data-agent-log]").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.agentLog;
      logActivity(`${AGENTS[key].name} review request recorded.`);
      render();
    });
  });

  app.querySelectorAll("[data-network]").forEach(button => {
    button.addEventListener("click", () => {
      state.network = button.dataset.network;
      saveState();
      render();
    });
  });

  app.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", () => {
      const symbol = button.dataset.favorite;
      state.favorites = state.favorites.includes(symbol)
        ? state.favorites.filter(item => item !== symbol)
        : [...state.favorites, symbol];
      saveState();
      logActivity(`${symbol} watchlist updated.`);
      render();
    });
  });

  const search = app.querySelector("#market-search");
  if (search) {
    search.addEventListener("input", event => {
      const position = event.target.selectionStart;
      state.search = event.target.value;
      saveState();
      render();
      const next = app.querySelector("#market-search");
      next?.focus();
      next?.setSelectionRange(position, position);
    });
  }

  const explorerInput = app.querySelector("#explorer-search");
  if (explorerInput) {
    explorerInput.addEventListener("input", event => {
      state.explorerQuery = event.target.value;
      saveState();
    });
  }

  app.querySelector("[data-explorer-search]")?.addEventListener("click", () => {
    logActivity(`Explorer lookup requested on ${state.network}: ${state.explorerQuery || "empty query"}.`);
    render();
  });

  app.querySelector("[data-reset]")?.addEventListener("click", () => {
    localStorage.removeItem(STORE);
    state = { ...defaultState };
    logActivity("Local workspace state reset.");
    render();
  });
}

window.addEventListener("popstate", () => {
  const page = new URL(location.href).searchParams.get("page");
  state.page = NAV.some(item => item.id === page) ? page : "dashboard";
  render();
});

const initialPage = new URL(location.href).searchParams.get("page");
if (NAV.some(item => item.id === initialPage)) state.page = initialPage;

render();





  









