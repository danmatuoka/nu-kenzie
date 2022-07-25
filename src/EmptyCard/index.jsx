import "./style.css";

const EmptyCard = () => {
  return (
    <div className="container-empty">
      <svg
        className="emptyCard"
        /*  width="562"
        height="89" */
        viewBox="0 0 562 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
        <path
          d="M0 4C0 1.79087 1.80515 0 4.01429 0V87.3519C1.80515 87.3519 0 85.561 0 83.3519V4Z"
          fill="#E9ECEF"
        />
        <path
          d="M519.85 0H558C560.209 0 562 1.79086 562 4V85C562 87.2091 560.209 89 558 89H519.85V0Z"
          fill="#F8F9FA"
        />
        <rect
          x="15.0535"
          y="15.7222"
          width="330.175"
          height="10.1852"
          fill="#E9ECEF"
        />
        <rect
          x="15.0535"
          y="36.0925"
          width="76.2714"
          height="10.1852"
          fill="#E9ECEF"
        />
      </svg>
    </div>
  );
};

export default EmptyCard;
