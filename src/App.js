import './App.css';
import Form from './components/Form';
import Output from './components/Output';
import FormState from './context/FormState';
function App() {
  return (
    <>
      <FormState>
        <div className='container'>
          <div className='header'><h4>Student Enrollment Form</h4></div>
          <div className='row'>
            <div className='col-md-6'>
              <Form />
            </div>
            <div className='col-md-6'>
              <Output />
            </div>
          </div>
        </div>
      </FormState>
    </>
  );
}

export default App;
