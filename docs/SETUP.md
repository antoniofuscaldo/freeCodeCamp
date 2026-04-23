# Setup Completo Repository

Questa guida descrive in modo dettagliato come configurare e usare la repository in modo coerente su macOS, Linux e Windows.

Obiettivo principale: avere un ambiente riproducibile, con qualità del codice uniforme tra JavaScript/TypeScript e Python, indipendentemente dal dispositivo usato.

## 1) Stack Tecnologico Attuale

- Node.js 22
- pnpm 10
- Turborepo 2
- ESLint + Prettier per JavaScript/TypeScript
- Ruff per Python (lint + format)
- Husky + lint-staged + commitlint per quality gate Git

File di configurazione principali:

- `package.json`
- `turbo.json`
- `pnpm-workspace.yaml`
- `eslint.config.js`
- `.prettierrc.mjs`
- `pyproject.toml`
- `.lintstagedrc`
- `.husky/pre-commit`
- `.husky/pre-push`
- `.husky/commit-msg`
- `commitlint.config.js`
- `.editorconfig`
- `.vscode/settings.json`

## 2) Prerequisiti

Assicurati di avere installato:

1. Git
2. fnm (Fast Node Manager)
3. Python 3.14+

Versioni richieste dal progetto:

- Node: `>=22.0.0 <23.0.0`
- pnpm: `>=10.0.0`

## 3) Setup Iniziale (Nuova Macchina)

### 3.1 Clona la repository

```bash
git clone https://github.com/antoniofuscaldo/freeCodeCamp.git
cd freeCodeCamp
```

### 3.2 Configura Node con fnm

Assicurati che fnm sia inizializzato nella tua shell.

Esempio per zsh:

```bash
echo 'eval "$(fnm env --use-on-cd --shell zsh)"' >> ~/.zshrc
exec zsh
```

Poi attiva la versione Node del progetto:

```bash
fnm use
node -v
```

Il comando deve restituire una versione 22.x.

### 3.3 Installa dipendenze Node

```bash
pnpm install
```

### 3.4 Crea e configura ambiente Python locale

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install ruff
```

Nota Windows (PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install ruff
```

### 3.5 Normalizzazione iniziale del codice

Al primo setup, per allineare la baseline locale:

```bash
pnpm run turbo:format
pnpm run lint:fix
```

## 4) Workflow Quotidiano

### 4.1 Comandi principali

Formattazione completa (JS/TS + Python):

```bash
pnpm run turbo:format
```

Check formattazione completo:

```bash
pnpm run turbo:format:check
```

Lint completo:

```bash
pnpm run turbo:lint
```

Lint fix completo:

```bash
pnpm run turbo:lint:fix
```

Pulizia artefatti:

```bash
pnpm run turbo:clean
```

### 4.2 Comandi linguaggio-specifici

JavaScript/TypeScript:

```bash
pnpm run format:javascript
pnpm run format:check:javascript
pnpm run lint:javascript
pnpm run lint:fix:javascript
```

Python:

```bash
pnpm run format:python
pnpm run format:check:python
pnpm run lint:python
pnpm run lint:fix:python
```

## 5) Quality Gates Git (Automatizzati)

### 5.1 Pre-commit

Hook: `.husky/pre-commit`

Esegue:

1. `pnpm run turbo:pre-commit`

Attualmente `turbo:pre-commit` esegue `lint-staged`, quindi controlla solo i file staged.

### 5.2 Pre-push

Hook: `.husky/pre-push`

Esegue:

1. `pnpm run turbo:pre-push`

Attualmente `turbo:pre-push` esegue:

1. `pnpm run lint`
2. `pnpm run format:check`

### 5.3 Commit message lint

Hook: `.husky/commit-msg`

Esegue commitlint con regole Conventional Commits da `commitlint.config.js`.

Tipi consentiti:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert

Esempi validi:

- `feat: add python formatting workflow`
- `fix: correct turbo pre-push script`
- `docs: update setup instructions`

## 6) Configurazione Editor Consigliata

La repository include impostazioni VS Code in `.vscode/settings.json`:

- formatOnSave abilitato
- Prettier come formatter default globale
- Python con indentazione 4 spazi
- ESLint fix on save esplicito

Estensioni consigliate in `.vscode/extensions.json`:

- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- editorconfig.editorconfig

Consigliato aggiungere anche:

- charliermarsh.ruff
- ms-python.python

## 7) Struttura Monorepo

Workspace dichiarato in `pnpm-workspace.yaml`:

- root (`.`)
- `src/**`

Pipeline Turbo dichiarata in `turbo.json` con task repository-level per lint/format/check/clean.

## 8) Troubleshooting

### Errore engine Node non compatibile

Sintomo: warning su versione Node.

Fix:

```bash
fnm use
node -v
```

### Ruff non trovato

Sintomo: `ruff: command not found`.

Fix:

```bash
source .venv/bin/activate
python -m pip install ruff
```

### Compatibilita Windows per script Python

Attualmente alcuni script in `package.json` e `.lintstagedrc` usano il path Unix `.venv/bin/python`.

Su Windows hai tre opzioni:

1. usare WSL (consigliato),
2. usare Git Bash con ambiente compatibile Unix,
3. adattare localmente gli script al path `.venv\\Scripts\\python`.

### Hook Husky non eseguiti

Verifica:

```bash
git config --get core.hooksPath
```

Output atteso:

```text
.husky/_
```

Se diverso:

```bash
pnpm run prepare
```

### lint-staged non trova file staged

È normale se non ci sono file in stage. Aggiungi file con `git add ...` prima del commit.

## 9) Best Practice Operative

1. Lancia sempre `fnm use` quando entri nel progetto.
2. Mantieni attivo `.venv` quando lavori su Python.
3. Prima di push, verifica sempre:

```bash
pnpm run turbo:pre-push
```

1. Usa Conventional Commits in modo consistente.
2. Non bypassare gli hook salvo emergenze reali.

## 10) Checklist Rapida

```bash
# una sola volta per macchina
fnm use
pnpm install
python3 -m venv .venv
source .venv/bin/activate
python -m pip install ruff

# uso quotidiano
pnpm run turbo:format
pnpm run turbo:lint
pnpm run turbo:pre-push
```
