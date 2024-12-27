// Função para scroll suave até a seção de preços
function scrollToPrice() {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Funções do modal
window.showModal = function(plan) {
  const modal = document.getElementById('modal');
  const selectedPlan = document.getElementById('selected-plan');
  modal.style.display = 'block';
  selectedPlan.textContent = plan;
}

window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Fechar modal quando clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Manipulador do formulário
document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado por sua compra! Em breve você receberá mais informações por email.');
  closeModal();
});

// Animação suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});