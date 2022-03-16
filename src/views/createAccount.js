export default () => {
    const viewAccount = `
    <h2 class="account">Crear Cuenta</h2>`

    const divAccount = document.createElement('div')
    divAccount.innerHTML = viewAccount;

    return divAccount;
    
}