import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StyledInput from '../../components/styledInput'
import Button from '../../components/button';
import { StyledForm, StyledSelect, StyledGroup } from './Filter.styles';

enum errorText {
    errorLetters = 'Wpisałeś nie prawidłowe dane, wpisz tylko małe lub duze litery',
    errorTexts = 'Wpisałeś nie prawidłowe dane, wpisz tylko małe lub duze litery oraz spacje',
}

enum filterText {
    remove = 'usuń',
    stay = 'pozostaw',
}

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
            const stayText = [...removeText].filter((item) => originalText.includes(item));
            setTextValue(stayText.join(''));
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput placeholder="letters" 
                         name="letters" 
                         type="text" 
                         ref={register({
                            pattern: /^[a-zA-Z]+$/
                        })}></StyledInput>
            {errors.letters && <span>{errorText.errorLetters}</span>}            
            <StyledInput placeholder="text" 
                         name="text" 
                         type="text" 
                         value={textValue} 
                         onChange={(e) => setTextValue(e.target.value)} 
                         ref={register({ 
                             pattern:  /^[a-zA-Z\s]*$/
                        })}>
            </StyledInput>
            {errors.text && <span>{errorText.errorTexts}</span>}            
            <StyledGroup>
                <StyledSelect name="type" ref={register({ required: true })}>
                    <option value="remove">{filterText.remove}</option>
                    <option value="stay">{filterText.stay}</option>
                </StyledSelect>
                <Button type="submit" value="Filtruj"></Button>
            </StyledGroup>
        </StyledForm>
    )
}

export default Filter;
