import { useState, useEffect } from 'react';
import App from './App';
import { PalatePage } from './pages/PalatePage';

export type View = 'home' | 'palate';

function getViewFromHash(): View {
  const hash = window.location.hash.replace(/^#?\/?/, '') || '';
  return hash === 'palate' ? 'palate' : 'home';
}

function syncHash(view: View) {
  const desired = view === 'palate' ? '#/palate' : '#/';
  if (window.location.hash !== desired) {
    window.history.replaceState(null, '', desired);
  }
}

export function Root() {
  const [view, setView] = useState<View>(() => getViewFromHash());

  useEffect(() => {
    syncHash(view);
  }, [view]);

  useEffect(() => {
    const onHashChange = () => setView(getViewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return view === 'home' ? (
    <App onNavigate={setView} />
  ) : (
    <PalatePage onNavigate={setView} />
  );
}
