import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { FazerProvider } from './hooks/useFazer';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <FazerProvider>
      <Header />
      <Homepage />
      <GlobalStyles />
    </FazerProvider>
  );
}
