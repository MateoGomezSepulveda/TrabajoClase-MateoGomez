import React, {Component, useMemo, useState} from 'react'
import styled from "styled-components";

const Box = styled.div`
padding: 1em;
`

const Label = styled.span`
  font-weight:bold;
`

const concat = (first,second) => `${first} ||| ${second}`

const WithotMemo=({first,second}) => {
  const str = concat(first,second);

  return(
    <div>
      {str}
    </div>
  )
};

const UseMemo = ({first,second}) =>{
  const str = useMemo(()=> concat(first,second), [first,second]);

  return(
    <div>
      {str}
    </div>
  )
};

const UseFirstOnlyMemo = ({first,second}) =>{
  const str = useMemo(()=> concat(first,second), [first ]);

  return(
    <div>
      {str}
    </div>
  )
};

const UseSecondOnlyMemo = ({first,second}) =>{
  const str = useMemo(()=> concat(first,second), [first ]);

  return(
    <div>
      {str}
    </div>
  )
};


