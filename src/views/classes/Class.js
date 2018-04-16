import React from 'react';
import JumbotronComponent from '../../jumbotron.js';
import Footer from '../../footer.js';

import classes from '../../data/classData.json';

import {ClassLevels} from './ClassLevels.js';
import {ClassArchetypeList} from './ClassArchetypeList.js';
import {ClassDetails} from './ClassDetails.js';
import {ClassFeatures} from './ClassFeatures.js';

export const Class = ( {params} ) => {
  var className = params.className.charAt(0).toUpperCase() + params.className.slice(1);
  var currClass;
  for (var i=0; i < classes.class.length; i++) {
    if (classes.class[i].name === className) {
      currClass = classes.class[i];
    }
  }

  return(
    <div>
      <JumbotronComponent title={currClass.name} description={currClass.description} image={currClass.name}/>
      <div className="row">
        <div className="col-sm-5">
          <ClassDetails currClass={currClass} />
          <ClassArchetypeList currClass={currClass} />
        </div>
        <ClassLevels currClass={currClass} />
      </div>
      <ClassFeatures features={currClass.features} />
      <Footer />
    </div>

  );
}