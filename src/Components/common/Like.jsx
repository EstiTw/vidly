import React, { Component } from "react";

// This is a controlled component because its recevies all the data it needs via props
//and it notifies any changes to the data by using props
//we dont have any helper methods or event handlers, we only have a render method

//INPUT: Liked : boolean
//OUTPUT: raise onClick event

const Like = (props) => {
  const classes = props.liked === true ? "fa fa-heart" : "fa fa-heart-o";

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
