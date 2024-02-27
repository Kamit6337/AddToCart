const ErrorPage = ({ searchParams: { msg } }) => {
  return (
    <div>
      <p>ErrorPage</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
