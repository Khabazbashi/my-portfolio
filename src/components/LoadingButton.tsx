const LoadingButton = () => {
  return (
    <button
      disabled
      type="button"
      className="font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 inline-flex items-center"
    >
      <svg
        role="status"
        className="inline mr-3 w-7 h-7 text-white animate-spin"
        viewBox="0 -256 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#E5E7EB"
          d="M 496,192 Q 496,132 453.5,90 411,48 352,48 q -60,0 -102,42 -42,42 -42,102 0,60 42,102 42,42 102,42 59,0 101.5,-42 Q 496,252 496,192 z M 928,0 Q 928,-53 890.5,-90.5 853,-128 800,-128 747,-128 709.5,-90.5 672,-53 672,0 672,53 709.5,90.5 747,128 800,128 853,128 890.5,90.5 928,53 928,0 z M 320,640 Q 320,574 273,527 226,480 160,480 94,480 47,527 0,574 0,640 q 0,66 47,113 47,47 113,47 66,0 113,-47 47,-47 47,-113 z M 1360,192 q 0,-46 -33,-79 -33,-33 -79,-33 -46,0 -79,33 -33,33 -33,79 0,46 33,79 33,33 79,33 46,0 79,-33 33,-33 33,-79 z M 528,1088 Q 528,1015 476.5,963.5 425,912 352,912 279,912 227.5,963.5 176,1015 176,1088 q 0,73 51.5,124.5 51.5,51.5 124.5,51.5 73,0 124.5,-51.5 Q 528,1161 528,1088 z m 464,192 q 0,-80 -56,-136 -56,-56 -136,-56 -80,0 -136,56 -56,56 -56,136 0,80 56,136 56,56 136,56 80,0 136,-56 56,-56 56,-136 z m 544,-640 q 0,-40 -28,-68 -28,-28 -68,-28 -40,0 -68,28 -28,28 -28,68 0,40 28,68 28,28 68,28 40,0 68,-28 28,-28 28,-68 z m -208,448 q 0,-33 -23.5,-56.5 -23.5,-23.5 -56.5,-23.5 -33,0 -56.5,23.5 -23.5,23.5 -23.5,56.5 0,33 23.5,56.5 23.5,23.5 56.5,23.5 33,0 56.5,-23.5 23.5,-23.5 23.5,-56.5 z"
        />
      </svg>
      LOADING..
    </button>
  );
};

export default LoadingButton;
