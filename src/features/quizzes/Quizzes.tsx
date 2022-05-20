import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ROUTES from '../../app/routes';
import { IQuiz, selectQuizzes } from './quizzesSlice';

function Quizzes() {
  const quizzes: { [id: string]: IQuiz } = useAppSelector(selectQuizzes);

  return (
    <section>
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
          {Object.values(quizzes).map((quiz: IQuiz) => (
              <Link to={ROUTES.quizRoute(quiz.id)} key={quiz.id}>
                  <li className='quiz'>{quiz.name}</li>
              </Link>
          ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">Create New Quiz</Link>
    </section>
  );
}

export default Quizzes;
