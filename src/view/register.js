export const register = () => {
    const viewRegisterHtml = document.getElementById("root");
    const view = `
        <div id="viewRegister">
            <a href="#/register">Register</a>
            <h1>Registro</h1>
        </div>
    `;
    viewRegisterHtml.innerHTML = view;
    return viewRegisterHtml;
};