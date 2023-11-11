import "./ScreenNovel.css";

interface PropsScreenNovel {
  question: string;
  responses: string[]; // Alterei o tipo de 'response' para 'responses', assumindo que é um array de strings
}

export default function ScreenNovel({ question, responses }: PropsScreenNovel) {
  return (
    <div className="containerSN">
      <div className="imgBG"></div>
      <div className="textArea">
        <p>{question}</p>
        <div className="responseButtons">
          {responses.map((response, index) => (
            <button key={index}>{response}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
