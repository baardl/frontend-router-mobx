import fetch from 'node-fetch';
import {action, observable, decorate, extendObservable, runInAction} from "mobx"

const defaultState = {};

export default class GithubStore {
    // @observable searchName;
    // @observable user;
    // @observable repos;
    // @observable fetchingData;

    constructor(state = defaultState) {
        extendObservable(
            this,
            {
                searchName: '',
                user: '',
                repos: [],
                fetchingData: false,
            },
            state
        )
    }

        // this.searchName = '';
        // this.user = '';
        // this.repos = [];
        // this.fetchingData = false;
    // }

    async fetchFromGithub(endpoint) {
        const url = `https://api.github.com/${endpoint}?client_id=my_client_id&client_secret=my_client_secret_id`;
        const response = await fetch(url);
        return await response.json();
    }

    // @action('Change User to search for')
    changeUserToSearchFor(username) {
        runInAction(() => {
            this.searchName = username;
        })
    }

    // @action('Search for user on Github')
    searchForUser = async () => {
        if (!this.searchName) return;
        this.fetchingData = true;
        const [user, repos] = await Promise.all([
            this.fetchFromGithub(`/users/${this.searchName}`),
            this.fetchFromGithub(`/users/${this.searchName}/repos`)
        ]);
        runInAction("Update State after fetching Github's Data", () => {
            this.user = user;
            this.repos = repos;
            this.fetchingData = false;
        });
    };
}

decorate(GithubStore, {
    searchName:    observable.shallow,
    user: observable.shallow,
    repos: observable.shallow,
    fetchingData: observable.shallow,
    fetchFromGithub: action.bound,
    searchForUser: action.bound
})
