import inputCycleProcess from '../../services/inputCycleProcess';

export function FormBuilder() {
    const templateFormBuilder = `
    <form class="form">
        <label for="url">Digite uma URL https://:</label>

        <input type="url" name="url" id="url"
            placeholder="https://example.com"
            size="30"
        >
        <button id="btn-search">Consultar Código fonte</button>
    </form>
`;
    function handleEventsFormBuilder() {
        document.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const inputValue =
                document.querySelector('input[type="url"]').value;
            if (inputValue.length == 0) return;

            const arrayURL = inputValue.split(',');

            inputCycleProcess(arrayURL, document.querySelector('#btn-search'));

            document.querySelector('input[type="url"]').value = '';
            document.querySelector('#btn-search').textContent = 'Limpar';
        });
    }

    return (parent) => {
        parent.innerHTML += templateFormBuilder;
        handleEventsFormBuilder();
    };
}
