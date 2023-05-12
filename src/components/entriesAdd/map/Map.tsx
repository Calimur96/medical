import {
  useLoadScript,
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import { FC, useState } from "react";
import "./Map.scss";
import Select from "react-select";

interface Option {
  value: {
    id: number;
    name: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  label: string;
}

const options: Option[] = [
  {
    value: {
      id: 1,
      name: "центр_1",
      location: { lat: 51.507351, lng: -0.127758 },
    },
    label: "Центр 1",
  },
  {
    value: {
      id: 2,
      name: "центр_2",
      location: { lat: 37.566536, lng: 126.977966 },
    },
    label: "Центр 2",
  },
  {
    value: {
      id: 3,
      name: "центр_3",
      location: { lat: 55.755825, lng: 37.617298 },
    },
    label: "Центр 3",
  },
];

const Map: FC = (): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries: ["places"],
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [select, setSelect] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(2);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const handleMouseEnter = (id: number) => {
    setSelect(id);
  };

  return (
    <div className="entries__map">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={zoom}
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
          }}
          center={location}
          onClick={() => setSelect(null)}
          key={2}
        >
          {options.map((e) => {
            return (
              <MarkerF
                key={e.value.name}
                position={e.value.location}
                clickable={true}
                onMouseOver={() => handleMouseEnter(e.value.id)}
                onClick={() => {
                  if (select === e.value.id) return setSelect(null);

                  setLocation(e.value.location);
                  setZoom(15.0000000000001);
                  setTimeout(() => {
                    setZoom(15);
                    setTimeout(() => {
                      setSelectedOption(e);
                      setSelect(e.value.id);
                    }, 1);
                  }, 1);
                }}
              >
                {select === e.value.id && (
                  <InfoWindowF
                    position={e.value.location}
                    options={{
                      pixelOffset: new window.google.maps.Size(0, -30),
                    }}
                  >
                    <div className={`entries__map-content`}>
                      <div className="entries__map-content-center">
                        <img src="/hospital.png" alt="hospital" />
                        <div className="entries__map-content-center-info">
                          <h2>Центр: название</h2>
                          <h2>Изучено заболеваний</h2>
                        </div>
                      </div>
                      <div className="entries__map-content-info">
                        <h2>Наблюдалось: 300</h2>
                        <h2>Лечилось: 250</h2>
                        <h2>Вылечилось: 200</h2>
                        <h2>Кол-во специалистов: 5</h2>
                        <h2>Доступно: Онлайн/Оффлайн</h2>
                      </div>
                      <div className="entries__map-content-btn">
                        <button>Перейти</button>
                      </div>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            );
          })}
          <Select
            placeholder="Найти центр"
            noOptionsMessage={() => "Нету такого центра"}
            className="entries__map-select"
            value={selectedOption}
            onChange={(el) => {
              setSelect(el ? el.value.id : null);
              setZoom(15);
              setSelectedOption(el);
              setLocation(el ? el.value.location : { lat: 0, lng: 0 });
            }}
            options={options}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
