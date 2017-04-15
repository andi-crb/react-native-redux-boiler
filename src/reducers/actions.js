export function drinksLoading(bool) {
    return {
        type: 'DRINKS_LOADING',
        isLoading: bool
    };
}
export function drinksSuccess(items) {
    return {
        type: 'DRINKS_SUCCESS',
        items
    };
}

export function fetchDrinks(url) {
    return (dispatch) => {
        dispatch(drinksLoading(true));
        fetch(http://localhost:8080/drinks)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(drinksLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(drinksSuccess(items)))
    };
}