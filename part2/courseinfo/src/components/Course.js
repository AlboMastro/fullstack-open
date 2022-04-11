import { Content } from './Content'
import { Header } from './Header'
import { Total } from './Total'


export const Course = ({ course }) => 
  <>
    <Header course={course.name}/>
    <Content course={course}/>
    <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
  </>