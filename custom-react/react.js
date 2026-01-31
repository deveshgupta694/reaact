const root = document.getElementById("root")

function customeRender(reactElem , root) {
    
    const domELEM = document.createElement(reactElem.type)

    domELEM.setAttribute('href' , reactElem.props.href)
    domELEM.setAttribute('target' , reactElem.props.target)
    domELEM.innerHTML = reactElem.children
    
    root.appendChild(domELEM)
}

const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}


customeRender(reactElem , root)