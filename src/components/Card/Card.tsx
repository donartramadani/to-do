interface Props {
  children: React.ReactNode;
}
export const Card = (props: Props) => {
  return <div className="rounded-lg border border-silver p-4">{props.children}</div>;
};
