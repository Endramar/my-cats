import { formClient, jsonClient } from './cat-axios';
import { actions } from '../store/store';
import store from '../store/store';

export default class httpClient {

    static currentCallCount = 0;

    static get(url: string) {
        return new Promise((resolve, reject) => {

            // This added to handle simultaneous calls.
            if (this.currentCallCount++ === 0) {
                store.dispatch(actions.showLoader());
            }

            jsonClient.get(url).then(response => {
                resolve(response.data);
            }).catch(error => {
                let errorMessage = error && error.response && error.response.data && error.response.data.message;
                store.dispatch(actions.showError(errorMessage));
                reject(error);
            }).finally(() => {
                if (--this.currentCallCount === 0) {
                    store.dispatch(actions.hideLoader());
                }
            });
        })
    };

    static postForm(url: string, formData: FormData) {
        return new Promise((resolve, reject) => {
            if (this.currentCallCount++ === 0) {
                store.dispatch(actions.showLoader());
            }

            formClient.post(url, formData)
                .then(response => {
                    resolve(response.data);
                }).catch(error => {
                    let errorMessage = error && error.response && error.response.data && error.response.data.message;
                    store.dispatch(actions.showError(errorMessage));
                    reject(error);
                }).finally(() => {
                    if (--this.currentCallCount === 0) {
                        store.dispatch(actions.hideLoader());
                    }
                });
        })
    };

    static postJson(url: string, jsonData: {}) {
        return new Promise((resolve, reject) => {
            if (this.currentCallCount++ === 0) {
                store.dispatch(actions.showLoader());
            }

            jsonClient.post(url, jsonData)
                .then(response => {
                    resolve(response.data);
                }).catch(error => {
                    let errorMessage = error && error.response && error.response.data && error.response.data.message;
                    store.dispatch(actions.showError(errorMessage));
                    reject(error);
                }).finally(() => {
                    if (--this.currentCallCount === 0) {
                        store.dispatch(actions.hideLoader());
                    }
                });
        })
    };

    static delete(url: string, id: string,) {
        return new Promise((resolve, reject) => {
            if (this.currentCallCount++ === 0) {
                store.dispatch(actions.showLoader());
            }
            url = url + '/' + id;
            jsonClient.delete(url)
                .then(response => {
                    store.dispatch(actions.showError("An application error has occured. Please try again."));
                    resolve(response.data);
                }).catch(error => {
                    let errorMessage = error && error.response && error.response.data && error.response.data.message;
                    store.dispatch(actions.showError(errorMessage));
                    reject(error);
                }).finally(() => {
                    if (--this.currentCallCount === 0) {
                        store.dispatch(actions.hideLoader());
                    }
                });
        })
    }
}
