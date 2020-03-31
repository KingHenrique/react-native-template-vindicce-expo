<p align="center" >
  <p align="center" >
    <a href="">
      <img alt="react-native-gifted-chat" src="https://user-images.githubusercontent.com/22872282/77975177-b34a2900-72cf-11ea-845d-6e40ab6718d4.png" />
    </a>
  </p>

<h3 align="center">
  Template for React Native Projects
</h3>
<p align="center">
  A solution for standardizing your project.
</p>

<p align="center">
  <a title='License' href="https://github.com/FaridSafi/react-native-gifted-chat/blob/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
</p>

#

#### The template was created so we can start the project faster. Unifying all the logic of the redux, in a single file like in duck pattern. We also have a template generator where we can create several components with only this command.

## Starting project with this template

You can starting a new project this way:

`expo init MyAppName --template react-native-template-vindicce-expo`

#

  <p align="center" >
    <a href="">
      <img alt="react-native-gifted-chat" src="https://user-images.githubusercontent.com/22872282/77976697-0aea9380-72d4-11ea-96bb-2d4484a8c6a6.png" />
    </a>
  </p>

## Generator Options

run yarn g to see the options

- `Function View`: To create Views, with or without redux, using hooks.
- `View`: To create visualizations, with or without redux, in the class or function pattern.
- `Component`: For the creation of components, in the class or function pattern.
- `Flow`: To create a new application flow, already as a standard view, with or without redux, using hooks.
- `Redux`: To create a new Redux/Actions/Sagas.

:exclamation: :exclamation: :exclamation: 
#### The model will take care of creating and making all imports to leave what was created with global access.

#

## import examples

All codes can be imported from the index.js of their respective folders.

```components

import React from 'react'
import { CustomButton, CustomBackground } from '../components'
...

```

```actions

import React from 'react'
import actions, { Word } from '../redux/actions'
...
OR

import React from 'react'
import actions, { Word as WordActions } from '../redux/actions'
...

```
#

## Links with libs

### Styled-components

https://styled-components.com

### Navigator

https://reacttraining.com/react-router/core/guides/quick-start

### Redux

https://redux.js.org

### Thunk

https://github.com/reduxjs/redux-thunk

### Sagas

https://redux-saga.js.org

## You have a question?

Please send email for the henriquebasshvf@gmail.com
