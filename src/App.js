import logo from './index.png';
import './App.css';
import { reportLectureIssues, reportTechnicalIssues } from './helpers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ position: 'absolute', height: 50, left: 40 }} />
        <h2>Lecture 5</h2>
        <h5 style={{ margin: '-20px 0px 30px 0px' }}>Data, Sensors and Complex Systems</h5>
        <h5 style={{ position: 'absolute', height: 50, right: 40 }}>
          Student ID :{Math.floor(Math.random() * 10000)}
        </h5>
      </header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* These buttons below are dynamically generated from the schema request */}
        <div style={{ width: '100%' }}>
          <h3 style={{ color: 'white' }}>Technical Feedback</h3>
          <div
            id="button-container"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}
          >
            <button
              className="btn"
              aria-label="SoundNotGoodBTN"
              aria-details="A button that when clicked informs the teacher that the sound is not good"
              onClick={() => reportTechnicalIssues(1)} //This should be the id that comes from the back
            >
              {' '}
              Sound is not good.
            </button>
            <button
              className="btn"
              aria-label="BoardNotVisibleBTN"
              onClick={() => reportTechnicalIssues(2)} //This should be the id that comes from the back
              aria-details="A button that when clicked informs the teacher that the board is not visible"
            >
              {' '}
              Board is not visible.
            </button>
            <button
              className="btn"
              onClick={() => reportTechnicalIssues(3)} //This should be the id that comes from the back
              aria-label="ScreenSharingNotWorkingBTN"
              aria-details="A button that when clicked informs the teacher that the screen is not being shared"
            >
              {' '}
              Screen Sharing is not working.
            </button>
            <button
              className="btn"
              onClick={() => reportTechnicalIssues(4)} //This should be the id that comes from the back
              aria-label="MicrophoneMutedBTN"
              aria-details="A button that when clicked informs the teacher that the microphone is muted"
            >
              {' '}
              Microphone is muted.
            </button>
          </div>
        </div>
        <div style={{ width: '100%', marginTop: 30 }}>
          <h3 style={{ color: 'white' }}>Lecture Feedback</h3>
          <div
            id="button-container"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}
          >
            <button
              className="btn"
              onClick={() => reportLectureIssues(1)} //This should be the id that comes from the back
              aria-label="GradientDescentNotClearBTN"
              aria-details="A button that when clicked informs the teacher that the Gradient Descent subject is not clear"
            >
              Gradient Descent is not clear.
            </button>
            <button
              className="btn"
              onClick={() => reportLectureIssues(2)} //This should be the id that comes from the back
              aria-label="TooFastBTN"
              aria-details="A button that when clicked informs the teacher that the lecture is going too fast"
            >
              Too fast.
            </button>
            <button
              className="btn"
              onClick={() => reportLectureIssues(3)} //This should be the id that comes from the back
              aria-label="TooSlowBTN"
              aria-details="A button that when clicked informs the teacher that the lecture is going too slow"
            >
              Too slow.
            </button>
          </div>
        </div>
        <div style={{ width: '100%', marginTop: 30 }}>
          <h3 style={{ color: 'white' }}>Comments & Questions</h3>
          <div
            id="input-container"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}
          >
            <h5 style={{ color: 'white' }}>Ask a Question</h5>
            <input
              type="text"
              id="question"
              name="Question"
              aria-label="questionInput"
              placeholder="Raise a question"
              aria-details="An Input that user can enter to ask a question"
              style={{ height: 30, width: '20%', padding: '5px 10px' }}
            />
            <button style={{ padding: '5px 10px' }}>Send</button>
          </div>
          <div
            id="input-container"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}
          >
            <h5 style={{ color: 'white' }}>Add a comment</h5>
            <input
              type="text"
              id="comment"
              name="Comment"
              placeholder="Comment about a topic"
              aria-label="commentInput"
              aria-details="An Input that user can enter a comment"
              style={{ height: 30, width: '20%', padding: '5px 10px' }}
            />
            <button style={{ padding: '5px 10px' }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
