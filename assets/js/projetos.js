function projetos(section) {
  section.innerHTML = `<header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">
        <div class="card">
          <h3>Proticket</h3>
          <div class="img-wrapper">
            <img
              src="./assets/images/projects/proticket.png"
              alt="PNG do Proticket."
            />

          </div>
          <p>
            Desenvolvido e modificado para funcionar como plataforma de Whatsapp Multiusuário com CRM.
          </p>
          <p>HTML - CSS - JS - JSON - PHP - MYSQL</p>
        </div>
        <div class="card">
          <h3>Gestor Financeiro</h3>
          <div class="img-wrapper">
            <img
              src="./assets/images/projects/gestorfin.png"
              alt="Imagem tema do projeto de Gestão de finanças."
            />
            
          </div>
          <p>
            Gestor Financeiro simples, porém eficiente.
          </p>
          <p>HTML - CSS - JS - PHP - MYSQL</p>
        </div>
        
      </div>
    </div>`;
}

export { projetos };
