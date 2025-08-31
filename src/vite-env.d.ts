/// <reference types="vite/client" />

// Extend with any custom vars you use
interface ImportMetaEnv {
  readonly VITE_CONTACT_DEMO?: string;
  readonly VITE_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
