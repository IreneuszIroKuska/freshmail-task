import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

/*
    Strona: Filtr
zawiera formularz z polami: litery(a-Z), tekst(a-Z [Spacja]),
 select(Usuń/Pozostaw), przycisk Filtruj
użytkownik wypełnia formularz, po użyciu Filtruj, 
    zależnie od wybranej opcji (Usuń, Pozostaw) skrypt usunie, 
    lub pozostawi z tekstu wszystkie litery użyte w polu “litery” 
Przykład użytkownik wpisał w polu znaki: “asiwt” i w polu tekst: 
“FreshMail” w selecie wybrał “Usuń” kod zwróci “FrehMl” 
*/

const removeCharactersFromString=(removalName: string, originalName:string)=>removalName
    .split('')
    .reduce((item, el)=>item.replace(el,''),originalName);

const Filter = () => {
    const [textValue, setTextValue] = useState<string>('')
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const type = data.type;
        const removeText = data.letters
        const originalText = data.text
        
        if (type === 'remove') {
            setTextValue(removeCharactersFromString(removeText, originalText))
        } else {
            const stayText = [...removeText].filter((item) => originalText.includes(item)).join();
            setTextValue(stayText);
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="letters" type="text" ref={register()}></input>
            <input name="text" type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} ref={register()}></input>
            <select name="type" ref={register({ required: true })}>
                <option value="remove">Usuń</option>
                <option value="stay">Pozostaw</option>
            </select>
            <input type="submit" value="Filtruj"></input>
        </form>
    )
}

export default Filter;
