import {SQSClient, SendMessageRequest, SendMessageCommand, SendMessageResult} from '@aws-sdk/client-sqs'
import {Service} from "typedi"


@Service()
export class Sqs {
  private sqs: SQSClient
  private readonly url: string

  constructor() {
    // AWS.config.update({region: 'ap-northeast-2', accessKeyId: , secretAccessKey: })
    this.sqs = new SQSClient({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.SQS_ACCESS_KEY || '',
        secretAccessKey: process.env.SQS_SECRET_ACCESS_KEY || ''
      }
    })
    this.url = process.env.SQS_QUEUE_URL || ''
  }

  public async sendMessage(message: {}): Promise<SendMessageResult | null> {
    /*
    {
      QueueUrl: String;
      MessageBody: String;
      DelaySeconds?: Integer;
      MessageAttributes?: MessageBodyAttributeMap;
      MessageSystemAttributes?: MessageBodySystemAttributeMap;
      MessageDeduplicationId?: String;
      MessageGroupId?: String;
    }
    */
    const params: SendMessageRequest = {
      QueueUrl: this.url,
      MessageBody: JSON.stringify(message),
      // DelaySeconds?: Integer;
      // MessageAttributes?: MessageBodyAttributeMap;
      // MessageSystemAttributes?: MessageBodySystemAttributeMap;
      // MessageDeduplicationId?: String;
      // MessageGroupId?: String;
    }

    const command = new SendMessageCommand(params)
    const sendMessageCommandOutput = await this.sqs.send(command)
    if (sendMessageCommandOutput.$metadata.httpStatusCode !== 200) return null
    return sendMessageCommandOutput
  }
}
