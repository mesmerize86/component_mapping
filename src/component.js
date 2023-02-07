const lookup = {
  a: ComponentA,
  b: ComponentB,
};

export function MyComponet({ value, propa }) {
  console.log("value ", value);
  let Component = lookup[value];
  return (
    <>
      <Component propa={propa} propb="props b" />
    </>
  );
}

function ComponentA({ propa, propb }) {
  return (
    <>
      <h1>This is component A</h1>
      <p>This is {propa}</p>
      <p>This is {propb}</p>
    </>
  );
}

function ComponentB({ propa, propb }) {
  return (
    <>
      <h1>This is component B</h1>
      <p>This is {propa}</p>
      <p>This is {propb}</p>
    </>
  );
}
