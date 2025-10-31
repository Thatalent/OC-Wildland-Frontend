import React from 'react';

interface Props {
  className?: string;
}

const ImageFillIcon: React.FC<Props> = ({ className = '' }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13.375 3.64062H12.8281V2.54688H11.7344V3.64062H6.26562V2.54688H5.17188V3.64062H4.625C4.02344 3.64062 3.53125 4.13281 3.53125 4.73438V13.4844C3.53125 14.0859 4.02344 14.5781 4.625 14.5781H13.375C13.9766 14.5781 14.4688 14.0859 14.4688 13.4844V4.73438C14.4688 4.13281 13.9766 3.64062 13.375 3.64062ZM13.375 13.4844H4.625V6.375H13.375V13.4844Z"
      fill="currentColor"
    />
  </svg>
);

export default ImageFillIcon;
