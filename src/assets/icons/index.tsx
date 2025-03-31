interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}
export const Checked = ({
  width = 19,
  height = 14,
  className = "",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 19 14"
    fill="none"
  >
    <path
      d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
