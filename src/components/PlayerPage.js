import React from "react";
import styled from "styled-components";

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
