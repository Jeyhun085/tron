import Container from "@mui/material/Container";
import CommentCard from "./CommentCard";
import { data } from "./CommentsData";

export default function Comments() {
  return (
    <Container maxWidth="md" className="body-container">
      <h2>COMENTARIOS</h2>
      {data.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </Container>
  );
}
