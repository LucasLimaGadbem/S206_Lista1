# 🧪 S206 - Lista 1  

Repositório referente à **Lista 1 da disciplina de Qualidade de Software (S206)**.  
O objetivo deste projeto é realizar **testes End-to-End (E2E)** utilizando o **Cypress**, aplicando os conceitos aprendidos em aula.  

---

## 📘 Aula 3 - Lista 1  

Neste exercício foram desenvolvidos **casos de teste automatizados** em Cypress, com o intuito de validar o funcionamento de um website real.  
O projeto também está configurado para **gerar relatórios de execução** dos testes, permitindo análise detalhada dos resultados.  

---

## ⚙️ Instalação das dependências  

Antes de rodar os testes, instale as dependências do projeto executando:  

```bash
npm install
```

---

## 🚀 Como abrir o Cypress

Para abrir a interface interativa do Cypress e visualizar os testes manualmente:

```bash
./node_modules/.bin/cypress open
```

---

## 🧭 Como rodar os testes via terminal

Para executar todos os testes automaticamente, sem abrir a interface do Cypress:

```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

---

## 🧾 Geração de relatórios com Mochawesome

O projeto utiliza o mochawesome para geração automática de relatórios após a execução dos testes.

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

---