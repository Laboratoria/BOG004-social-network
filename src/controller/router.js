import { components } from '../lib/index.js'

const changeViews = (route) => {
    const container = document.getElementById("container")
    container.innerHTML = '';
    switch (route) {
        case '#/': 
            { return container.appendChild(components.home()) }
        case '#/signUp': 
            { return container.appendChild(components.signUp()) }
        case '#/signIn': 
            { return container.appendChild(components.signIn()) }
        case '#/timeline':
            { return container.appendChild(components.timeline()) }
        default:
            { return container.appendChild(components.error()) }
            break;
    }
    console.log(route)
}

export { changeViews }