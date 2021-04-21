

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'beLoggedIn':
            return action.payload;
        case 'beLoggedOut':
            return action.payload;
        default:
            return null;
    }
}