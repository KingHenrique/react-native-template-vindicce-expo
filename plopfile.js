const {viewExists, componentExists, getNavigators, navigatorExists, navigatorExistsForViews } = require('./src/utils/componentExists')

module.exports = plop => {
  plop.setGenerator('View', {
    description: 'Create a new View',
    prompts: getNavigators().length > 0 ? [
      {
        type: 'list',
        name: 'navigator',
        message: 'Belongs to which example?',
        default: getNavigators()[0],
        choices: () => getNavigators()
      },
      {
        type: 'list',
        name: 'type',
        message: 'With redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Home View',
        validate: (value, otherValues) => {
          if (/.+/.test(value)) {
            if (/.+/.test(value)) {
              if (otherValues.navigator != "Default") {
                return navigatorExistsForViews(value, "components", otherValues.navigator) ? 'A component or container with this name already exists' : true
              } else {
                return viewExists(value) ? 'A component or container with this name already exists' : true
              }
            }
          }
          return 'The name is required'
        }
      }
    ] : [
      {
        type: 'list',
        name: 'type',
        message: 'With redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Home View',
        validate: value => {
          if (/.+/.test(value)) {
            return viewExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {    
      let path = (data.navigator == null || data.navigator == "Default") ? 'src/views/{{pascalCase name}}/index.js' : 'src/views/{{pascalCase navigator}}/{{pascalCase name}}/index.js'
      let pathStyles = (data.navigator == null || data.navigator == "Default") ? 'src/views/{{pascalCase name}}/styles.js': 'src/views/{{pascalCase navigator}}/{{pascalCase name}}/styles.js'
      let componentTemplate =
        data.type == 'Yes'
          ? './__templates__/view/viewClassComponentRedux.js.hbs'
          : './__templates__/view/viewClassComponent.js.hbs'
      let componentTemplateStyles = './__templates__/common/styles.js.hbs'
      let pathIndex = 'src/views/index.js'
      let patternImport = /\/\/ Import views here\n/g
      let patternInsert = /\/\/ Insert views here\n/g
      let componentTemplateImport = './__templates__/common/importView.hbs'
      let componentTemplateInsert = './__templates__/common/insertView.hbs'
            
      const actions = (data.navigator == null || data.navigator == "Default") ? [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        },
        {
          type: 'modify',
          path: 'src/routes/Routes.js',
          pattern: patternInsert,
          templateFile: './__templates__/common/insertViewRoutes.hbs'
        }
      ] : [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          pattern: patternImport,
          path: "src/views/{{pascalCase navigator}}/index.js",
          templateFile: "./__templates__/common/importView.hbs",
        },
        {
          type: 'modify',
          pattern: patternInsert,
          path: "src/views/{{pascalCase navigator}}/index.js",
          templateFile: './__templates__/flow/insertViewOnFlow.hbs',
        }
      ]

      return actions
    }
  })
  plop.setGenerator('Function View', {
    description: 'Create a new Function View',
    prompts: getNavigators().length > 0 ? [
      {
        type: 'list',
        name: 'navigator',
        message: 'Belongs to which example?',
        default: getNavigators()[0],
        choices: () => getNavigators()
      },
      {
        type: 'list',
        name: 'type',
        message: 'With redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Home View',
        validate: (value, otherValues) => {
          if (/.+/.test(value)) {
            if (otherValues.navigator != "Default") {
              return navigatorExistsForViews(value, "components", otherValues.navigator) ? 'A component or container with this name already exists' : true
            } else {
              return viewExists(value) ? 'A component or container with this name already exists' : true
            }
          }
          return 'The name is required'
        }
      }
    ] : [
      {
        type: 'list',
        name: 'type',
        message: 'With redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Home View',
        validate: value => {
          if (/.+/.test(value)) {
            return viewExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {
      let path = (data.navigator == null || data.navigator == "Default") ? 'src/views/{{pascalCase name}}/index.js' : 'src/views/{{pascalCase navigator}}/{{pascalCase name}}/index.js'
      let pathStyles = data.navigator == "Default" ? 'src/views/{{pascalCase name}}/styles.js': 'src/views/{{pascalCase navigator}}/{{pascalCase name}}/styles.js'
      let componentTemplate =
        data.type == 'Yes'
          ? './__templates__/function/functionComponentRedux.js.hbs'
          : './__templates__/function/functionComponent.js.hbs'
      let componentTemplateStyles = './__templates__/common/styles.js.hbs'
      let pathIndex = 'src/views/index.js'
      let patternImport = /\/\/ Import views here\n/g
      let patternInsert = /\/\/ Insert views here\n/g
      let componentTemplateImport = './__templates__/common/importView.hbs'
      let componentTemplateInsert = './__templates__/common/insertView.hbs'

      const actions = (data.navigator == null || data.navigator == "Default") ? [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        },
        {
          type: 'modify',
          path: 'src/routes/Routes.js',
          pattern: patternInsert,
          templateFile: './__templates__/common/insertViewRoutes.hbs'
        }
      ] : [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          pattern: patternImport,
          path: "src/views/{{pascalCase navigator}}/index.js",
          templateFile: "./__templates__/common/importView.hbs",
        },
        {
          type: 'modify',
          pattern: patternInsert,
          path: "src/views/{{pascalCase navigator}}/index.js",
          templateFile: './__templates__/flow/insertViewOnFlow.hbs',
        }
      ]
      return actions
    }
  })
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Class Component',
        choices: () => ['Class Component', 'Stateless Component']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {
      let componentTemplate =
        data.type == 'Class Component'
          ? './__templates__/components/classComponent.js.hbs'
          : './__templates__/components/statelessComponent.js.hbs'
      let path = 'src/components/{{pascalCase name}}/index.js'
      let pathStyles = 'src/components/{{pascalCase name}}/styles.js'
      let componentTemplateStyles = './__templates__/common/styles.js.hbs'
      let pathIndex = 'src/components/index.js'
      let patternImport = /\/\/ Import component here\n/g
      let patternInsert = /\/\/ Insert component here\n/g
      let componentTemplateImport = './__templates__/common/importComponent.hbs'
      let componentTemplateInsert = './__templates__/common/insertComponent.hbs'

      const actions = [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        }
      ]

      return actions
    }
  })
  plop.setGenerator('Redux', {
    description: 'Create a new Redux',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'PesonRedux',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/redux/reducers/{{pascalCase name}}.js',
          templateFile: './__templates__/redux/reduce.js.hbs'
        },
        {
          type: 'add',
          path: 'src/redux/sagas/{{pascalCase name}}.js',
          templateFile: './__templates__/redux/saga.js.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.js',
          pattern: /\/\/ Import redux here\n/g,
          templateFile: './__templates__/redux/importRedux.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.js',
          pattern: /\/\/ Insert redux here\n/g,
          templateFile: './__templates__/redux/insertRedux.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/actions/index.js',
          pattern: /\/\/ Import actions here\n/g,
          templateFile: './__templates__/redux/importActions.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/actions/index.js',
          pattern: /\/\/ Insert actions here\n/g,
          templateFile: './__templates__/redux/insertActions.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/sagas/index.js',
          pattern: /\/\/ Import action types\n/g,
          templateFile: './__templates__/redux/importActionsTypes.hbs'
        }
      ]

      return actions
    }
  })
  plop.setGenerator('Flow', {
    description: 'Create a new Flow navigation',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of navigation?',
        default: 'StackNavigation',
        choices: () => ['StackNavigation']
      },
      {
        type: 'list',
        name: 'type',
        message: 'Will the component have redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Settings',
        validate: value => {
          if (/.+/.test(value)) {
            return navigatorExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {
      let patternImport = /\/\/ Import views here\n/g
      let patternInsert = /\/\/ Insert views here\n/g

      let componentTemplateImport = './__templates__/flow/importViewFlow.hbs'
      let componentTemplateInsert = './__templates__/flow/insertViewFlow.hbs'

      let componentTemplate =
      data.type == 'Yes'
        ? './__templates__/function/functionComponentRedux.js.hbs'
        : './__templates__/function/functionComponent.js.hbs'

      const actions = [
        {
          type: 'add',
          path: 'src/views/{{pascalCase name}}Navigator/index.js',
          templateFile: './__templates__/flow/indexFlow.hbs'
        },
        {
          type: 'add',
          path: 'src/views/{{pascalCase name}}Navigator/{{pascalCase name}}/index.js',
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: 'src/views/{{pascalCase name}}Navigator/{{pascalCase name}}/styles.js',
          templateFile: './__templates__/common/styles.js.hbs'
        },
        {
          type: 'modify',
          path: 'src/views/index.js',
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: 'src/views/index.js',
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        },
        {
          type: 'modify',
          path: 'src/routes/Routes.js',
          pattern: patternInsert,
          templateFile: './__templates__/flow/insertViewRoutesFlow.hbs'
        }
      ]

      return actions
    }
  })
}