function Book({data}) {
  return (
    <div>
        {data.map((val, index) => (
            <li key={index}>{val.name}, {val.age}</li>
        ))}
    </div>
  )
}

export default Book 