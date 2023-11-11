interface PropsFormInput {
  value: string;
  name: string;
}

export default function FormInput({ value, name }: PropsFormInput) {
  return;
  <div>
    <input type="text" placeholder={name} value={value} />
  </div>;
}
