export default function Post({ id, title, content, author }) {
  return (
    <div style={{ border: "1px solid black", padding: "15px" }}>
      <h3>{author}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
