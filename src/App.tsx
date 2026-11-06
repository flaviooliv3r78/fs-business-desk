
import './App.css'

function App() {
  return (
    <div className="app-container">

      {/* Menu lateral */}
      <aside className="sidebar">
        <div className="brand">
          <h2>FS <span>Business Desk</span></h2>
          <p>Gestão inteligente</p>
        </div>

        <nav className="menu">
          <p className="menu-label">MENU PRINCIPAL</p>

          <a className="menu-item active" href="#">
            <span>▦</span> Dashboard
          </a>

          <a className="menu-item" href="#">
            <span>♙</span> Clientes
          </a>

          <a className="menu-item" href="#">
            <span>▤</span> Implantações
          </a>

          <a className="menu-item" href="#">
            <span>◷</span> Chamados técnicos
          </a>
        </nav>

        <div className="sidebar-footer">
          FS Business Desk · Versão 1.0
        </div>
      </aside>

      {/* Área principal */}
      <main className="main-content">

        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Visão geral da operação</p>
          </div>

          <div className="user-profile">
            <div className="avatar">FS</div>
            <span>Administrador</span>
          </div>
        </header>

        <section className="welcome">
          <h2>Bem-vindo ao FS Business Desk</h2>
          <p>
            Acompanhe clientes, implantações e atendimentos
            em um único lugar.
          </p>
        </section>

        {/* Indicadores */}
        <section className="metrics">

          <div className="metric-card">
            <p>Clientes ativos</p>
            <h3>12</h3>
            <span>Base cadastrada</span>
          </div>

          <div className="metric-card">
            <p>Chamados abertos</p>
            <h3>08</h3>
            <span>Atendimentos pendentes</span>
          </div>

          <div className="metric-card">
            <p>Implantações</p>
            <h3>04</h3>
            <span>Em andamento</span>
          </div>

          <div className="metric-card">
            <p>Chamados resolvidos</p>
            <h3>36</h3>
            <span>Dados demonstrativos</span>
          </div>

        </section>

        <section className="activity-card">
          <h2>Atividade recente</h2>
          <p>As atividades dos clientes e chamados aparecerão aqui.</p>
        </section>

      </main>
    </div>
  )
}

export default App
