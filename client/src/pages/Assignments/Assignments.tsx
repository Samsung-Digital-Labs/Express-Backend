import React, { useRef, useState } from "react";
import {
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
  IonContent,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { ItemReorderEventDetail } from "@ionic/core";
import SearchBar from "./searchBar";
import "./assignmentList.scss";
import { Link } from "react-router-dom";
import Assignment from "../../models/Assignment";
function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  event.detail.complete();
}

const assignments: Assignment[] = [
  {
    name: "Getting Started with Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    color: "green",
    id: "4",
  },
  {
    name: "Getting Started with Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ted Turtle"],
    timeStart: "9:30 am",
    timeEnd: "9:45 am",
    color: "red",
    id: "2",
  },
  {
    name: "Ionic Tooling",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Rachel Rabbit"],
    timeStart: "9:45 am",
    timeEnd: "10:00 am",
    color: "blue",
    id: "3",
  },
  {
    name: "University of Ionic",
    date: new Date("25-07-2020"),
    description:
      "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
    classroom: ["Ellie Elephant"],
    timeStart: "9:15 am",
    timeEnd: "9:30 am",
    color: "green",
    id: "4",
  },
];

const Assignments: React.FC = () => {
  const [location , setLocation ] = useState({});
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  /*const location = {
    pathname: `/page/assignments/${assignments[0].id}`,
    assignment: assignments[0],
  };*/

  //Set route location from search bar
  const handleLocation = (data, i) => {
    const loc = {
      pathname: `/page/assignments/${assignments[i].id}`,
      assignment: data,
    }
    setLocation(loc);
  }

  return (
    <>
      <SearchBar tasks = {assignments} setLocation = {(data , i) => { handleLocation(data, i)}}/>
      <IonContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {assignments.map((assignment) => (
            <IonItemSliding ref={ionItemSlidingRef}>
              <Link to={location} className="noUnderline">
                <IonItem
                // routerLink = {`/page/assignments/${assignment.id}`}
                >
                  <div
                    className="verticalLine"
                    style={{ background: assignment.color }}
                  ></div>
                  <IonLabel>
                    <h2>{assignment.name}</h2>
                    <p>
                      {assignment.timeStart} &mdash;&nbsp;
                      {assignment.timeStart} &mdash;&nbsp;
                      {assignment.classroom}
                    </p>
                  </IonLabel>
                  <IonReorder slot="end" />
                </IonItem>
              </Link>
              <IonItemOptions side="start">
                <IonItemOption
                  style={{
                    background: assignment.color,
                  }}
                  // onClick={() => Bookmark()}
                >
                  Bookmark
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonReorderGroup>
      </IonContent>
    </>
  );
};

export default Assignments;
