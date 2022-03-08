import React from "react";
import "./App.css"
import Accordion from "./components/Accordion";
import { useState } from "react";

const items = [
  {title: 'What is React?',
  content:  'sdfdsfs'},
  {title: 'What is a cat?',
  content:  'mmmmmmm'},
  {title: 'What is a dog?',
  content:  'dddddd'},
]


export default () => {

  return (<div>
    <Accordion items={items}/>
  </div>)
}