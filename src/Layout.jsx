import { Routes, Route } from "react-router-dom";
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generator/QrCodeGenerator';
import { QrCodeScaner } from './Components/Scan/QrCodeScaner';
import {GenerateHistory} from './Components/GenerateHistory';
import {ScanHistory} from './Components/ScanHistory';

const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/generator" element={<QrCodeGenerator />}/>
                <Route path="/scan" element={<QrCodeScaner />}/>
                <Route path="/GenerateHistory" element={<GenerateHistory />}/>
                <Route path="/ScanHistory" element={<ScanHistory />}/>
            </Routes>
        </div>
    );
};

export { Layout };