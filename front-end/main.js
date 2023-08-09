import './style.css';

import { FormBuilder } from './components/FormBuilder/FormBuilder';

window.onload = () => {
    const formBuilder = FormBuilder();
    formBuilder(document.querySelector('#app'));
};
