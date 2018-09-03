/**
 * Created by jerry on 2017/11/13.
 * 用户相关api
 */
import * as API from './'

export default {
  //登录
  getEcgData: params => {
    return API.GET('/ecg/fetch_blocks', params)
  }
}
