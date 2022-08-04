import YouTube from "react-youtube";
import { QualityWrapper, TextWrapper, Video } from "../../styles/QualityStyles";

export default function Quality() {
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <QualityWrapper>
      <TextWrapper>
        <h1>Why shop with us</h1>
        <p>
          We are a family-owned and operated business that specializes in
          quality products. We are committed to providing the highest quality
          products to our customers. We also endeavour to teach our customers
          how the various farm tools are expected to be used on farms
        </p>
      </TextWrapper>
      <Video>
        <YouTube
          videoId="8Y7RX1CxK8w"
          opts={opts}
          onReady={() => {
            console.log("Ready");
          }}
        />
      </Video>
    </QualityWrapper>
  );
}
