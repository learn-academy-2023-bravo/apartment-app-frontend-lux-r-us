import Lux from "../assets/Lux-R-Us.svg"

const Home = () => {
  return (
    <>
      <h2 className="flex justify-center"> Welcome Home... Sanitarium</h2>
      <div className="flex justify-center">
        <img className="h-50 w-50 " src={Lux} alt="company logo" />
      </div>
    </>
  )
}

export default Home
