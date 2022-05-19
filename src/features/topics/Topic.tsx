import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ROUTES from '../../app/routes';
import { ITopic, selectTopics } from './topicsSlice';

function Topic() {
  const topics: { [id: string]: ITopic } = useAppSelector(selectTopics);
  //   const quizzes = {[id: string]: any} = {};
  let { topicId } = useParams();
  const topic: ITopic = topics[topicId!];
  //   const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {/* TODO: Implement show quiz  */}
        {/* {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))} */}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

export default Topic;
