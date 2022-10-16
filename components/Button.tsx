type Props = {
  text: string;
  link: string;
};

function Button({ text, link }: Props) {
  return (
    <a href={link}>
      <div className="w-44 rounded-xl">{text} &#8594;</div>
    </a>
  );
}

export default Button;
