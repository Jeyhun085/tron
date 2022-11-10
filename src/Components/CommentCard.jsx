import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



export default function CommentCard(props) {
const comment = props.comment
  return (
    <Card sx={{ width: "100%" , marginTop:"20px"}}>
      <CardHeader
        avatar={
          <img alt={comment.avatar} className="avatar-image" src={`/images/${comment.avatar}.jpeg`}/>
        }
        title={comment.name}
        subheader={comment.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.text}
        </Typography>
      </CardContent>
      {comment.img && <div style={{ textAlign: "center" }}>
        <img
          className="commentPhoto"
          alt="commentPhoto1"
          src={`/images/${comment.img}.jpeg`}
        />
      </div>}
      
    </Card>
  );
}
