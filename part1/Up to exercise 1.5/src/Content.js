export const Part = (props) => {
	return (
		<>
			<p>
        Part {props.part} has {props.exercise} exercises
      </p>		
		</>
	)
}

export const Content = (props) => {
    return (
        <>
                <Part part={props.part1} has exercise={props.exercises1} />
								<Part part={props.part2} has exercise={props.exercises2} />
								<Part part={props.part3} has exercise={props.exercises3} />
        </>
    )
}