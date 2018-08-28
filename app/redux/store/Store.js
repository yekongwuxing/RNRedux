import Reducer from '../reducer/Reducer';
import {createStore}  from 'redux';
export default () => {
    // 根据 reducer 初始化 store
    const store = createStore(Reducer);

    return store;
}