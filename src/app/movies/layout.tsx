export default function MoviesLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      {props.modal}
    </div>
  );
}
