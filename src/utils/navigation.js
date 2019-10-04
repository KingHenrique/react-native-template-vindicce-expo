import { NavigationActions } from 'react-navigation'

let navigator

export function setNavigator(ref) {}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}
