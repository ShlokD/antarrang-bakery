import React, { Component } from "react";

export const TitleCard = ({ title, description, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
};

export default class extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="w-full">
        <video
          className="min-w-full min-h-full"
          autoPlay
          muted
          loop
          src={this.props.coverVideoUrl}
        ></video>
      </div>
    );
  }
}
