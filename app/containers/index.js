import React,{Component} from 'react';
import { Provider } from 'react-redux';
import Main from '../../App';
import  configureStore from '../redux/store/Store';

// 调用 store 文件中的 mainReducer常量中保存的方法
const store = configureStore();
export default class Root extends Component{
    render() {
        return(
            // 第一层包装,为了让 main 能够拿到 store
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }

}
