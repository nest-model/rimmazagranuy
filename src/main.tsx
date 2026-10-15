import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Шрифты лежат в проекте (без Google Fonts): быстрее в РФ и без внешних запросов.
import '@fontsource/unbounded/400.css';
import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/cormorant/400-italic.css';
import '@fontsource/cormorant/500-italic.css';
import '@fontsource/onest/400.css';
import '@fontsource/onest/500.css';
import '@fontsource/onest/600.css';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
