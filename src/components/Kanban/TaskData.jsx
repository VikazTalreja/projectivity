import img1 from "../../assets/Images/bg1.png";
import img2 from "../../assets/Images/bg2.png";
import img3 from "../../assets/Images/coffee.png";
const tasks = {
  ToDo: [
    {
      id: 1,
      title: "Task 1",
      image: img1,
      date: "sep 30, 2023",
      desc: "Add a Short Description or Link a Web Page",
      Completed: 20,
    },
  ],
  InProgress: [
    {
      id: 5,
      title: "Task 3",
      image: img2,
      date: "May 20, 2022",
      desc: "Add a Short Description or Link a Web Page",
      Completed: "10",
    },
  ],
  Done: [
    {
      id: 6,
      title: "Task 4",

      date: "sep 3, 2023",
      desc: "Add a Short Description or Link a Web Page",
      Completed: "100",
    },
    {
      id: 7,
      title: "Task 6",
      image: img3,
      date: "May 1 2023",
      desc: "Add a Short Description or Link a Web Page",
      Completed: "100",
    },
  ],
};

export default tasks;
