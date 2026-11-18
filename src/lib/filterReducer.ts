export interface FilterState {
  tag: string | null
  query: string
}

export type FilterAction =
  | { type: 'toggleTag'; tag: string }
  | { type: 'setQuery'; query: string }
  | { type: 'clear' }

export const initialFilter: FilterState = {
  tag: null,
  query: '',
}

export function filterReducer(state: FilterState, action: FilterAction): FilterState {
    switch (action.type) {
        case 'toggleTag':
            return { ...state, tag: state.tag === action.tag ? null : action.tag }
        case 'setQuery':
            return { ...state, query: action.query }
        case 'clear':
            return initialFilter
    }
}
