import React from "react";
import "./App.css"
import Accordion from "./components/Accordion";
import { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: 'Color red',
    value: 'red'
  },
  {
    label: 'Color green',
    value: 'green'
  },
  {
    label: 'Color blue',
    value: 'blue'
  }
]



const App = () => {
    const [dropdownSelected, setDropdownSelected] = useState(options[0])

  return (
  <div>
    {/* < Search /> */}
    {/* <Accordion items={items}/> */}
    <Dropdown options={ options }/>

  </div>)
}
export default App;