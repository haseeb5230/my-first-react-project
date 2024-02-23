// import React from "react";
// import ReactDOM from "react-dom";

// // function Greeting(){
// //     return <h2>This is my First React Project</h2>;
// // }

// const Greeting = () => {
//     return( 
//         <>
//         <div class="className">
//         <h2>This is my First React Project</h2>
        
//         </div>   
//         </>
//     )
// };

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting/>);



// import React from "react";
// import ReactDOM from "react-dom/client";



// const ProjetName= () =>{
//     return(
//      <div>
//         <Person></Person>
//         <Message></Message>
//      </div>
//     );
// };

// const Person = () =>{
//     return <h2> This is my Project</h2>;
// }

// const  Message= () =>{
//     return <p> eagle</p>;
// }

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ProjetName/>);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BookList=()=>{
    return (
        <section className="bookList">
        <Book/>
        <Book/>
        <Book/>
       </section>
        );
};

const Book=()=>{
    return(
        <article className="book">
        <Image/>
        <Author/>
        <BookName/>
        </article>
    );
};

const Image =()=>{
    return (
     <div>
    <img src="https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg" alt="" />
    <h2>This is a best selling book</h2>
    </div>
    );
}

const Author = ()=> <h1>Francesc Miralles</h1>;
const BookName =()=> <h1>Ikigai</h1>;


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);