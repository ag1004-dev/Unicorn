import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import WalletContextProvider from "./contexts/WalletContextProvider";
import Home from './pages/home/home';
import AirDrop from './pages/airdop/airdrop';
import "@solana/wallet-adapter-react-ui/styles.css";


function App() {
  return ( 
    <BrowserRouter>
        <WalletContextProvider>
          <Home />
        </WalletContextProvider>
    </BrowserRouter>
  );
}

export default App;
