import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardContent, Badge, Button } from "@mui/material";
import { Link } from "react-router-dom";
function CardDetail({ datas, id }) {
  const [detail, setDetail] = useState([]);
  const filterDetail = datas.find((data) => {
    return data.Id === parseInt(id);
  });
  useEffect(() => {
    setDetail(filterDetail);
  }, [datas, id]);
  return (
   <div className="mt-4">
     <Container>
     <Link className="text-decoration-none" to={'/'}>
        <h2>Back</h2>
    </Link>
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <Card>
          <img
            src={`/img/${detail.Id}.jpg`}
            alt={detail.MMName}
            className="img-fluid col-12 col-md-8 col-lg-12"
          />
          <CardContent>
            <div className="d-flex justify-content-between fs-4 align-items-center mt-3 fw-bold">
              <div>
                <Typography variant="h6">{detail.MMName}</Typography>
              </div>
              <div className="d-flex">
                <Typography variant="h6">
                  {detail.IsDanger === "Yes" ? "အန္တရာယ်ရှိ/" : "အန္တရာယ်မရှိ/"}
                </Typography>
                <Typography variant="h6">
                  {detail.IsPoison === "Yes" ? "အဆိပ်ရှိ" : "အဆိပ်မရှိ"}
                </Typography>
              </div>
            </div>
            <Typography variant="body1">{detail.EngName}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h4" className="fs-4 fw-bold mb-2">
          Detail
        </Typography>
        <Typography className="mb-3" variant="body1">{detail.Detail}</Typography>
      </Grid>
    </Grid>
  </Container>
   </div>
  );
}

export default CardDetail;
