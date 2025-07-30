# Informa Solutions - E-commerce de Software

Este é um e-commerce multilíngue desenvolvido com **React + Vite** e integrado à **Paddle** para gestão de pagamentos. Suporta inglês, português e espanhol.

## 🔗 Funcionalidades

- 🌐 Suporte a múltiplos idiomas (i18next)
- 🔒 Área administrativa protegida com login (senha: `admin123`)
- 💳 Integração com Paddle (checkout, contratos, faturas)
- 📦 Cadastro e exibição de softwares (nome, descrição, preço, desconto, valor líquido)
- 📱 Totalmente responsivo

## 🚀 Scripts disponíveis

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build para produção
npm run preview  # pré-visualização da build
```

## 🔐 Área Admin

- Acesse `/admin`
- Digite a senha: `admin123`
- Formulário de cadastro de software é exibido após login

## 🌍 Estrutura de Idiomas

Arquivos localizados em `/src/locales/`:

- `pt/common.json`
- `en/common.json`
- `es/common.json`

A linguagem é detectada automaticamente via navegador.

## 🧾 Dependências principais

- `react`, `react-dom`
- `react-router-dom`
- `vite`
- `@vitejs/plugin-react`
- `i18next`, `react-i18next`

## 🛠 Deploy

Projeto pronto para deploy no [Vercel](https://vercel.com/), basta conectar seu repositório.

---

© Informa Solutions
