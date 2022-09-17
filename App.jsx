import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <h1 className="heading">List of top 5 Netflix series</h1>
      {Sdata.map((val, index) => {
        // console.log(val)
        // console.log(index);
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;

// All the values of an Array are stored in a val as a object and then we can access it by . notation, just like we access the value of an object.
// Here we used anonymous function.
