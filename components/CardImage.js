import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const CardImage = ({ image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image.src}
          alt={image.name}
        />
        <CardContent>
          <Typography gutterBottom variant="strong" component="div">
            {image.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
              <div>
                <strong>Size: </strong> <span>{image.size}</span>
              </div>

              <div>
                <strong>Modification: </strong>{" "}
                <span>{new Date(image.modification).toDateString()}</span>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <div className="p-2">
            <Link href={image.src}>
              <a target="_blank">
                <div className="text-white bg-blue-500 w-20 rounded-md text-center p-2">See</div>
              </a>
            </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
