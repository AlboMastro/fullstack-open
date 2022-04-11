import { Part } from "./Part"
export const Content = ({ course }) =>
    <>
        <Part name={course.parts[0].name} exercise={course.parts[0].exercises} />
        <Part name={course.parts[1].name} exercise={course.parts[1].exercises} />
        <Part name={course.parts[2].name} exercise={course.parts[2].exercises} />
    </>