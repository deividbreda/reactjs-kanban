import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { FazendoProvider } from './hooks/useFazendo';
import { FazerProvider } from './hooks/useFazer';
import { FinalizadoProvider } from './hooks/useFinalizado';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <FazerProvider>
      <FazendoProvider>
        <FinalizadoProvider>
          <Header />
          <Homepage />
          <Footer />
          <GlobalStyles />
        </FinalizadoProvider>
      </FazendoProvider>
    </FazerProvider>
  );
}
