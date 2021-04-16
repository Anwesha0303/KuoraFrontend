import React from 'react';
import './Modal.css';

const Modal =  ({show, close}) => { 
    const [post, setPost] = React.useState({ title: '',
    questions: '',flexRadioDefault:''
});
const Add = (e) => {  
    e.preventDefault();   
    const data = { title:post.title, 
    questions: post.questions,
    flexRadioDefault: post.flexRadioDefault }; 
    console.log(data);   
};
     const onChange = (e) => {  
        e.persist();  
    debugger;  
     setPost({...post, [e.target.name]: e.target.value});  
    }

  return (
       <div className="modal-wrapper"
       style={{
           transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
           opacity : show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p>Post your Question </p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
           
            <div className="modal-content">
                <div className="modal-body">
                    <div class="form-group">
                    <label for="usr">Title <span class="star">*</span></label>
                    <input type="text" class="form-control" id="usr" name="title"
                    onChange={ onChange } required></input>
                    </div>
                    <div class="form-group">
                    <label for="comment">Ask your Question / Post an article <span class="star">*</span></label>
                    <textarea class="form-control" rows="4" id="comment" name="questions"
                    onChange={ onChange } placeholder="Ask your question or post an article i.e, It can contain links...." required></textarea>
                    </div> 
                    <div class="form-group">
                    <label>Select Category <span class="star">*</span></label>
                    <div class="form-check"> 
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } id="flexRadioDefault1" value="COVID-19 related"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Pandemic related
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Admissions" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Admissions
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Academics" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Academics
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Library" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Library
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Higher Studies" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Higher Studies
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Hostel" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Examinations
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Campus" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Campus
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Foreign Student Exchange" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Foreign Student Exchange
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Placement Cell" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Placement Cell
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Faculty" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Faculty
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault" onChange={ onChange } value="Examinations" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Hostel
                    </label>
                    <input class="form-check-input" type="checkbox" name="flexCheckDefault"onChange={ onChange } value=" Fees Structure" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Fees Structure
                    </label>
                    </div>
                    </div>
                    </div>
            <div className="modal-footer">
               <button type="submit" onClick={Add} className="btn-success">Submit</button>
                <button onClick={close} className="btn-cancel">Close</button>
            </div>
        </div>
        </div>
    )
};
export default Modal;
