interface LogoProps {
  size: number;
}

export const Logo = ({ size }: LogoProps) => (
  <svg width={size} height={size} viewBox={`-489 491 100 125`} fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="logo">
    <path
      d="M-447.3,557.7c-11.8,0-20.8-7.3-20.8-16.7c11.8,1.6,29.9,1.6,41.7,0C-426.5,550.3-435.6,557.7-447.3,557.7z M-432.8,530.6  c-4.7,0-8.3-3.7-8.3-8.3s3.7-8.3,8.3-8.3s8.3,3.7,8.3,8.3S-428.1,530.6-432.8,530.6z M-461.9,530.6c-4.7,0-8.3-3.7-8.3-8.3  s3.7-8.3,8.3-8.3c4.7,0,8.3,3.7,8.3,8.3S-457.2,530.6-461.9,530.6z M-393.2,591v-83.3l-8.3-8.3v83.3h-66.7c-4.2,0-8.3-2.1-8.3-8.3  h66.7V491h-62.5c-12.5,0-12.5,0-12.5,12.5v70.8c0,12.5,10.4,16.7,20.8,16.7H-393.2z"
      fill="#FADA5E"
    />
  </svg>
);
