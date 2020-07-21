import React from 'react'

// eslint-disable-next-line react/prop-types
const CloseButton = ({ width }) => (
  <svg
    width={width || '24'}
    height={width || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.22493 4.81099C6.03632 4.62883 5.78372 4.52803 5.52153 4.53031C5.25933 4.53259 5.00852 4.63776 4.82311 4.82317C4.6377 5.00858 4.53253 5.25939 4.53025 5.52158C4.52797 5.78378 4.62877 6.03638 4.81093 6.22499L10.5859 12L4.80993 17.775C4.71442 17.8672 4.63823 17.9776 4.58583 18.0996C4.53342 18.2216 4.50583 18.3528 4.50468 18.4856C4.50352 18.6184 4.52882 18.75 4.5791 18.8729C4.62939 18.9958 4.70364 19.1075 4.79753 19.2014C4.89142 19.2953 5.00308 19.3695 5.12597 19.4198C5.24887 19.4701 5.38055 19.4954 5.51333 19.4942C5.64611 19.4931 5.77733 19.4655 5.89933 19.4131C6.02134 19.3607 6.13168 19.2845 6.22393 19.189L11.9999 13.414L17.7749 19.189C17.9635 19.3711 18.2161 19.4719 18.4783 19.4697C18.7405 19.4674 18.9913 19.3622 19.1767 19.1768C19.3622 18.9914 19.4673 18.7406 19.4696 18.4784C19.4719 18.2162 19.3711 17.9636 19.1889 17.775L13.4139 12L19.1889 6.22499C19.3711 6.03638 19.4719 5.78378 19.4696 5.52158C19.4673 5.25939 19.3622 5.00858 19.1767 4.82317C18.9913 4.63776 18.7405 4.53259 18.4783 4.53031C18.2161 4.52803 17.9635 4.62883 17.7749 4.81099L11.9999 10.586L6.22493 4.80999V4.81099Z" />
  </svg>
)

export default CloseButton
