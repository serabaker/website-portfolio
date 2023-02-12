import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
// import pandas from "../../images/python_pandas.png";
import Link from "@mui/material/Link";

function TitlebarImageList() {
  return (
    <ImageList sx={{ height: 450, margin: 9 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          id="blog"
          sx={{
            fontSize: 34,
            fontFamily: "Baskervville serif",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingBottom: 2,
          }}
          component="div"
        >
          Quick Reads
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            id={item.id}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const titleLinks = [
  <Link
    style={{
      color: "white",
      fontFamily: "Baskervville serif",
      textDecoration: "none",
    }}
    href="/entries"
  >
    Learn More About Pandas, Python Pandas That Is{" "}
  </Link>,
];
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmRhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: titleLinks[0],
    author: "Author: serabaker",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
export default TitlebarImageList;
