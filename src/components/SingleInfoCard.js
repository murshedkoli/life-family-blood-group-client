import React from 'react';

const SingleInfoCard = ({heading, number, footer}) => {
    return (
        <div class="col-xl-3 col-md-6">
          <div class="card card-stats">
            
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0"> {heading} </h5>
                  <span class="h2 font-weight-bold mb-0">{number}</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                    <i class="ni ni-active-40"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-sm">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> </span>
                <span > {footer} </span>
              </p>
            </div>
          </div>
        </div>
    );
};

export default SingleInfoCard;