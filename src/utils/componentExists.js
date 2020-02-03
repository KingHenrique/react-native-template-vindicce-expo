/**
* componentExists
*
* Check whether the given component exist in either the components or containers directory
*/

const fs = require('fs')

function getNavigators(comp, folder = 'components') {
    const pageContainers = fs.readdirSync('src/views')
    var navigators = pageContainers.filter(element => element.includes("Navigator"))
    navigators = navigators.length == 0 ?  navigators : navigators.concat("Default")
    return navigators
}

function viewExists(comp, folder = 'components') {
    const pageContainers = fs.readdirSync('src/views')    
    return pageContainers.indexOf(comp) >= 0
}

function navigatorExists(comp, folder = 'components') {
    const pageContainers = fs.readdirSync('src/views')
    return pageContainers.indexOf(`${comp}Navigator`) >= 0
}

function navigatorExistsForViews(comp, folder = 'components', navigator) {
    const pageContainers = fs.readdirSync(`src/views/${navigator}`)
    return pageContainers.indexOf(`${comp}`) >= 0
}

function componentExists(comp, folder = 'components') {
    const pageComponents = fs.readdirSync(`src/${folder}`)
    const pageContainers = fs.readdirSync('src/views')
    const components = pageComponents.concat(pageContainers)
    return components.indexOf(comp) >= 0
}

module.exports = { viewExists, componentExists, getNavigators, navigatorExists, navigatorExistsForViews }
