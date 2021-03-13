import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRespositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string;
}

export type Action = SearchRepositoriesAction |
    SearchRespositoriesSuccessAction |
    SearchRepositoriesErrorAction;
