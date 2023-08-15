import React, { Component } from "react";
import icons8 from "../assets/images/icons8-icons8-50.png";

export default class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="flex flex-col items-center">
        <a
          className="m-2 text-sm lg:text-base transition ease-in-out text-gray-600 font-normal underline underline-offset-4 decoration-pink-600 hover:text-pink-600 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={this.props.content.portfolioLink}
        >
          {this.props.content.developer}
        </a>
        <a
          className="m-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={this.props.content.iconsLink}
        >
          <img className="w-6 h-6" src={icons8} alt="icons8 logo" />
        </a>
      </div>
    );
  }
}
