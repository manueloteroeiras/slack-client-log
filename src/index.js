import axios from 'axios'

export default {

  sendMessage(api, message){

    return axios(`${ api }/send`, { body : message, method: 'POST' })

  }

}