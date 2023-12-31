interface Props {
  type: "ACTIVE" | "DEFAULT";
  children: React.ReactElement | string;
  onClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isDisabled?: boolean;
  // styles?: string;
}

const buttonStyles = {
  active:
    "w-40 px-4 py-2 font-semibold rounded-full cursor-pointer bg-blue-500 text-white",
  default:
    "w-40 px-4 py-2 font-semibold rounded-full cursor-pointer text-blue-500 hover:bg-gray-200 active:bg-blue-500 active:text-white",
};

export default function Buttons({
  type,
  children,
  onClick,
  isDisabled,
}: Props) {
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className={
          type === "ACTIVE" ? buttonStyles.active : buttonStyles.default
        }
      >
        {children}
      </button>
    </>
  );
}
