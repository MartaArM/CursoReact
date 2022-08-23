import { ImageList, ImageListItem } from "@mui/material";
import { useSelector } from "react-redux";


export const ImageGallery = () => {

  const {activeNote} = useSelector(state => state.journal);
  const {imageURLs} = activeNote;

  return (
    <ImageList sx={{ width: '1000px', height: 500 }} cols={4} rowHeight={400}>
      {imageURLs.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=200&h=164&fit=clip&auto=format`}
            srcSet={`${image}?w=200&h=164&fit=clip&auto=format&dpr=2 2x`}
            alt="Imagen"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
