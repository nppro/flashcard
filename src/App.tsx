import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import ROUTES from './app/routes';
import Topic from './features/topics/Topic';
import Topics from './features/topics/Topics';
import NewTopicForm from './components/NewTopicForm';
import Quizzes from './features/quizzes/Quizzes';
import Quiz from './features/quizzes/Quiz';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()}>
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()}>
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()}>
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='topics' element={<Topics/>} />
        <Route path='topics/:topicId' element={<Topic />}/>
        <Route path='topics/new' element={<NewTopicForm />}/>
        <Route path='quizzes' element={<Quizzes />} />
        <Route path='quizzes/:id' element={<Quiz />}/>
        <Route path='quizzes/new' element={<NewTopicForm />}/>
      </Routes>
    </Router>
  );
}


export default App;
