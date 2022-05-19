import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ROUTES from '../../app/routes';
import { selectTopics, ITopic } from './topicsSlice';

function Topics() {
  const topics: { [id: string]: ITopic } = useAppSelector(selectTopics);

  return (
    <section>
      <h1>Topic</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic: ITopic) => (
          <li className="topic" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
              <div className="topic-container">
                <img src={topic.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}

export default Topics;
