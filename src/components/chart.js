import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default props => {
  const avg = _.round(_.sum(props.data)/props.data.length);

  return (
    <div>
      <Sparklines height={120} width={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type={'avg'} />
      </Sparklines>
      <div>{avg} {props.units}</div>
    </div>
  );
};