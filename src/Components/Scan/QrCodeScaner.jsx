import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from  './QrCodeScaner.module.css';

import {SCAN_DATA} from '../../constants';

export const QrCodeScaner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue]))
    };  

    return ( 
        <div className={s.container}>
            <div>
                <h1>Поставьте QR-код</h1>
                <p className={s.scanResult}>{scanned}</p>
            <Scanner
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: {width: 350}
                }}
            />
        </div>
        </div>
        
    );
};