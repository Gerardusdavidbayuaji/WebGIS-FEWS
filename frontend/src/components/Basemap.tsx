import { useRef, useState } from "react";

import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";

const Basemap = () => {
  const [center] = useState({ lat: -7.971, lng: 112.631 });
  const createdData = (e: any) => console.log(e);
  const mapref = useRef(null);
  const zoomLevel = 12;

  return (
    <div className="rounded-md z-30 w-full h-full">
      <MapContainer
        zoomControl={false}
        zoom={zoomLevel}
        center={center}
        ref={mapref}
        id="map"
        className="rounded-md"
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=AW8IuG306IIk8kNdxEw6"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={createdData}
            draw={{
              circlemarker: false,
              rectangle: false,
              polyline: true,
              polygon: true,
              circle: true,
              marker: true,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default Basemap;
