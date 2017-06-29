import React from 'react';
import JumbotronComponent from '../../jumbotron.js';

import classes from '../../data/classData.json';

import {ClassLevels} from './ClassLevels.js';
import {ClassDetails} from './ClassDetails.js';
import {ClassArchetypeList} from './ClassArchetypeList.js';
import {ClassFeatures} from './ClassFeatures.js';

export const Archetype = ( {params} ) => {
  var jp = require('jsonpath');
  var test = classes;
  var searchClass = "$..class[?(@.id==\""+params.className+"\")]";
  var searchFeatures = "$..class[?(@.id==\""+params.className+"\")]..features[?(@.subclass==\"base\" || @.subclass==\""+params.classArchetype+"\")]";
  var searchArchetype = "$..class[?(@.id==\""+params.className+"\")]..features[?(@.subclass==\"subclass\" && @.name==\""+params.classArchetype+"\")].title";
  
  var currClass = jp.query(classes, searchClass);
  var currFeatures = jp.query(classes, searchFeatures);
  var currArchetype = jp.query(classes, searchArchetype);

  return(
    <div>
      <JumbotronComponent title={currClass[0].name} description={currArchetype[0]} image={currClass[0].name}/>
      <ClassLevels currClass={currClass[0]} />
      <ClassDetails currClass={currClass[0]} />
      <ClassFeatures features={currFeatures} />
    </div>
  );
}