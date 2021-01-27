import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import noteTab from "../notes";

function App() {
    return (
        <div>
            <Header />
            
            {noteTab.map(x =>  {
                    return (
                        <Note
                            key={x.key}
                            title={x.title}
                            content={x.content}
                        />
                    )
                })
            }
            <Footer />
        </div>
        
    )
}

export default App;