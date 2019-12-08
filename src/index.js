import {useState} from 'react';

export default (initialValue) => {
    const [formData, setFormData] = useState(initialValue);

    const updateFormData = (key, value, overwriteEntireValue = false) => {
        overwriteEntireValue ? setFormData(value) : setFormData({...formData, [key]: value});
    };

    return [formData, updateFormData];
};