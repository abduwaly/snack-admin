/**
 * Created by 叶子 on 2017/7/30.
 */
import * as type from './type';
import * as http from '../axios/index';

const requestData = category => ({
    type: type.REQUEST_DATA,
    category
});
export const receiveData = (data, category) => ({
    type: type.RECEIVE_DATA,
    data,
    category
});
/**
 * 请求数据调用方法
 * @param funcName      请求接口的函数名
 * @param params        请求接口的参数
 */
export const fetchData = ({funcName, params, stateName}) => dispatch => {
    !stateName && (stateName = funcName);
    dispatch(requestData(stateName));
    return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};

export const toLower = () => ({
    type: type.LOWER_CASE
});
export const toUpper = () => ({
    type: type.UPPER_CASE
});

export const showMDetails = (data) => ({
    type: type.SHOW_M_DETAILS,
    data,
});
export const hideMDetails = () => ({
    type: type.HIDE_M_DETAILS
});

export const showMEdit = (data) => ({
    type: type.SHOW_M_EDIT,
    data,
});
export const hideMEdit = () => ({
    type: type.HIDE_M_EDIT
});

export const handleResponsive = (data) => ({
    type: type.IS_MOBILE,
    data,
});