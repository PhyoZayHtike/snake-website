import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Error from "./Error";
import { TextField } from "@mui/material";

function Card({ datas }) {
  const [contents, setContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setContent(datas);
  }, [datas]);

  const filterData = searchQuery
    ? contents.filter((content) => {
        return content.MMName.includes(searchQuery);
      })
    : contents;
  return (
    <div className="container mt-3 p-4 ">
      <div className="col-10 col-md-8 col-lg-5">
      <TextField
      onChange={(e) => setSearchQuery(e.target.value)}
      label="Search"
      type="search"
      variant="standard"
      fullWidth
      margin="normal"
    />
      </div>
      <div className="row">
        {filterData.length === 0 ? (
          <Error error={'Data Not Found!'}/>
        ) : (
          filterData.map((content) => {
            return (
              <div key={content.Id} className="col-12 col-md-6 col-lg-4">
                <Cards className="border m-auto mt-3" sx={{ maxWidth: 365 }}>
                  <CardMedia
                    component="img"
                    alt={content.MMName}
                    height="300"
                    image={`/img/${content.Id}.jpg`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {content.MMName}
                    </Typography>
                  </CardContent>
                  <CardActions className="float-end">
                    <Link to={`detail/${content.Id}`}>
                      <Button size="small">See More</Button>
                    </Link>
                  </CardActions>
                </Cards>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Card;
