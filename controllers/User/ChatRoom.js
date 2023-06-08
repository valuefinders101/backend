//Get username and roomname from form and pass it to room 


export const initiate =  async (req, res) => { 
      res.json({message: "initiate chat"}).status(200)
    };

export const postMessage = async (req, res) => {
      res.json({
        message: 'post message'}).status(200)
     };


export const getRecentConversation = async (req, res) => { 
      res.json({message: 'get recent conversation'}).status(200)
    };
  

export const getConversationByRoomId = async (req, res) => {
      const id = req.params;
      res.json({message: `room ${id} is in this conversation` }).status(200)
     };

export const markConversationReadByRoomId = async (req, res) => {
      const id = req.params;
      res.json({message: "mark conversationreadbyRoom Id"}).status(200)
      console.log(id)
}