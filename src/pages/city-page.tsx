import { useParams, useSearchParams } from "react-router-dom";


const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  
  return (
    <div>CityPage</div>
  )
}

export default CityPage