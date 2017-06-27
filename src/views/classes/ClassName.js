import React from 'react';
import { hashHistory } from 'react-router'
import JumbotronComponent from '../../jumbotron.js';

import classes from '../../data/classData.json';

import {ClassLevels} from './ClassLevels.js';
import {ClassArchetypeList} from './ClassArchetypeList.js';
import {ClassDetails} from './ClassDetails.js';

export const ClassName = ( {params} ) => {

  var className = params.className.charAt(0).toUpperCase() + params.className.slice(1);
  var currClass;
  for (var i=0; i < classes.class.length; i++) {
    if (classes.class[i].name === className) {
      currClass = classes.class[i];
    }
  }

  return(
    <div>
      <button onClick={()=>hashHistory.goBack()}>
        Back
      </button>
      <JumbotronComponent title={currClass.name} description={currClass.description}/>
      <ClassLevels />
      <ClassArchetypeList />
      <ClassDetails currClass={currClass.name}/>
    </div>
  );
}