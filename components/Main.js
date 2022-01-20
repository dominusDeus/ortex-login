import Login from '@/components/Login';


const Main = () => {
  return(
    <>
      <div className="columns mt-4">
        <div className="column">
          <Login />
        </div>
        <div className="column">
        Second column
        </div>
      </div>
    </>
  )
}

export default Main;