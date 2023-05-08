import { FC, useEffect, useState } from "react";
import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    StandaloneSearchBox,
} from "@react-google-maps/api";
import { ILocation } from "../../../types/location.interface";

import CenterInfo from "../../../components/centerInfoBlock/CenterInfo";

import "./Map.scss";

const Map: FC = () => {
    const [lng, setLng] = useState<number>(0);
    const [lat, setLat] = useState<number>(0);
    const [zoom, setZoom] = useState<number>(10);
    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
    const [location, setLocation] = useState<ILocation | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition): void => {
                    const lat: number = pos.coords.latitude;
                    const lng: number = pos.coords.longitude;

                    setLat(lat);
                    setLng(lng);
                    setLocation({ lat, lng });
                }
            );
        }
    }, []);

    const onLoad = (ref: google.maps.places.SearchBox) => setSearchBox(ref);

    const onPlacesChanged = () => {
        try {
            if (searchBox) {
                setLat(
                    searchBox?.getPlaces()![0].geometry?.location?.lat() ?? 0
                );
                setLng(
                    searchBox?.getPlaces()![0].geometry?.location?.lng() ?? 0
                );
            }
        } catch (e) {
            throw new Error("Неудалось получить локацию");
        }
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
        libraries: ["places"],
    });

    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    return (
        <div className="auth__map">
            {location !== null && isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={zoom}
                    options={{
                        disableDefaultUI: true,
                    }}
                    center={{ lat, lng }}
                >
                    <MarkerF
                        position={{ lat, lng }}
                        clickable={true}
                        onClick={() => setZoom(zoom < 15 ? 15 : 10)}
                    />
                    <StandaloneSearchBox
                        onLoad={onLoad}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <input
                            type="text"
                            placeholder="Введите адрес"
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `300px`,
                                height: `40px`,
                                padding: `0 12px`,
                                borderRadius: `25px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                backgroundColor: "#fff",
                                left: "50%",
                                marginLeft: "-120px",
                                marginTop: "10px",
                            }}
                        />
                    </StandaloneSearchBox>
                    <CenterInfo />
                </GoogleMap>
            )}
        </div>
    );
};

export default Map;
