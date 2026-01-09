# 🚗💼 Simulador de Seguro de Veículos

Projeto desenvolvido para simular a **análise e aprovação de seguro automotivo**, utilizando dados reais de **CEP** e **Tabela FIPE**, consumidos via **BrasilAPI**.

📌 Projeto focado em **consumo de APIs**, **lógica condicional** e **integração Front-end**.

---

## 🔗 Demo do Projeto

<p align="center">
  <a href="https://venerable-fairy-f880a9.netlify.app/" target="_blank">
    🚀 <strong>Acesse a simulação online</strong>
  </a>
</p>

---

## 🧠 Como funciona a simulação

1. 📍 O usuário informa um **CEP**
2. 🌎 O sistema consulta a **BrasilAPI** e retorna:
   - Rua  
   - Bairro  
   - Cidade  
3. 🚘 O usuário informa o **código FIPE**
4. 💰 O sistema consulta a **Tabela FIPE** e obtém:
   - Modelo do veículo  
   - Ano  
   - Valor de mercado  
5. ✅ O sistema analisa e decide se o seguro é aprovado ou não

---

## ⚙️ Regras de Negócio

```text
Se:
- Cidade === "Rio de Janeiro"
E
- Valor do veículo > R$ 30.000

➡️ Seguro APROVADO ✅
Caso contrário:
➡️ Seguro RECUSADO ❌
```
🛠️ Tecnologias Utilizadas

🌐 HTML5 — Estrutura da aplicação

🎨 Bootstrap 5 — Alerts e layout responsivo

⚡ JavaScript (ES6) — Lógica da aplicação

🔄 jQuery — Manipulação do DOM e requisições AJAX

🌍 BrasilAPI — Dados reais:

API de CEP

API da Tabela FIPE
