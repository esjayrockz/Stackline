import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const Sale = ({ date, retailSales })=> (
    <div className="content-container">
      <div className="list-item" >
        {/* <p>{date}</p> */}
        <p>{numeral(retailSales).format('$0,0.00')}</p>
      </div>
    </div>
);

export default Sale;

//
// <div>
//   <h3 className="list-item__title">{description}</h3>
//   <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
// </div>
// <h3 className="list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
