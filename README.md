
<p align="center">
<img alt="React Native Template" src="https://user-images.githubusercontent.com/18753861/152808707-639c2582-a945-4f25-b289-74c7b3d0fc3b.png" />
</p>

<h1 align="center">
  React Native Template
</h1>

<p align="center">
  <a href="https://github.com/diegobugs/react-native-template/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native Template is released under the MIT license." />
  </a>
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/diegobugs/react-native-template">
  <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/diegobugs/react-native-template/total">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/diegobugs/react-native-template?style=social">
</p>

📱 A template for your next React Native projects.
It is prepared with some of my basics dependencies and cool features: Typescript, react-navigation, Redux toolkit, Redux persist using MMKV.

### 💎 Features
- ✅ Last React Native version
- 🔭 Type checking [TypeScript](https://www.typescriptlang.org/)
- ⚙️ Clean project structure with Absolute Imports
- ☂️ [React Navigation](https://reactnavigation.org/)

### 🕹 How to use it

Start your project using my template by running this command:

```shell
npx react-native init SomeApp --template https://github.com/diegobugs/react-native-template.git
```

Project structure

```sh
src
├── components          # UI components with Atomic Design
│   ├── atoms
│   │   ├── Text
│   │   └── index.tsx
│   ├── molecules
│   ├── organisms
│   └── index.tsx       
├── navigator             # Navigation, main stack
│   ├── Navigator.tsx
│   └── index.ts
├── screens                # App screens
│   ├── HomeScreen
│   └── index.tsx
├── store                # Redux store
│   ├── Settings
│   ├── Store
│   │   ├── reduxStorage.tsx
│   │   ├── store.ts
│   │   └── index.ts    
│   └── index.ts    
└── utils                    # ui utils and theming
    ├── Theme
    ├── constants.tsx
    ├── index.tsx
    └── types.ts
```

### 🔖 License

This project is MIT licensed.

React Native Template image by
<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a>
