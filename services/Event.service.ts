import {Service} from "typedi"
import {Sqs} from "../utils/Sqs"
import {IUserEvent} from "../common/types/Event.type";

@Service()
export default class EventService {
  constructor(private sqs: Sqs) {
  }

  // public processMessage = (eventData) => {
  //
  // }

  public produceUserEventMessage = async (eventData: IUserEvent): Promise<void> => {
    try {
      const sendMessageCommandOutput = await this.sqs.sendMessage(eventData)
      if (!sendMessageCommandOutput) return // when error
    } catch (e) {
      console.error(e)
    }
  }
}
