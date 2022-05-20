import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import Card from '../cards/Card';
import { IQuiz, selectQuizzes } from './quizzesSlice';

function Quiz() {
  const quizzes: { [id: string]: IQuiz } = useAppSelector(selectQuizzes);
  let { id } = useParams();
  const quiz: IQuiz = quizzes[id!];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card />
        ))}
      </ul>
    </section>
  );
}

export default Quiz;
