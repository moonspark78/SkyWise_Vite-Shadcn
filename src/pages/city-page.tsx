import { useParams, useSearchParams } from "react-router-dom";


const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  return (
    <div>CityPage</div>
  )
}

export default CityPage