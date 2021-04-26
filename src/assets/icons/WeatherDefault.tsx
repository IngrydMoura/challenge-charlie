import React from 'react'

type Props = {
  width: string
  height: string
}

const WeatherDefault: React.FC<Props> = ({ width, height }: Props) => (
  <svg
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
  >
    <g>
      <g>
        <path
          fill="#FFF"
          d="M112,160h288c8.833,0,16-7.167,16-16s-7.167-16-16-16H112c-8.833,0-16,7.167-16,16S103.167,160,112,160z
			 M400,192H112c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,192,400,192z M400,256H112
			c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,256,400,256z M400,320H112c-8.833,0-16,7.167-16,16
			s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,320,400,320z"
        />
      </g>
    </g>
  </svg>
)

export default WeatherDefault
