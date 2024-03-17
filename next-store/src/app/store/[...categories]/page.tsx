interface ICategoryProps {
  params: { categories: string[] };
  searchParams?: { filter?: string };
}
export default function Category(props: ICategoryProps) {
  return (
    <>
      <h1>Category</h1>
      <ul>
        {props.params.categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ul>
    </>
  );
}
