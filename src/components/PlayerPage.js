import React from "react";
import styled from "styled-components";
import Pusher from "pusher-js";

const NowPlayingBar = styled.div`
  background-color: #505050;
  position: fixed;
  bottom: 0;
  width: 70%;
  height: 80px;
`;

const WaveformContainer = styled.div`
  background-color: #282828;
  width: 70%;
  height: 900px;
  position: fixed;
`;

const ChatContainer = styled.div`
  width: 30%;
  float: right;
  height: 100%;
`;

var pusher = new Pusher("5a03379f1046c6a1ea69", {
  cluster: "us2",
  forceTLS: true
});

var channel = pusher.subscribe("my-channel");
channel.bind("my-event", function(data) {
  alert(JSON.stringify(data));
});

class PlayerPage extends React.Component {
  render() {
    return (
      <div>
        <WaveformContainer></WaveformContainer>

        <ChatContainer>Chat will go here</ChatContainer>
        <NowPlayingBar></NowPlayingBar>
      </div>
    );
  }
}

export default PlayerPage;
