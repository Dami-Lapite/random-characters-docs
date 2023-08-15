import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      fetchSuccess: false,
      sampleResponse: null,
    };
  }

  async fetchSampleUrl(url) {
    let response = await fetch(url);
    if (response.status === 200) {
      let data = await response.json();
      return data;
    } else {
      return "Error";
    }
  }

  runSample = () => {
    this.setState({
      isLoading: true,
    });
    this.fetchSampleUrl(
      "https://api.randomcharacters.app/characters/random"
    ).then(
      (data) => {
        this.setState({
          isLoading: false,
          fetchSuccess: true,
          sampleResponse: JSON.stringify(data, null, 4),
        });
      },
      (error) => {
        this.setState({
          isLoading: false,
          sampleResponse: { message: "Fetch Failed" },
        });
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div id="Home" className="flex flex-col w-full h-max">
        <NavBar content={this.props.content.navBar} />
        <div className="block w-full h-max">
          <p className="text-xl lg:text-4xl leading-relaxed font-semibold text-center text-transparent m-10 bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            {this.props.content.home.header}
          </p>
          <p className="text-sm lg:text-base font-light text-center m-5 text-gray-500">
            {this.props.content.home.subtext}
            <a
              className="transition ease-in-out underline text-gray-500 underline-offset-4 decoration-sky-600 hover:text-sky-600 cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href={this.props.content.home.feedbackLink}
            >
              {this.props.content.home.feedbackLabel}
            </a>
          </p>
          <div className="flex flex-col w-10/12 mx-auto my-16">
            <p className="text-gray-600 lext-base lg:text-lg my-3 font-semibold">
              {this.props.content.home.sampleRequestsLabel}
            </p>
            {this.props.content.home.sampleRequests.map((request) => (
              <div className="my-3">
                <p className="font-normal text-sm lg:text-base text-gray-500">
                  {request.description}
                </p>
                <div className="bg-gray-900 py-6 px-5 my-1 rounded text-xs lg:text-sm font-medium">
                  <pre className="overflow-auto whitespace-normal break-all">
                    <code>
                      <span className="text-sky-400">
                        {this.props.content.home.demoDomain}
                      </span>
                      <span className="text-sky-100">{request.endpoint}</span>
                    </code>
                  </pre>
                </div>
              </div>
            ))}
            <div
              className="my-4 transition ease-in-out bg-sky-600 px-4 py-2 font-medium w-fit text-white text-sm lg:text-base rounded hover:bg-sky-700 hover:scale-110 hover:translate-y-1 cursor-pointer"
              onClick={this.runSample}
            >
              <p>{this.props.content.home.sampleButtonLabel}</p>
            </div>
            <p className="text-gray-600 text-base lg:text-lg my-3 font-semibold">
              {this.props.content.home.sampleResponseLabel}
            </p>
            <div
              className={` ${
                this.state.isLoading ? "animate-pulse" : ""
              } bg-gray-900 py-7 px-5 my-4 w-full rounded text-xs lg:text-sm font-medium text-sky-100`}
            >
              {this.state.sampleResponse && (
                <div>
                  {this.state.fetchSuccess ? (
                    <pre className="overflow-auto whitespace-pre-wrap">
                      <code>{this.state.sampleResponse}</code>
                    </pre>
                  ) : (
                    <p>{this.state.sampleResponse.message}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer content={this.props.content.footer} />
      </div>
    );
  }
}
