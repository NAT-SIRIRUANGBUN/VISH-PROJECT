export default function Buy({
    width = 16,
    height = 16,
    className,
  }: {
    width?: number;
    height?: number;
    className?: string;
  }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M2.5 20C1.95 20 1.47917 19.8042 1.0875 19.4125C0.695833 19.0208 0.5 18.55 0.5 18V6C0.5 5.45 0.695833 4.97917 1.0875 4.5875C1.47917 4.19583 1.95 4 2.5 4H4.5C4.5 2.9 4.89167 1.95833 5.675 1.175C6.45833 0.391667 7.4 0 8.5 0C9.6 0 10.5417 0.391667 11.325 1.175C12.1083 1.95833 12.5 2.9 12.5 4H14.5C15.05 4 15.5208 4.19583 15.9125 4.5875C16.3042 4.97917 16.5 5.45 16.5 6V18C16.5 18.55 16.3042 19.0208 15.9125 19.4125C15.5208 19.8042 15.05 20 14.5 20H2.5ZM2.5 18H14.5V6H12.5V8C12.5 8.28333 12.4042 8.52083 12.2125 8.7125C12.0208 8.90417 11.7833 9 11.5 9C11.2167 9 10.9792 8.90417 10.7875 8.7125C10.5958 8.52083 10.5 8.28333 10.5 8V6H6.5V8C6.5 8.28333 6.40417 8.52083 6.2125 8.7125C6.02083 8.90417 5.78333 9 5.5 9C5.21667 9 4.97917 8.90417 4.7875 8.7125C4.59583 8.52083 4.5 8.28333 4.5 8V6H2.5V18ZM6.5 4H10.5C10.5 3.45 10.3042 2.97917 9.9125 2.5875C9.52083 2.19583 9.05 2 8.5 2C7.95 2 7.47917 2.19583 7.0875 2.5875C6.69583 2.97917 6.5 3.45 6.5 4Z"/>
        
      </svg>
    );
  }