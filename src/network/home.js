import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url:'/finditemhome'
  })
}
export function getHomeGoods(type,page,pageSize){
  return request({
    url:'/findhome',
    params:{
      type,
      page,
      pageSize
    }
  })
}