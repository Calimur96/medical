import "./Location.scss";
import Layout from "../../components/Layout/Layout";
import { FC } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLocation } from "../../hooks/useLocation";

const Location: FC = (): JSX.Element => {
  const { lat, lng, location } = useLocation();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries: ["places"],
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Layout>
      <div className="location">
        {location !== null && isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={15}
            options={{
              disableDefaultUI: true,
            }}
            center={{ lat, lng }}
          >
            <MarkerF position={{ lat, lng }} clickable={true} />
          </GoogleMap>
        )}
      </div>
    </Layout>
  );
};

export default Location;
