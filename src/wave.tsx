

/**.custom-shape-divider-top-1696622421 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1696622421 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 98px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1696622421 .shape-fill {
    fill: #27272A;
} */

const Wave = () => {
  return (
    <div 
        style={{
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: 'rotate(180deg)',
            backgroundColor: '#059669'
        }}>
        <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{
                position: 'relative',
                display: 'block',
                width: 'calc(100% + 1.3px)',
                height: '98px',
                marginTop: '-2px',
                transform: 'rotateY(180deg)'
            }}>
                <path 
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                    fill="#27272A"></path>
        </svg>
    </div>
  )
}

export default Wave