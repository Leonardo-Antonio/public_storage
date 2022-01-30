import { CardImage } from "./CardImage";
import { v4 as uuid } from "uuid";

export const ImagesCard = ({ images }) => {
  return (
    <div>
      {
        images == undefined ? <span>NO DATA</span> : (
          <div className="flex flex-wrap gap-6 justify-center">
            {images.map((image) => (
              <CardImage key={uuid()} image={image} />
            ))}
          </div>
        )
      }
    </div>
  );
};
