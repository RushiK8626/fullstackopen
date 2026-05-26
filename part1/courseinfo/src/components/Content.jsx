const Content = ({ parts }) => {
  return (
    <>
      {parts.map((p) => (
        <p>
            {p.name} {p.exercises}
        </p>
      ))}
    </>
  )
}

export default Content
