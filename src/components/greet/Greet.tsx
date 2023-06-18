type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  const { name } = props;

  return <h1>Hello {name}</h1>;
};

export default Greet;
