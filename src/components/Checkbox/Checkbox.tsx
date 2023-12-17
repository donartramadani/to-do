interface Props {
  id?: string;
  name?: string;
  checked?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
}

export const Checkbox = (props: Props) => {
  return (
    <div className="relative flex items-center">
      <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        onClick={props.onClick}
        checked={props.checked}
        type="checkbox"
        className="h-4 w-4 rounded border-grayscale500 text-successSemiDark focus:ring-transparent mr-4"
      />
      {props.label && (
        <label htmlFor={props.id} className="text-black">
          {props.label}
        </label>
      )}
    </div>
  );
};
