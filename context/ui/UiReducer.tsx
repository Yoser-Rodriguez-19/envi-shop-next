import { UiState } from './';

type UiActionTyoe = 
    | { type: '[UI] - ToggleMenu' }


export const uiReducer = (state: UiState, action: UiActionTyoe): UiState => {

    switch (action.type) {
        case '[UI] - ToggleMenu':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }

        default:
            return state;
    }


}