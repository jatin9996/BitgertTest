import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BriseStake from "./pages/BriseStake";
import { WalletProvider } from "./context/WalletContext";

function App() {
    return (
        <WalletProvider>
            <div>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        exact
                        path="/briseStake"
                        element={
                            <>
                                <Header />
                                <BriseStake />
                            </>
                        }
                    />
                </Routes>
            </div>
        </WalletProvider>
    );
}

export default App;
