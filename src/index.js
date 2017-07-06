

const slackLogClient = {

  sendMessage : async (api, message)=>{

    return await fetch(`${ api }/send`, { body : message, method: 'POST' })

  }

}

export default slackLogClient