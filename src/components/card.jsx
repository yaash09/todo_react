import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({title, content}) {
  return (
    <Box sx={{ maxWidth: 320, minWidth: 275, margin:"10px 10px" , flexWrap: "wrap"}}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            {title &&<Typography variant="h5" component="div">
              {title}
            </Typography>}
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.priority}
            </Typography> */}
            <Typography variant="body2">{content}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
