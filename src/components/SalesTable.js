import React from 'react';
import { connect } from 'react-redux';
import Sale from './Sale';

export const SalesTable = (props) => (

    <div>
      <div className="list-body">
      {
        (
          props.sales.map((sale, index)=>(
            <Sale
              key = {index}
              {...sale}
            />
          ))
        )
      }
     </div>
    </div>
);

const mapStateToProps = (state) => ({
  sales: state.sales.data
});

export default connect(mapStateToProps)(SalesTable);
