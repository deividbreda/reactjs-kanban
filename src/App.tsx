import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <GlobalStyles />
    </div>
  );
}
