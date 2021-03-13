import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const SearchRepositories = (term: string) => async (disptach: Dispatch<Action>) => {
    disptach({
        type: ActionType.SEARCH_REPOSITORIES
    });

    try {
        const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
            params: {
                text: term
            }
        });

        const names = data.objects.map((result: any) => result.package.name);

        disptach({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
        });

    } catch (error) {
        disptach({
            type: ActionType.SEARCH_REPOSITORIES_ERROR,
            payload: error.message
        });
    }
};