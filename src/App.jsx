import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import WalletContextProvider from "./contexts/WalletContextProvider";
import Home from './pages/home/home';
import AirDrop from './pages/airdop/airdrop';
import "@solana/wallet-adapter-react-ui/styles.css";


function App() {
  return ( 
    <BrowserRouter>
        <WalletContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/airdrop" element={<AirDrop />} />
        </Routes>
        </WalletContextProvider>
    </BrowserRouter>
  );
}

export default App;
