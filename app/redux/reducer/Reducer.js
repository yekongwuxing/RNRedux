import {CHANGE_TEXT,changeText} from '../action/Action';
const mainReducer = (state = changeText('welcome to react-native'),action) => {
    const newState = state;
    const text = action.text;
    // 判断 action 类型
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...newState,
                text: '改变了' + text

            };
        default:
            return {
                ...newState,
                text: state.text
            }
    }
};
export default mainReducer;