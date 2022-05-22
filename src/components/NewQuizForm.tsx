import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addQuizForTopicId, IQuiz } from '../features/quizzes/quizzesSlice';
import { ITopic, selectTopics } from '../features/topics/topicsSlice';
import { v4 as uuidv4 } from 'uuid';
import ROUTES from '../app/routes';
import { addCard, ICard } from '../features/cards/cardsSlice';

function NewQuizForm() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState<Array<ICard>>([]);
  const [topicId, setTopicId] = useState('');
  const navigate = useNavigate();
  const topics: { [id: string]: ITopic } = useAppSelector(selectTopics);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
      console.log(e);
    e.preventDefault();
    if (name.length === 0 || topicId === '') {
      return;
    }

    //Cards
    const cardIds: Array<string> = [];
    cards.forEach((card: ICard, idx) => {
      const id = uuidv4();
      cardIds.push(id);
      dispatch(addCard({...card, id}))
    });

    const quiz: IQuiz = {
        id: uuidv4(),
        name,
        topicId,
        cardIds
    }

    dispatch(addQuizForTopicId(quiz));
    navigate(ROUTES.quizzesRoute());

  };

  const addCardInputs = (e: React.MouseEvent) => {
    e.preventDefault();
    setCards(cards.concat({id: "", front: "", back: ""}));
  };

  const removeCard = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  }

  const updateCardState = (index:number, side: 'front' | 'back' , value: string) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  } 

  return (
    <section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic: ITopic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>

        {/* TODO: Implement this logic later */}
        {cards.map((card: ICard, index: number) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, 'front', e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, 'back', e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}

        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button>Create Quiz</button>
        </div>
      </form>
    </section>
  );
}

export default NewQuizForm;
