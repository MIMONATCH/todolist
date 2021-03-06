import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from '../ToDoList'

describe('ToDoList component', () => {
    describe('empty list', () => {
      it('contains an empty <ul> element', () => {
        const toDoList = shallow(<ToDoList tasks={[]}/>);
        expect(toDoList).toContainReact(<ul/>);
      })
      it('does not contain any <li> elements', () => {
        const toDoList = shallow(<ToDoList tasks={[]}/>);
        expect(toDoList.find('li').length).toEqual(0);
      })
    });
   
    describe('not empty list', () => {
      it('contains a matching number of <li> elements', () => {
        const tasks = ['Wash the dishes', 'Make the bed'];
        const toDoList = shallow(<ToDoList tasks={tasks}/>);
        expect(toDoList.find('li').length).toEqual(tasks.length);
      })
    });
  });