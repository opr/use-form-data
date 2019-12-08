This hook aims to solve the issue of keeping values from forms in a `useState` react state.

If you represent your form values in an object, then updating this object can be repetitive and fiddly, especially if
you have multiple forms in your app.

#Installation
`npm install --save use-form-data`

or

`yarn add use-form-data`

#Usage

```jsx
import useFormData from 'use-form-data';

const [formData, setFormData] = useFormData({name: '', email: '', password: ''});

return (
<form>
<input type="text" onChange={(e) => setFormData('name', e.target.value)} value={formData.name} />
<input type="email" onChange={(e) => setFormData('email', e.target.value)} value={formData.email} />
<input type="password" onChange={(e) => setFormData('password', e.target.value)} value={formData.password} />
</form>
);
```
