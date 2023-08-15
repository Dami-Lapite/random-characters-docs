import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class Documentation extends Component {
  render() {
    return (
      <div id="Docs" className="flex flex-col w-full h-max scroll-smooth">
        <NavBar content={this.props.content.navBar} />
        <div className="block w-full h-max">
          <div className="flex flex-col w-10/12 mx-auto my-16">
            <p className="text-xl lg:text-4xl font-semibold text-left mt-4 text-pink-600">
              {this.props.content.docs.header}
            </p>
            <p className="text-sm lg:text-base font-normal text-left mt-2 text-gray-500">
              {this.props.content.docs.subtext}
            </p>
            <ul className="my-8 list-inside list-disc">
              {this.props.content.docs.sections.map((section) => (
                <li className="my-2 text-base lg:text-lg font-normal text-gray-600 underline decoration-1 underline-offset-4">
                  <a href={section.link}>{section.title}</a>
                </li>
              ))}
            </ul>
            <div id={this.props.content.docs.availableRoutesSection.link}>
              <p className="text-lg lg:text-3xl font-semibold text-left mt-4 text-gray-600">
                {this.props.content.docs.availableRoutesSection.header}
              </p>
              {this.props.content.docs.availableRoutesSection.routes.map(
                (routeItem) => (
                  <div className="my-10">
                    <p className="text-indigo-600 text-base lg:text-xl font-medium my-4">
                      {routeItem.title}
                    </p>
                    <p className="my-4 bg-gray-200 text-sm lg:text-base rounded p-2 text-gray-600 w-fit">
                      {routeItem.endpoint}
                    </p>
                    <p className="text-sm lg:text-base leading-relaxed font-normal my-4 text-gray-600">
                      {routeItem.description}
                    </p>
                  </div>
                )
              )}
            </div>
            <div id={this.props.content.docs.queryOptionsSection.link}>
              <p className="text-lg lg:text-3xl font-semibold text-left mt-4 text-gray-600">
                {this.props.content.docs.queryOptionsSection.header}
              </p>
              <p className="text-lg lg:text-xl font-semibold mt-7 text-gray-500">
                {this.props.content.docs.queryOptionsSection.notesLabel}
              </p>
              <ul className="my-2 list-inside list-disc">
                {this.props.content.docs.queryOptionsSection.notes.map(
                  (note) => (
                    <li className="my-2 text-sm lg:text-base leading-relaxed font-normal text-gray-600">
                      {note}
                    </li>
                  )
                )}
              </ul>
              {this.props.content.docs.queryOptionsSection.options.map(
                (option) => (
                  <div className="my-5">
                    <p className="text-base lg:text-xl font-medium my-4 text-indigo-600">
                      {option.name}
                    </p>
                    <p className="text-sm lg:text-base font-normal my-4 text-gray-600">
                      {option.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <Footer content={this.props.content.footer} />
      </div>
    );
  }
}
