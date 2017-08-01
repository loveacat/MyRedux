import * as RecipeActions from './recipes'
import * as AuthActions from './auth'
//import * as NavigationActions from './navigation'

export const ActionCreators = Object.assign({},
  RecipeActions,
//  NavigationActions,
  AuthActions
);
