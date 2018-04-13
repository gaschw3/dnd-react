import React from 'react';
import JumbotronComponent from '../../jumbotron.js';
import Footer from '../../footer.js';

import classes from '../../data/classData.json';

import {ClassLevels} from './ClassLevels.js';
import {ClassDetails} from './ClassDetails.js';
import {ClassArchetypeList} from './ClassArchetypeList.js';
import {ClassFeatures} from './ClassFeatures.js';

export const Archetype = ( {params} ) => {
  var jp = require('jsonpath');
  var searchClass = "$..class[?(@.id==\""+params.className+"\")]";
  var searchFeatures = "$..class[?(@.id==\""+params.className+"\")]..features[?(@.subclass==\"base\" || @.subclass==\""+params.classArchetype+"\")]";
  var searchArchetype = "$..class[?(@.id==\""+params.className+"\")]..features[?(@.filter==\"yes\" && @.name==\""+params.classArchetype+"\")].title";
  
  var currClass = jp.query(classes, searchClass);
  var currFeatures = jp.query(classes, searchFeatures);
  var currArchetype = jp.query(classes, searchArchetype);

  return(
    <div>
      <JumbotronComponent title={currClass[0].name} description={currArchetype[0]} image={currClass[0].name}/>
      <div className="row">
        <div className="col-sm-5">
          <ClassDetails currClass={currClass[0]} />
          <ClassArchetypeList currClass={currClass[0]} currArchetype={params.classArchetype}/>
        </div>
        <ClassLevels currClass={currClass[0]} />
      </div>
      <ClassFeatures features={currFeatures} />
      <Footer />
    </div>
  );
}