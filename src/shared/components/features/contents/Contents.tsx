import React, { FunctionComponent } from 'react';

type ContentsProps = {
  contents: string;
};

const contents: FunctionComponent<ContentsProps> = function ({ contents }) {
  return <div>{contents}</div>;
};

export default contents;
