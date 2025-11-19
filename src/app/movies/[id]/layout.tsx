export default function MovieLayout(props: {
  children: React.ReactNode;
  trailer: React.ReactNode;
  reviews: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      {props.trailer}
      {props.reviews}
      {props.modal}
    </div>
  );
}
