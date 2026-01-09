# 🚗💼 Simulador de Seguro de Veículos

Projeto desenvolvido com o objetivo de simular a **análise e aprovação de um seguro de veículo**, utilizando dados reais de **CEP** e **Tabela FIPE**, consumidos via API pública.
## 🧠 Como funciona a simulação

O sistema realiza os seguintes passos:

1. 📍 O usuário informa um **CEP**
2. 🌎 O sistema consulta a **BrasilAPI** e obtém:
   - Rua  
   - Bairro  
   - Cidade  
3. 🚘 O usuário informa o **código FIPE** do veículo
4. 💰 O sistema consulta a **Tabela FIPE** via BrasilAPI e obtém:
   - Modelo do veículo  
   - Ano  
   - Valor de mercado  
5. ✅ O seguro é **aprovado ou recusado** com base nas regras:
   - O veículo deve valer **mais de R$ 30.000**
   - A cidade deve ser **Rio de Janeiro**

---

## ⚙️ Regras de Negócio Implementadas

```
Se:
- Cidade === "Rio de Janeiro"
E
- Valor do veículo > R$ 30.000

➡️ Seguro APROVADO ✅
Caso contrário:
➡️ Seguro RECUSADO ❌
```
<a href="https://venerable-fairy-f880a9.netlify.app/"> Acesse aqui</a>


