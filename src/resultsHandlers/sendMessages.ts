import sendMessage from '../libs/sendMessage';
import { ResultsHandler } from '../models/ResultsHandler';

const sendMessages: ResultsHandler = ({ acc }) => {
  if (!acc || !acc['messages']) {
    return;
  }

  for (const [messageId, value] of acc['messages']) {
    sendMessage<number>(messageId, value);
  }

  delete acc['messages'];
};

export default sendMessages;
