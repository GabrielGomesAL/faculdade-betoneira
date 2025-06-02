# 📱 App de Aluguel de Betoneiras

Este projeto é um aplicativo mobile desenvolvido em React Native com Firebase, destinado à **gestão e aluguel de betoneiras** de forma prática, rápida e segura. Usuários podem visualizar equipamentos disponíveis, fazer login e gerenciar pedidos em tempo real.

---

## 🚀 Funcionalidades

- 🔐 **Autenticação de usuários** (Login/Logout)
- 🛠️ **Visualização de betoneiras disponíveis**
- 🧾 **Cadastro e gerenciamento de aluguéis**
- 📊 **Dashboard com resumo das operações**
- 🌐 **Integração com Firebase (Auth e Firestore)**
- 🌀 **Indicador de carregamento com UX fluída**

---

## 🗂️ Estrutura do Projeto

.
├── App.js # Componente principal
├── AppNavigator.js # Navegação entre telas
├── BetoneiraCard.js # Componente de visualização de betoneiras
├── DashboardScreen.js # Tela principal com dados e aluguéis
├── LoadingIndicator.js # Componente de carregamento
├── LoginScreen.js # Tela de login
├── useAuth.js # Hook de autenticação
├── useBetoneiras.js # Hook para dados das betoneiras
├── firebaseConfig.js # Configuração do Firebase
├── index.js # Entrada do app
├── app.json # Configurações do Expo
├── package.json # Dependências e scripts
├── .gitignore # Arquivos ignorados pelo Git
└── README.md # Documentação
