
# TREE_DATA_STRUCTURES_CHALLENGE
## Demo

### The UI without any expanded folder
![App Screenshot]([https://github.com/BenMradB/React_Challenges/Tree_Data_Structures/blob/master/public/images/UI_Where_Folders_Not_Expanded.PNG?raw=true](https://github.com/BenMradB/React_Challenges/blob/master/Tree_Data_Structures/public/images/UI_Where_Folders_Not_Expanded.PNG?raw=true))

### The UI with expanded folders
![App Screenshot](https://github.com/BenMradB/React_Challenges/Tree_Data_Structures/blob/master/public/images/UI_Where_Folders_R_Expanded.PNG?raw=true)




## Installation

Install TREE_DATA_STRUCTURES_CHALLENGE with npm
### Cloning `TREE_DATA_STRUCTURES_CHALLENGE` project : create new folder in your system machine and be located in that folder and type : 

```bash
  git clone https://github.com/BenMradB/TREE_DATA_STRUCTURES_CHALLENGE.git
  cd TREE_DATA_STRUCTURES_CHALLENGE
```
### Installing the necessary dependencies
```bash
  npm install
```

### Run the project
```bash
  npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
