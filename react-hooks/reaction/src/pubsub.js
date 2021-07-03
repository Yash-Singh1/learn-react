import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config.json';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub() {
  const pubnub = new PubNub(pubnubConfig);

  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

  this.addListener = (listnerConfig) => pubnub.addListener(listnerConfig);

  this.publish = (message) =>
    pubnub.publish({ message, channel: [MESSAGE_CHANNEL] });

  this.fetchMessages = () =>
    pubnub.fetchMessages({ channels: [MESSAGE_CHANNEL] });

  this.deleteMessages = (timestamp) =>
    pubnub.deleteMessages({
      channel: [MESSAGE_CHANNEL],
      start: (Number(timestamp) - 2).toString(),
      end: timestamp
    });
}

export default PubSub;
