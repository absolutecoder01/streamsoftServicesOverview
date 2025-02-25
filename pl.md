# Streamsoft Services Overview

Aplikacja Streamsoft Services Overview to projekt, który umożliwia prezentację usług oferowanych przez firmę Streamsoft w formie przejrzystej strony internetowej.

## Technologie

- **React** - Framework JavaScript do budowy interfejsu użytkownika.
- **Tailwind CSS** - Framework CSS do łatwego i szybkie stylowania komponentów.
- **Vercel** - Platforma do hostingu aplikacji.
- **TypeScript** - Język programowania na bazie JavaScript, dodający statyczne typowanie.
- **React Spring** - Biblioteka do animacji.

## Jak uruchomić projekt lokalnie?

1. **Skopiuj repozytorium**:

    ```bash
    git clone https://github.com/absolutecoder01/streamsoftServicesOverview.git
    ```

2. **Wejdź do katalogu projektu**:

    ```bash
    cd streamsoftServicesOverview
    ```

3. **Zainstaluj zależności**:

    Jeśli używasz **npm**:

    ```bash
    npm install
    ```

    w przypadku błędu przy instalowaniu zależności można użyć:

    ```bash
    npm install --legacy-peer-deps
    ```

    Lub jeśli używasz **yarn**:

    ```bash
    yarn install
    ```

4. **Uruchom aplikację lokalnie**:

    Jeśli używasz **npm**:

    ```bash
    npm start
    ```

    lub
   
    ```bash
    npm run dev
    ```

    Lub jeśli używasz **yarn**:

    ```bash
    yarn start
    ```

    Strona powinna być dostępna pod adresem `http://localhost:3000`.

## Struktura projektu

```plaintext
streamsoftServicesOverview/
│
├── public/                # Publiczne pliki, takie jak index.html
├── src/                   # Katalog źródłowy
│   ├── components/        # Komponenty React
│   └── App.tsx            # Główny plik aplikacji
├── .gitignore             # Plik ignorujący pliki do Gita
├── package.json           # Zależności projektu
├── eslint.config.js       # Konfiguracja ESLint
├── reszta plików          # reszta
└── tsconfig.json          # Konfiguracja TypeScript
```
Oryginalna wersja [tutaj](README.md)
