import {GENERATE_DATA} from '../constants';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return(
        <div>
            {data.map((text) => (
                <p key={text}>{text}</p>
            ))}
        </div>
       
    );
};