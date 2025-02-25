import React from 'react';

interface CreditCardIconProps {
  className?: string;
  fill?: string;
}

const CreditCardIcon: React.FC<CreditCardIconProps> = ({ className = '', fill = '#B1B1B1' }) => {
  return (
    <svg 
      width="26" 
      height="26" 
      viewBox="0 0 26 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_14_1249)">
        <path d="M22.9608 7.16339V6.80772C22.9608 5.17271 21.6306 3.8425 19.9956 3.8425H2.96522C1.33016 3.84255 0 5.17271 0 6.80772V7.16339H22.9608Z" fill={fill}/>
        <path d="M13.5651 16.7017C13.5651 15.1636 14.0598 13.7017 14.9731 12.4968H0V16.6331C0 18.2681 1.33016 19.5983 2.96522 19.5983H14.1911C13.7813 18.7007 13.5651 17.7179 13.5651 16.7017ZM11.4804 15.803H8.92125V14.2796H11.4804V15.803ZM3.41545 14.2796H7.39781V15.803H3.41545V14.2796Z" fill={fill}/>
        <path d="M16.5547 10.9734C17.7165 10.1606 19.0967 9.72262 20.5443 9.72262C21.3822 9.72262 22.1973 9.86974 22.9608 10.1509V8.68689H0V10.9734H16.5547Z" fill={fill}/>
        <path d="M26 16.7017C26 13.6886 23.5573 11.246 20.5442 11.246C17.5311 11.246 15.0885 13.6886 15.0885 16.7017C15.0885 19.7148 17.5311 22.1574 20.5442 22.1574C23.5573 22.1574 26 19.7148 26 16.7017ZM21.2796 19.6163V20.2363H20.5179V20.2363V20.2363H19.7562V19.6209C19.2957 19.4649 18.9189 19.1906 18.5509 18.9215L19.4503 17.6918C19.9446 18.0534 20.1976 18.2271 20.5442 18.2271C20.7402 18.2271 20.8989 18.1339 20.9585 17.9837C21.0305 17.8019 20.9287 17.6344 20.6861 17.5356C20.6861 17.5356 19.5973 17.1725 19.0939 16.6593C18.6715 16.2287 18.5372 15.6219 18.6716 15.0447C18.807 14.4635 19.1994 14.009 19.7562 13.7821V13.167H21.2796V13.7566C21.6665 13.8641 21.994 14.0229 22.1823 14.1251L21.4555 15.4639C20.9736 15.2024 20.5303 15.1238 20.3577 15.1828C20.1903 15.24 20.1648 15.3492 20.1552 15.3903C20.1417 15.4486 20.1344 15.538 20.2276 15.6418C20.3172 15.7416 21.2605 16.1247 21.2605 16.1247C22.2782 16.539 22.7572 17.5795 22.3747 18.5449C22.176 19.0466 21.776 19.4266 21.2796 19.6163Z" fill={fill}/>
      </g>
      <defs>
        <clipPath id="clip0_14_1249">
          <rect width="26" height="26" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CreditCardIcon;
