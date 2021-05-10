
import { actions, AppState } from './store'

const reducers = {
    showLoader(state: AppState) {
        state.isLoaderVisible = true;
    },
    hideLoader(state: AppState) {
        state.isLoaderVisible = false
    },
    showError(state: AppState, action: any) {
        state.currentError = action.payload;
    },
    setImages(state: AppState, action: any) {
        state.allImages = action.payload;
    },
    clearError(state:AppState){
        state.currentError = null as any;
    }
}

export default reducers;