import {useState} from 'react';
const Form = () => {
    const [mainTopic, setMainTopic] = useState("");
    const [subTopic, setSubTopic] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);

    const formHandler = (ev) => {
        ev.preventDefault();
        const note = {
            mainTopic,
            subTopic,
            content
        }
        console.log(note);
        setNotes (() => [...note, note])
    }


  return (
    <main>
      <form className="note-form">
        <h1>Note taking page</h1>
        <input type="text" placeholder="Main Topic"
        className='main-Topic'
        value={mainTopic}
        onChange={(ev)=> setMainTopic(ev.target.value)}
         />
        <input type="text" placeholder="sub topics" 
        className='sub-topic'
        value={subTopic}
        onChange={(ev) => {
            setSubTopic(ev.target.value)
        }}
        />
        <textarea value={content}
        onChange={(ev)=> setContent(ev.target.value)}
      />
        <button onClick={(ev) => formHandler(ev)}> save</button>
   
      </form>
      <div>
        {
          notes.length == 0 ? <p>No Notes currently</p>:
          notes.map((note) => (
            <li key={note}>
              {notes.mainTopic}
              {notes.subTopic}
              {notes.content}

            </li>
          ))
        }
      </div>
    </main>
  );
};

export default Form;
