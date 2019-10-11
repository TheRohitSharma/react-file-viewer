// Copyright (c) 2017 PlanGrid, Inc.

import React from 'react';

import 'styles/loading.scss';

const Loading = ({ loader }) => (
  <div className="progress-container">
    { loader }
  </div>
);


export default Loading;
