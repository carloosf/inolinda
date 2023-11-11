import "./ScreenNovel.css";

interface PropsScreenNovel {
  question: string;
  response: string[];
}

export default function ScreenNovel({ question, response }: PropsScreenNovel) {
  return (
    <div className="containerSN">
      <div className="imgBG" />
      <div className="textArea">
        <p>{question}</p>
        <button>{response}</button>
      </div>
    </div>
  );
}
