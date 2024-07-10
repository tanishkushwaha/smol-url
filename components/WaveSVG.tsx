const WaveSVG = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fillOpacity="1"
        d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,128C840,128,960,192,1080,202.7C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
    </svg>
  )
}

export default WaveSVG