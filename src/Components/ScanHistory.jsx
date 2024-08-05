import {SCAN_DATA} from '../constants';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    console.log(data);

    return(
        <div>
            {data.map((text) => (
                <p key={text}>{text}</p>
            ))}
        </div>
       
    );
};