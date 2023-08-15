import React, { Component } from "react";
import { Link } from "react-router-dom";
import github from "../assets/images/icons8-github-30.png";

export default class NavBar extends Component {
  render() {
    return (
      <div id="NavBar" className="block w-full h-max">
        <div className="md:float-left m-5">
          <Link
            className="text-lg lg:text-xl font-semibold text-gray-600 cursor-pointer"
            to="/"
          >
            {this.props.content.title}
          </Link>
        </div>
        <div className="md:float-right m-5 flex">
          <Link
            className="mr-4 inline text-base lg:text-lg underline underline-offset-4 transition ease-in-out decoration-pink-600 hover:text-pink-600 font-light text-gray-500 cursor-pointer"
            to="/docs"
          >
            {this.props.content.docsLabel}
          </Link>
          <a
            className="inline-block mx-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={this.props.content.githubLink}
          >
            <img className="w-7 h-7" src={github} alt="github logo" />
          </a>
        </div>
      </div>
    );
  }
}
