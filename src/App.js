import "./styles.css";
import Decipher from "./Decipher";

const challenge =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/73686f";

export default function App() {
  return (
    <div className="App">
      <Decipher challengeUrl={challenge} />
    </div>
  );
}
