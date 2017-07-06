

export default {

  sendMessage(api, message){

    return fetch(`${ api }/send`, { body : message, method: 'POST' })

  }

}