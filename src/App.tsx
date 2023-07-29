import { useState } from "react";

import "./App.css";
import data from "./data";

const App = () => {
  const [textPhrases, setTextPhrases] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSwitchCategory = (index: number) => setSelectedCategory(index);

  const hadleGenerateSentence = () => {
    let randomNumber = Math.floor(
      Math.random() * data[selectedCategory].phrases.length
    );

    setTextPhrases(`${data[selectedCategory].phrases[randomNumber]}`);
  };

  return (
    <div className="container">
      <h1 className="title">Gerador de frases</h1>

      <h2 className="title__categories">Categorias</h2>

      <section className="category__area">
        {data.map((item, index) => (
          <button
            key={item.id}
            className="btn__category"
            style={{
              backgroundColor:
                item.name === data[selectedCategory].name
                  ? "#3a1ce2"
                  : "#00004e",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.name}
          </button>
        ))}
      </section>
      <button className="btn__phrases" onClick={() => hadleGenerateSentence()}>
        Gerar Frase
      </button>
      {textPhrases !== "" && <p className="phrases__area">{textPhrases}</p>}
    </div>
  );
};

export default App;
