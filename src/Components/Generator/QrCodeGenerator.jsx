import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import s from './QrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    return (
        <div className={s.container}>
            <div className={s.qrCode}>
                <input
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                    className={s.qrCodeInput}
                    placeholder='Введите текст'
                />
                <button type="button" onClick={onClickHandler} className={s.btn}>Сгенерировать QR</button>
                {result !== '' && (
                    <QRCodeSVG value={result} size={170} />
                )}
            </div>
        </div>
    );
};