import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

//设置环境
switch (process.env.NODE_ENV) {
	case "production"://生产环境
		axios.defaults.baseURL = "https://api.jisuapi.com";
		break;
  case "test"://测试环境
    axios.defaults.baseURL = "https://api.jisuapi.com";
    break;
  default://开发环境
    axios.defaults.baseURL = "https://api.jisuapi.com/"
}

//设置超时时间与跨域是否携带cookie
axios.defaults.withCredentials = true,

//设置请求传递数据格式 x-www-urlencoded
axios.defaults.headers['Content-Type'] = 'application/x-www-urlencoded'
axios.defaults.transformRequest = data => {qs.stringify(data)};//转换为xx=xx&xx=xx格式

//(4)设置请求拦截器
//客户端发送请求 -》 请求拦截器 -〉服务器。token校验（JWT算法），接受服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
axios.interceptors.request.use((config)=>{
    //携带token
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return token;
  }, err=>{
    return Promise.reject(err);
  })

  //响应拦截器 （我们常用的，重点）
//服务器返回信息 -> 拦截的统一处理 -> 客户端js获取到信息
axios.defaults.validateStatus = status => {
    //自定义响应成功的http状态码
    return /^(2|3)\d{2}$/.test(status)
  };
  axios.interceptors.response.use(res => {
    return res.data;
  }, err => {
    let {response} = err;
    if (response){
      //服务器最起码返回结果
      switch (response.status){
        case 401://权限
          break;
         case 403: //服务器拒绝执行，token过期
          break;
        case 404: //找不到页面、
          break;
      }
    } else {
      //服务器没有返回结果（有两种情况）
      //断网，
      if(!window.navigator.online){
         //断网处理，跳转到断网页面
        return
         }
      return Promise.reject(err)
      
      //服务器崩了，无信息返回
    }
  });
  
  export default axios;

